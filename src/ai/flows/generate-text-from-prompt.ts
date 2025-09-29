'use server';

/**
 * @fileOverview A text generation AI agent.
 *
 * - generateTextFromPrompt - A function that generates text based on a prompt.
 * - GenerateTextFromPromptInput - The input type for the generateTextFromPrompt function.
 * - GenerateTextFromPromptOutput - The return type for the generateTextFromPrompt function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTextFromPromptInputSchema = z.object({
  prompt: z.string().describe('The prompt to generate text from.'),
});
export type GenerateTextFromPromptInput = z.infer<
  typeof GenerateTextFromPromptInputSchema
>;

const GenerateTextFromPromptOutputSchema = z.object({
  text: z.string().describe('The generated text.'),
});
export type GenerateTextFromPromptOutput = z.infer<
  typeof GenerateTextFromPromptOutputSchema
>;

export async function generateTextFromPrompt(
  input: GenerateTextFromPromptInput
): Promise<GenerateTextFromPromptOutput> {
  return generateTextFromPromptFlow(input);
}

const generateTextFromPromptPrompt = ai.definePrompt({
  name: 'generateTextFromPromptPrompt',
  input: {schema: GenerateTextFromPromptInputSchema},
  output: {schema: GenerateTextFromPromptOutputSchema},
  prompt: `{{{prompt}}}`,
});

const generateTextFromPromptFlow = ai.defineFlow(
  {
    name: 'generateTextFromPromptFlow',
    inputSchema: GenerateTextFromPromptInputSchema,
    outputSchema: GenerateTextFromPromptOutputSchema,
  },
  async input => {
    const {output} = await generateTextFromPromptPrompt(input);
    return output!;
  }
);
