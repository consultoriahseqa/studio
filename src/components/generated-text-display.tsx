"use client";

import { useEffect, useState } from 'react';
import { Copy, Check, Volume2, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface GeneratedTextDisplayProps {
  generatedText: string;
  isLoading: boolean;
  title?: string;
}

export function GeneratedTextDisplay({ generatedText, isLoading, title = "Texto Generado" }: GeneratedTextDisplayProps) {
  const [editedText, setEditedText] = useState(generatedText);
  const [isCopied, setIsCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setEditedText(generatedText);
  }, [generatedText]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload();
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(editedText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const handleSpeech = () => {
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(editedText);
        utterance.lang = 'es-ES';
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => {
          setIsSpeaking(false);
          toast({
            variant: "destructive",
            title: "Error de reproducción",
            description: "No se pudo reproducir el texto.",
          });
        };
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      } else {
        toast({
            variant: "destructive",
            title: "Función no soportada",
            description: "Tu navegador no soporta la función de texto a voz.",
          });
      }
    }
  };
  
  return (
    <Card className="mt-6 w-full shadow-lg border-primary/20">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-headline text-2xl">{title}</CardTitle>
        {!isLoading && editedText && (
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copiar texto">
              {isCopied ? <Check className="h-5 w-5 text-accent" /> : <Copy className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={handleSpeech} aria-label={isSpeaking ? 'Detener lectura' : 'Leer texto en voz alta'}>
              {isSpeaking ? <Square className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-3 pt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-[75%]" />
          </div>
        ) : (
          <Textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            placeholder="El texto generado aparecerá aquí..."
            className="min-h-[200px] text-base resize-y bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
            aria-label="Área de texto generado y editable"
          />
        )}
      </CardContent>
    </Card>
  );
}
