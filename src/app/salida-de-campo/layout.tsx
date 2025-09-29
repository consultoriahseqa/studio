import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Salida de Campo - Derecho Minero Ambiental',
  description: 'Itinerario de la salida de campo para la Especialización en Derecho Minero Ambiental.',
};

export default function FieldTripLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}