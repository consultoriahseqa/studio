"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type TimelineData = {
  time: string;
  title: string;
  description: string;
  location: string;
  icon: React.ReactNode;
};

interface TimelineEntryProps {
  data: TimelineData;
  isFirst?: boolean;
  isLast?: boolean;
}

export function TimelineEntry({ data, isFirst = false, isLast = false }: TimelineEntryProps) {
  return (
    <div className="flex items-center w-full max-w-2xl mx-auto animate-fade-in-up">
      <div className="flex flex-col items-center mr-6">
        <div className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-full z-10 shadow-lg">
          {data.icon}
        </div>
        {!isLast && <div className="w-px h-24 bg-border"></div>}
      </div>
      <Card className="flex-1 shadow-md border-primary/20">
        <CardContent className="p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-primary">{data.time}</p>
            <h3 className="text-xl font-headline font-semibold">{data.title}</h3>
            <p className="text-muted-foreground">{data.description}</p>
          </div>
          {data.location !== "#" && (
            <Button asChild variant="ghost" size="icon">
              <Link href={data.location} target="_blank">
                <MapPin className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
