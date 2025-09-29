"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { handleSuggestionGeneration } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from './ui/skeleton';
import { Copy, Check, Lightbulb } from 'lucide-react';

const formSchema = z.object({
  sentence: z.string().min(5, {
    message: 'La frase debe tener al menos 5 caracteres.',
  }),
});

function SuggestionItem({ suggestion }: { suggestion: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(suggestion).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center justify-between p-4 bg-background rounded-lg border hover:border-accent transition-colors">
      <p className="text-sm pr-4">{suggestion}</p>
      <Button variant="ghost" size="icon" onClick={handleCopy} className="h-8 w-8 flex-shrink-0" aria-label="Copiar sugerencia">
        {isCopied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}

export default function SuggestionGeneration() {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sentence: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setSuggestions([]);
    const result = await handleSuggestionGeneration(values.sentence);
    setIsLoading(false);

    if (result.success && result.suggestions) {
      setSuggestions(result.suggestions);
    } else {
      toast({
        variant: "destructive",
        title: "Error de Generación",
        description: result.error || "No se pudieron generar las sugerencias.",
      });
    }
  }

  return (
    <>
      <Card className="w-full shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Completar Frase</CardTitle>
          <CardDescription>Escribe el comienzo de una frase y la IA te dará ideas para continuarla.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="sentence"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Frase Incompleta</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: El secreto de la felicidad es..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? 'Buscando ideas...' : <><Lightbulb className="mr-2 h-4 w-4" /> Obtener Sugerencias</>}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {(isLoading || suggestions.length > 0) && (
        <Card className="mt-6 w-full shadow-lg border-primary/20 animate-in fade-in-50 duration-500">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Sugerencias</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {isLoading ? (
                <>
                  <Skeleton className="h-14 w-full" />
                  <Skeleton className="h-14 w-full" />
                  <Skeleton className="h-14 w-full" />
                </>
              ) : (
                suggestions.map((s, i) => <SuggestionItem key={i} suggestion={s} />)
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
