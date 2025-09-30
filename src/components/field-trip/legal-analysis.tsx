
"use client";

import { Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function LegalAnalysis() {
  return (
    <section className="max-w-4xl mx-auto animate-fade-in-up">
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl border-primary/20">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center -mt-8 shadow-lg">
                        <Scale className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="font-headline text-2xl mt-1">ANÁLISIS JURÍDICO, AMBIENTAL Y SOCIO-TERRITORIAL</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>
                    El recorrido evidenció que los conflictos ambientales son resultado de fallas sistémicas en la articulación normativa y de gestión entre los procesos geológicos y las actividades económicas.
                </p>
                <ol className="list-decimal list-inside space-y-2">
                    <li>
                        <strong>Derecho Minero y Gestión del Riesgo (Las Nieves):</strong> El desastre en Copacabana confirma que el Código Minero y las licencias ambientales deben integrarse rigurosamente con la Ley 1523 de 2012 (Gestión del Riesgo). El riesgo geológico debe condicionar la explotación, sancionando de manera ejemplar el incumplimiento que derive en catástrofe.
                    </li>
                </ol>
            </CardContent>
        </Card>
    </section>
  );
}

    