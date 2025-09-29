"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { handleTextGeneration } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { GeneratedTextDisplay } from './generated-text-display';
import { useToast } from '@/hooks/use-toast';
import { Wand2 } from 'lucide-react';

const formSchema = z.object({
  prompt: z.string().min(10, {
    message: 'La indicación debe tener al menos 10 caracteres.',
  }),
});

export default function TextGeneration() {
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedText('');
    const result = await handleTextGeneration(values.prompt);
    setIsLoading(false);

    if (result.success && result.text) {
      setGeneratedText(result.text);
    } else {
      toast({
        variant: "destructive",
        title: "Error de Generación",
        description: result.error || "No se pudo generar el texto. Inténtalo de nuevo.",
      });
    }
  }

  return (
    <>
      <Card className="w-full shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Creación Libre</CardTitle>
          <CardDescription>Describe lo que quieres escribir y deja que la IA haga la magia. Sé tan detallado como quieras.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tu Indicación</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Ej: Escribe un poema corto sobre la lluvia en la ciudad..."
                        className="resize-y min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? 'Generando...' : <> <Wand2 className="mr-2 h-4 w-4" />Generar Texto</>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || generatedText) && (
        <div className="animate-in fade-in-50 duration-500">
           <GeneratedTextDisplay generatedText={generatedText} isLoading={isLoading} />
        </div>
      )}
    </>
  );
}
