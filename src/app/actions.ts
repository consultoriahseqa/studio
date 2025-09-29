'use server';

import { generateTextFromPrompt } from '@/ai/flows/generate-text-from-prompt';
import { generateTextSuggestions } from '@/ai/flows/generate-text-suggestions';
import { generateTextFromTemplate } from '@/ai/flows/generate-text-from-template';

export async function handleTextGeneration(prompt: string) {
  try {
    const result = await generateTextFromPrompt({ prompt });
    return { success: true, text: result.text };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'No se pudo generar el texto.' };
  }
}

export async function handleSuggestionGeneration(incompleteSentence: string) {
  try {
    const result = await generateTextSuggestions({ incompleteSentence });
    return { success: true, suggestions: result.suggestions };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'No se pudieron generar las sugerencias.' };
  }
}

export async function handleTemplateGeneration(templateName: string, optionalSections: string[]) {
  try {
    const result = await generateTextFromTemplate({ templateName, optionalSections });
    return { success: true, text: result.generatedText };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'No se pudo generar desde la plantilla.' };
  }
}
