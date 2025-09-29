'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating text from a template. The flow takes a template name and a
 *  set of optional sections, then uses an AI model to generate content based on the template and included sections.  It exports:
 *
 * - `generateTextFromTemplate` - A function that accepts a template name and optional sections, and returns the generated text.
 * - `GenerateTextFromTemplateInput` - The input type for the `generateTextFromTemplate` function.
 * - `GenerateTextFromTemplateOutput` - The output type for the `generateTextFromTemplate` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTextFromTemplateInputSchema = z.object({
  templateName: z.string().describe('The name of the template to use.'),
  optionalSections: z
    .array(z.string())
    .optional()
    .describe('An array of optional section names to include in the generated text.'),
});

export type GenerateTextFromTemplateInput = z.infer<typeof GenerateTextFromTemplateInputSchema>;

const GenerateTextFromTemplateOutputSchema = z.object({
  generatedText: z.string().describe('The text generated based on the template and selected sections.'),
});

export type GenerateTextFromTemplateOutput = z.infer<typeof GenerateTextFromTemplateOutputSchema>;

async function generateTextFromTemplate(input: GenerateTextFromTemplateInput): Promise<GenerateTextFromTemplateOutput> {
  return generateTextFromTemplateFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTextFromTemplatePrompt',
  input: {schema: GenerateTextFromTemplateInputSchema},
  output: {schema: GenerateTextFromTemplateOutputSchema},
  prompt: `You are an AI assistant that generates content based on templates. You have access to a variety of templates, and can include or exclude optional sections as requested.

  The user has selected the following template: {{{templateName}}}

  {{#if optionalSections}}
  The user has also requested that the following optional sections be included:
  {{#each optionalSections}}
  - {{{this}}}
  {{/each}}
  {{else}}
  The user has not specified any optional sections.
  {{/if}}

  Please generate content based on the selected template and included sections.`,
});

const generateTextFromTemplateFlow = ai.defineFlow(
  {
    name: 'generateTextFromTemplateFlow',
    inputSchema: GenerateTextFromTemplateInputSchema,
    outputSchema: GenerateTextFromTemplateOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

export {generateTextFromTemplate};
