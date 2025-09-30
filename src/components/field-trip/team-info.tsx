"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";

export function TeamInfo() {
  const teamMembers = [
    "Florez Uribe Yenner Arley",
    "Jiménez Gómez Paula Andrea",
    "Martínez Sánchez Juan Esteban",
    "Murillo Barrios Mauricio",
    "Rivera Asprilla Jesus Alberto"
  ];

  return (
    <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <Card className="max-w-4xl mx-auto shadow-lg border-primary/20 bg-card overflow-hidden">
        <div className="grid md:grid-cols-2">
            <div className="relative min-h-[300px] md:min-h-0">
                 <Image
                    src="https://i.imgur.com/6Rfi6ck.jpg"
                    alt="Foto del equipo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
            </div>
            <div className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-3xl flex items-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  Integrantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  {teamMembers.map((member, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-accent">◆</span>{member}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
        </div>
      </Card>
    </section>
  );
}
