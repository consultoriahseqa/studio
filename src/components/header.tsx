import { PenTool } from 'lucide-react';

export default function Header() {
  return (
    <header className="py-6 border-b bg-card">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <PenTool className="h-7 w-7 text-primary" />
        <h1 className="text-4xl font-headline font-bold tracking-tight text-foreground">
          Texto Maestro
        </h1>
      </div>
    </header>
  );
}
