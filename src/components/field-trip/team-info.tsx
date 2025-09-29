"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export function TeamInfo() {
  const teamMembers = [
    "Jesús Alberto Rivera Asprilla",
    "Juan Esteban Martínez Sánchez",
    "Mauricio Murillo Barrios",
    "Paula Andrea Jiménez Gómez",
    "Yenner Arley Florez Uribe"
  ];

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <Card className="max-w-4xl mx-auto shadow-lg border-primary/20 bg-card">
        <CardHeader>
          <CardTitle className="font-headline text-3xl flex items-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Integrantes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-muted-foreground">
            {teamMembers.map((member, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-accent">◆</span>{member}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}