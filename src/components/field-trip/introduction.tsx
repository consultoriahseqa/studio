"use client";

import { BookText } from "lucide-react";

export function Introduction() {
  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg border-primary/20">
        <div className="text-center mb-6">
          <div className="inline-block bg-primary text-primary-foreground p-3 rounded-full mb-4">
            <BookText className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-headline font-bold text-primary">
            Introducción
          </h2>
        </div>
        <div className="text-lg text-foreground/90 space-y-4 text-justify">
          <p>
            El presente trabajo recoge los resultados del análisis crítico y reflexivo derivado de la salida de campo realizada por la Especialización en Derecho Minero Ambiental en los municipios de Copacabana, Cocorná, San Luis y Puerto Triunfo.
          </p>
          <p>
            El propósito central de esta actividad fue articular la observación directa del territorio con los marcos teóricos del derecho, la geología y la gestión socioambiental, a fin de comprender las complejas interacciones entre la alta susceptibilidad geológica del contexto andino, las dinámicas minero-extractivas, la infraestructura energética y los mecanismos de participación ciudadana como instrumentos de gobernanza ambiental.
          </p>
          <p>
            Esta relatoría busca documentar, analizar y reflexionar sobre las tensiones, retos y posibles modelos de coexistencia que orienten la transición socioecológica en el Magdalena Medio antioqueño.
          </p>
        </div>
      </div>
    </section>
  );
}