import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background font-body text-center p-4">
      <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-foreground mb-4 animate-fade-in-down">
        Texto Maestro
      </h1>
      <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up">
        Tu asistente de IA para la creación de contenido. Explora el itinerario de la salida de campo o utiliza nuestras herramientas de generación de texto.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="/salida-de-campo">
            Ver Salida de Campo <ArrowRight className="ml-2" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/generador">
            Ir al Generador de Texto
          </Link>
        </Button>
      </div>
    </div>
  );
}