import ImageSlider from "@/components/image-slider";
import { BookOpen, Mountain, Ship, Coffee } from "lucide-react";

const stops = [
  {
    stopNumber: 1,
    title: "Cantera Las Nieves",
    description: "Análisis de las causas y consecuencias del movimiento en masa de 2016.",
    imageUrls: [
      { id: "copacabana-1", hint: "landslide quarry" },
      { id: "copacabana-2", hint: "mountain road" },
      { id: "copacabana-3", hint: "geological analysis" },
    ],
    icon: <Mountain className="h-8 w-8 text-primary" />,
  },
  {
    stopNumber: 2,
    title: "Mirador Cocorná",
    description: "Reflexión sobre conflictos socioambientales por minería ilegal y proyectos energéticos.",
    imageUrls: [
      { id: "cocorna-1", hint: "river valley" },
      { id: "cocorna-2", hint: "mountain viewpoint" },
      { id: "cocorna-3", hint: "small town" },
    ],
    icon: <Coffee className="h-8 w-8 text-primary" />,
  },
  {
    stopNumber: 3,
    title: "Río Samaná Norte",
    description: "Tensiones entre la infraestructura hidroenergética y la conservación socioecológica.",
    imageUrls: [
      { id: "samana-1", hint: "wide river" },
      { id: "samana-2", hint: "jungle bridge" },
      { id: "samana-3", hint: "fishing community" },
    ],
    icon: <BookOpen className="h-8 w-8 text-primary" />,
  },
  {
    stopNumber: 4,
    title: "Ríoclaro, Doradal",
    description: "Interacción entre geología, industria y conservación comunitaria.",
    imageUrls: [
      { id: "rioclaro-1", hint: "clear river" },
      { id: "rioclaro-2", hint: "karst caves" },
      { id: "rioclaro-3", hint: "rafting tour" },
    ],
    icon: <Ship className="h-8 w-8 text-primary" />,
  },
];

export default function FieldTripPage() {
  return (
    <main>
      <ImageSlider stops={stops} />
    </main>
  );
}
