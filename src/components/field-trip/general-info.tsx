"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Calendar, Book, Backpack, Info } from "lucide-react";

export function GeneralInfo() {
  const generalData = [
    { icon: <GraduationCap />, label: "Facultad", value: "Derecho" },
    { icon: <Book />, label: "Programa", value: "Especialización en Derecho Minero Ambiental" },
    { icon: <Users />, label: "Profesores", value: "Manuela Gómez Monsalve" },
    { icon: <Calendar />, label: "Fecha", value: "20 de Septiembre, 2025" },
  ];

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <Card className="max-w-4xl mx-auto shadow-lg border-primary/20 bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <Info className="h-8 w-8 text-primary" />
            Generalidades
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {generalData.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-accent">{item.icon}</div>
                <div>
                  <p className="font-bold text-foreground">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border">
             <div className="flex items-start gap-4">
                <div className="text-accent mt-1"><Backpack /></div>
                <div>
                  <p className="font-bold text-foreground">Recomendaciones</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Ropa fresca que cubra todo el cuerpo y calzado cómodo.</li>
                    <li>Protección para lluvia y sol (gorra).</li>
                    <li>Hidratación y ropa de cambio.</li>
                    <li>Materiales de apoyo y celular con Avenza Maps.</li>
                  </ul>
                </div>
              </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}