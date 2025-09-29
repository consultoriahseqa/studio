import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generador de Texto - Texto Maestro',
  description: 'Genera textos creativos con el poder de la IA.',
};

export default function GeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}