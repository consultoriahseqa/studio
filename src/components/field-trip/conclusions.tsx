
"use client";

import { Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function Conclusions() {
  return (
    <section className="max-w-4xl mx-auto animate-fade-in-up mt-16">
        <Card className="bg-card/80 backdrop-blur-sm shadow-xl border-primary/20">
            <CardHeader>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary text-primary-foreground rounded-full h-14 w-14 flex items-center justify-center -mt-8 shadow-lg">
                        <Lightbulb className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                        <CardTitle className="font-headline text-2xl mt-1">CONCLUSIONES Y APRENDIZAJES</CardTitle>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
                <p>
                    La salida de campo fue una inmersión práctica en la necesidad de superar la visión sectorial del derecho. Como futuros abogados minero-ambientales, se concluye que:
                </p>
                <ol className="list-decimal list-inside space-y-3">
                    <li>
                        <strong>El Conocimiento Geológico es Jurídico:</strong> La estabilidad de las laderas y la dinámica kárstica no son solo temas técnicos; son variables jurídicas que deben limitar o condicionar la expedición de cualquier título o licencia, exigiendo la integración del conocimiento geológico con la regulación ambiental.
                    </li>
                    <li>
                        <strong>La Sostenibilidad es un Conflicto de Derechos:</strong> Los conflictos evidenciados demuestran que el desarrollo sostenible es un choque entre el derecho a explotar (minero-energético) y el derecho a un ambiente sano y la vida comunitaria.
                    </li>
                    <li>
                        <strong>Transición con Justicia:</strong> La Transición Socioecológica debe basarse en la Justicia Ambiental, asegurando que los costos del desarrollo no recaigan desproporcionadamente en los ecosistemas sensibles y las comunidades.
                    </li>
                </ol>
            </CardContent>
        </Card>
    </section>
  );
}
