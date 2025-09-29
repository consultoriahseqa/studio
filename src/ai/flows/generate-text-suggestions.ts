'use server';

/**
 * @fileOverview Generates text suggestions based on a given incomplete sentence.
 *
 * - generateTextSuggestions - A function that takes an incomplete sentence and returns text suggestions to complete it.
 * - GenerateTextSuggestionsInput - The input type for the generateTextSuggestions function.
 * - GenerateTextSuggestionsOutput - The return type for the generateTextSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTextSuggestionsInputSchema = z.object({
  incompleteSentence: z
    .string()
    .describe('The incomplete sentence to generate suggestions for.'),
});
export type GenerateTextSuggestionsInput = z.infer<
  typeof GenerateTextSuggestionsInputSchema
>;

const GenerateTextSuggestionsOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('An array of suggested completions for the incomplete sentence.'),
});
export type GenerateTextSuggestionsOutput = z.infer<
  typeof GenerateTextSuggestionsOutputSchema
>;

export async function generateTextSuggestions(
  input: GenerateTextSuggestionsInput
): Promise<GenerateTextSuggestionsOutput> {
  return generateTextSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTextSuggestionsPrompt',
  input: {schema: GenerateTextSuggestionsInputSchema},
  output: {schema: GenerateTextSuggestionsOutputSchema},
  prompt: `You are a helpful AI assistant that provides suggestions to complete a given sentence.

  Provide 3 different suggestions to complete the following sentence.
  Return the suggestions as a JSON array of strings.

  Incomplete sentence: {{{incompleteSentence}}}`,
});

const generateTextSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateTextSuggestionsFlow',
    inputSchema: GenerateTextSuggestionsInputSchema,
    outputSchema: GenerateTextSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
