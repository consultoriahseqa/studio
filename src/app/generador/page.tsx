import Header from '@/components/header';
import Footer from '@/components/footer';
import TextGeneration from '@/components/text-generation';
import SuggestionGeneration from '@/components/suggestion-generation';
import TemplateGeneration from '@/components/template-generation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sparkles, Bot, FileText } from 'lucide-react';

export default function GeneradorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="scratch" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-primary/10 rounded-lg">
              <TabsTrigger value="scratch" className="rounded-md">
                <Sparkles className="mr-2 h-4 w-4" />
                Desde Cero
              </TabsTrigger>
              <TabsTrigger value="suggestions" className="rounded-md">
                <Bot className="mr-2 h-4 w-4" />
                Sugerencias
              </TabsTrigger>
              <TabsTrigger value="templates" className="rounded-md">
                <FileText className="mr-2 h-4 w-4" />
                Plantillas
              </TabsTrigger>
            </TabsList>
            <TabsContent value="scratch" className="mt-6">
              <TextGeneration />
            </TabsContent>
            <TabsContent value="suggestions" className="mt-6">
              <SuggestionGeneration />
            </TabsContent>
            <TabsContent value="templates" className="mt-6">
              <TemplateGeneration />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}