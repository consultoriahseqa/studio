"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { handleTemplateGeneration } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { GeneratedTextDisplay } from './generated-text-display';
import { useToast } from '@/hooks/use-toast';
import { LayoutTemplate } from 'lucide-react';

const templates = [
  {
    id: 'email-formal',
    name: 'Email Formal',
    description: "Para correos de trabajo, solicitudes, etc.",
    optionalSections: [
      { id: 'urgente', label: 'Marcar como urgente' },
      { id: 'adjunto', label: 'Mencionar archivo adjunto' },
    ],
  },
  {
    id: 'post-blog',
    name: 'Post para Blog',
    description: "Estructura básica para un artículo de blog.",
    optionalSections: [
      { id: 'introduccion', label: 'Incluir introducción' },
      { id: 'conclusion', label: 'Incluir conclusión con llamada a la acción' },
      { id: 'faq', label: 'Añadir sección de Preguntas Frecuentes' },
    ],
  },
  {
    id: 'descripcion-producto',
    name: 'Descripción de Producto',
    description: "Para tiendas online y catálogos.",
    optionalSections: [
      { id: 'beneficios', label: 'Lista de beneficios' },
      { id: 'especificaciones', label: 'Tabla de especificaciones técnicas' },
    ],
  },
] as const;

type TemplateId = typeof templates[number]['id'];

const formSchema = z.object({
  templateName: z.string().min(1, { message: 'Debes seleccionar una plantilla.' }),
  optionalSections: z.array(z.string()).optional(),
});

export default function TemplateGeneration() {
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateName: '',
      optionalSections: [],
    },
  });

  const selectedTemplateId = form.watch('templateName') as TemplateId;
  const selectedTemplate = templates.find((t) => t.id === selectedTemplateId);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedText('');
    const templateObject = templates.find(t => t.id === values.templateName);
    const templateFullName = templateObject ? templateObject.name : values.templateName;

    const result = await handleTemplateGeneration(templateFullName, values.optionalSections || []);
    setIsLoading(false);

    if (result.success && result.text) {
      setGeneratedText(result.text);
    } else {
      toast({
        variant: "destructive",
        title: "Error de Generación",
        description: result.error || "No se pudo generar el texto desde la plantilla.",
      });
    }
  }

  return (
    <>
      <Card className="w-full shadow-lg border-primary/20">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Crear con Plantillas</CardTitle>
          <CardDescription>Elige una plantilla, personaliza las secciones y genera contenido estructurado al instante.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="templateName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plantilla</FormLabel>
                    <Select onValueChange={(value) => {
                      field.onChange(value);
                      form.setValue('optionalSections', []);
                    }} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una plantilla..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {templates.map(template => (
                          <SelectItem key={template.id} value={template.id}>
                            {template.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      {selectedTemplate?.description}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {selectedTemplate && selectedTemplate.optionalSections.length > 0 && (
                <FormField
                  control={form.control}
                  name="optionalSections"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel>Secciones Opcionales</FormLabel>
                        <FormDescription>
                          Selecciona las secciones que quieres incluir.
                        </FormDescription>
                      </div>
                      <div className="space-y-2">
                        {selectedTemplate.optionalSections.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="optionalSections"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-center space-x-3 space-y-0 p-3 rounded-md border has-[:checked]:bg-accent/10"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.label)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), item.label])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item.label
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              
              <Button type="submit" disabled={isLoading || !selectedTemplate} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? 'Generando...' : <><LayoutTemplate className="mr-2 h-4 w-4" /> Generar desde Plantilla</>}
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
