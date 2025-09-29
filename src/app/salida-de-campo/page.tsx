import { TripHeader } from "@/components/field-trip/trip-header";
import { GeneralInfo } from "@/components/field-trip/general-info";
import { ItineraryStop, StopData } from "@/components/field-trip/itinerary-stop";
import { TimelineEntry, TimelineData } from "@/components/field-trip/timeline-entry";
import { MapPin, BookOpen, Mountain, Ship, Coffee, Utensils, Flag, Home } from "lucide-react";

const stops: StopData[] = [
  {
    stopNumber: 1,
    title: "Cantera Las Nieves – Copacabana",
    location: "https://maps.app.goo.gl/qsPhfsmHyoRNjUtx8",
    locationName: "Km 12 Vereda El Cabuyál, Autopista Medellín-Bogotá",
    description: "Análisis de las causas y consecuencias del movimiento en masa de 2016. Se estudiará el contexto geológico, geomorfológico y las intervenciones antrópicas, conectando procesos geológicos con la regulación minera y ambiental.",
    imageUrls: [
      { id: "copacabana-1", hint: "landslide quarry" },
      { id: "copacabana-2", hint: "mountain road" },
      { id: "copacabana-3", hint: "geological analysis" },
    ],
    icon: <Mountain className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Análisis técnico sobre las causas del movimiento en masa...", url: "https://share.google/KrTB8upx98dPFEINd" },
      { title: "Derrumbe en autopista Medellín-Bogotá...", url: "https://www.elcolombiano.com/antioquia/derrumbe-en-autopista-medellin-bogota-canteras-serian-las-responsables-HD5243779" },
      { title: "Suspenden temporalmente la explotación de las canteras...", url: "https://share.google/LZYsJFwjWQg17E83n" },
    ]
  },
  {
    stopNumber: 2,
    title: "Mirador Cocorná",
    note: "En esta parada los estudiantes tienen la posibilidad de desayunar.",
    location: "https://maps.app.goo.gl/WjarBFezxsafRmAv8",
    locationName: "Km 13 Vereda La Chorrera, Autopista Medellín-Bogotá",
    description: "Punto estratégico para observar el corredor del río Cocorná. Se reflexionará sobre conflictos socioambientales por minería ilegal y proyectos energéticos, analizando la participación ciudadana y el control social.",
    imageUrls: [
      { id: "cocorna-1", hint: "river valley" },
      { id: "cocorna-2", hint: "mountain viewpoint" },
      { id: "cocorna-3", hint: "small town" },
    ],
    icon: <Coffee className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Configuraciones territoriales, conflictos ambientales y participación...", url: "https://repositorio.unal.edu.co/items/144b9582-da30-4928-b635-2df4088ced83" },
      { title: "Golpe a la minería ilegal...", url: "https://www.elcolombiano.com/antioquia/destruyen-maquinaria-mineria-ilegal-clan-del-golfo-en-cocorna-KB26631658" },
      { title: "Audiencia pública ambiental para el proyecto PCH Cocorná III", url: "https://www.cornare.gov.co/noticias-corporativas/por-segunda-vez-se-realizo-audiencia-publica-ambiental-para-el-proyecto-pequena-central-hidroelectrica-cocorna-iii/" },
    ]
  },
  {
    stopNumber: 3,
    title: "Río Samaná Norte, San Luis",
    description: "Reflexión sobre las tensiones entre la infraestructura hidroenergética y la conservación socioecológica. Se analizará la relevancia biocultural del río para las comunidades ribereñas frente a la presión de proyectos como Porvenir II.",
    location: "https://maps.app.goo.gl/Xkj7QfLv4LnngYyt5",
    locationName: "Puente Rio Samaná, Autopista Medellín–Bogotá",
    imageUrls: [
      { id: "samana-1", hint: "wide river" },
      { id: "samana-2", hint: "jungle bridge" },
      { id: "samana-3", hint: "fishing community" },
    ],
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Encuentros de saberes: Pensar con los ríos...", url: "https://www.clacso.org/actividad/encuentros-de-saberes-pensar-con-los-rios-transicion-energetica-culturas-riberenas-y-conservacion-socioecologica-tercer-encuentro-la-proteccion-del-rio-samana-norte/" },
      { title: "Edicto ANLA – Aprovechamiento hidroeléctrico río Samaná Norte", url: "https://www.cornare.gov.co/edictos/edicto-anla-aprovechamiento-hidroelectrico-rio-samana-norte-o-porvenir-ii/" },
    ]
  },
  {
    stopNumber: 4,
    title: "Recorrido Fluvial Ríoclaro, Doradal",
    note: "Esta parada incluye almuerzo. Valor: $115.000 COP (recorrido, almuerzo, snack, seguro).",
    location: "https://maps.app.goo.gl/4JDSmuowtvT5qpej6",
    locationName: "Sitio de Parada y Embarque",
    description: "Experiencia integradora para observar la interacción entre geología (sistema kárstico), industria (Cementos Argos) y conservación comunitaria. Se discutirá la coexistencia de turismo y minería, y la transición hacia la sostenibilidad.",
    imageUrls: [
      { id: "rioclaro-1", hint: "clear river" },
      { id: "rioclaro-2", hint: "karst caves" },
      { id: "rioclaro-3", hint: "rafting tour" },
    ],
    icon: <Ship className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Arqueología y gestión del patrimonio del paisaje kárstico...", url: "http://hdl.handle.net/10495/16996" },
      { title: "Estudios de sistemas kársticos en mármol – La Danta...", url: "https://repositorio.unal.edu.co/handle/unal/87027" },
      { title: "Geoparques en Colombia: una estrategia para ODS...", url: "https://doi.org/10.18273/revbol.v41n2-2019006" },
    ]
  },
];

const timelineEvents: TimelineData[] = [
  { time: "6:00 am", title: "Punto de Encuentro", description: "TOSTAO' Café & pan / Autónoma", location: "https://maps.app.goo.gl/P5t7GW6fe92hJ9H77", icon: <Flag className="h-6 w-6" /> },
  { time: "3:00 pm", title: "Inicio del Retorno", description: "Regreso a Medellín", icon: <Home className="h-6 w-6" /> },
  { time: "6:00 pm", title: "Llegada Estimada", description: "TOSTAO' Café & pan / Autónoma", location: "https://maps.app.goo.gl/P5t7GW6fe92hJ9H77", icon: <MapPin className="h-6 w-6" /> },
];

export default function FieldTripPage() {
  return (
    <div className="bg-background min-h-screen text-foreground">
      <TripHeader
        title="Salida de Campo: Geología y Conflicto"
        subtitle="Especialización en Derecho Minero Ambiental"
      />

      <main className="container mx-auto px-4 py-12">
        <GeneralInfo />

        <section className="mt-16">
          <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
            Itinerario del Día
          </h2>
          <div className="space-y-12 md:space-y-16">
             <TimelineEntry data={timelineEvents[0]} isFirst />

            {stops.map((stop, index) => (
              <ItineraryStop key={index} data={stop} />
            ))}
            
            <TimelineEntry data={timelineEvents[1]} />
            <TimelineEntry data={timelineEvents[2]} isLast />
          </div>
        </section>
      </main>

       <footer className="py-8 mt-12 border-t border-border">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Facultad de Derecho. Universidad de Antioquia.</p>
          </div>
        </footer>
    </div>
  );
}