
"use client";

import { TripHeader } from "@/components/field-trip/trip-header";
import { GeneralInfo } from "@/components/field-trip/general-info";
import { Introduction } from "@/components/field-trip/introduction";
import { ItinerarySection, StopData } from "@/components/field-trip/itinerary-section";
import { TeamInfo } from "@/components/field-trip/team-info";
import { TimelineEntry, TimelineData } from "@/components/field-trip/timeline-entry";
import { LegalAnalysis } from "@/components/field-trip/legal-analysis";
import { Conclusions } from "@/components/field-trip/conclusions";
import { MapPin, BookOpen, Mountain, Ship, Coffee, Utensils, Flag, Home } from "lucide-react";
import { StopModalProvider } from "@/hooks/use-stop-modal.tsx";
import { FullStopModal } from "@/components/field-trip/full-stop-modal";


const stops: StopData[] = [
  {
    stopNumber: 1,
    title: "Conflicto entre Minería, Geología y Gestión del Riesgo: Cantera Las Nieves",
    location: "https://maps.app.goo.gl/qsPhfsmHyoRNjUtx8",
    locationName: "Km 12 Vereda El Cabuyál, Autopista Medellín-Bogotá",
    description: "El análisis de esta primera parada se centró en el movimiento en masa ocurrido el 26 de octubre de 2016 en la vereda El Cabuyál, municipio de Copacabana.",
    fullDescription: "**Análisis de articulación Geología–Derecho**\n\nLa observación del caso permitió identificar un entramado complejo de factores físicos, jurídicos e institucionales que, en su interacción, derivaron en la materialización del desastre. Desde el punto de vista geológico, la zona presentaba una alta susceptibilidad a deslizamientos, condicionada por la combinación de fuertes pendientes, litologías inestables y la influencia de aguas subterráneas en el macizo rocoso. Sin embargo, estas condiciones de riesgo inherente no fueron suficientemente incorporadas en los procesos de planificación, regulación y seguimiento de la actividad minera.\n\nEn el plano jurídico y de gestión, se evidenció una deficiente articulación entre el conocimiento técnico-científico y los instrumentos normativos. El Plan de Manejo Ambiental (PMA) de la cantera resultó inadecuado en cuanto a la prevención y mitigación de riesgos geotécnicos, lo cual dejó en evidencia vacíos en el cumplimiento de las obligaciones ambientales por parte del titular minero, así como en la capacidad de las autoridades para ejercer un control efectivo. El detonante del evento estuvo asociado al flujo de agua proveniente del macizo, cuya presión interna desestabilizó la ladera, lo que refleja fallas tanto en la gestión hidrogeológica como en la implementación de medidas de drenaje y monitoreo.\n\nDesde la perspectiva del derecho minero-ambiental, este caso constituye un referente paradigmático que ilustra la necesidad de reconocer el riesgo geológico como un factor determinante en la expedición, ejecución y supervisión de licencias ambientales. La ausencia de un enfoque integral que articule ciencia, derecho y gestión territorial propicia escenarios de vulnerabilidad donde los costos sociales y ambientales se maximizan, mientras que la capacidad institucional para anticiparse a los impactos permanece limitada.\n\nEn consecuencia, el deslizamiento de la Cantera Las Nieves no solo debe entenderse como un evento natural agravado por la actividad humana, sino también como una manifestación de las tensiones estructurales entre el aprovechamiento económico del subsuelo, la seguridad geotécnica del territorio y la responsabilidad estatal en la protección de la vida, la infraestructura y el ambiente.",
    imageUrls: [
      { id: "https://i.imgur.com/DEewvQe.jpeg", hint: "geological strata" },
      { id: "https://i.imgur.com/rbi4yG9.jpeg", hint: "excavator quarry" },
      { id: "https://i.imgur.com/z3UQ4wx.jpeg", hint: "mountain road" },
      { id: "https://i.imgur.com/Ixi7L3U.jpeg", hint: "field analysis" },
      { id: "https://i.imgur.com/IRCJOfe.jpeg", hint: "excavator quarry" },
    ],
    videoUrl: 'https://i.imgur.com/KrdLYQb.mp4',
    icon: <Mountain className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Análisis técnico sobre las causas del movimiento en masa...", url: "https://share.google/KrTB8upx98dPFEINd" },
      { title: "Derrumbe en autopista Medellín-Bogotá...", url: "https://www.elcolombiano.com/antioquia/derrumbe-en-autopista-medellin-bogota-canteras-serian-las-responsables-HD5243779" },
      { title: "Suspenden temporalmente la explotación de las canteras...", url: "https://share.google/LZYsJFwjWQg17E83n" },
    ]
  },
  {
    stopNumber: 2,
    title: "Gobernanza Ambiental y Minería Ilegal: Mirador Cocorná",
    note: "En esta parada los estudiantes tienen la posibilidad de desayunar.",
    location: "https://maps.app.goo.gl/WjarBFezxsafRmAv8",
    locationName: "Km 13 Vereda La Chorrera, Autopista Medellín-Bogotá",
    description: "Punto estratégico para observar el corredor del río Cocorná, donde confluyen proyectos energéticos, minería ilegal y procesos de defensa territorial.",
    fullDescription: "**Parada 2: Gobernanza Ambiental y Minería Ilegal**\n\n**Mirador de Cocorná**\n\nLa segunda parada, realizada en el Mirador de Cocorná, ofreció un espacio de reflexión sobre la compleja relación entre la riqueza ambiental de la región y las tensiones socioecológicas derivadas tanto de actividades extractivas de carácter ilegal como de proyectos energéticos de pequeña y mediana escala. Este lugar constituye un escenario privilegiado para analizar las tensiones entre conservación, desarrollo económico y gobernanza ambiental.\n\n**Fenómenos clave**\n\n**Proyectos Energéticos:**\nUn punto de análisis relevante fueron los conflictos sociales y ambientales generados por iniciativas como la Pequeña Central Hidroeléctrica (PCH) Cocorná III. Este proyecto ha sido objeto de audiencias públicas ambientales, lo que demuestra la importancia de los mecanismos de participación ciudadana en la toma de decisiones ambientales y en el control social sobre el desarrollo de obras con impactos significativos. Las tensiones se manifiestan en la dicotomía entre el impulso hacia la transición energética y los impactos acumulativos sobre las cuencas hidrográficas, los ecosistemas y las comunidades locales.\n\n**Minería Ilegal:**\nDe igual relevancia es la presencia de minería ilegal en el territorio, actividad en la que confluyen actores armados ilegales, entre ellos estructuras criminales como el denominado Clan del Golfo. La extracción ilícita de minerales genera múltiples externalidades negativas: contaminación de fuentes hídricas, deforestación, pérdida de biodiversidad y profundización de la conflictividad social. Este fenómeno plantea desafíos tanto para el derecho penal, en su función de sanción y disuasión, como para el derecho administrativo y ambiental, en su rol de prevención, control y restauración del daño. La minería ilegal, al operar al margen de cualquier regulación, erosiona la legitimidad de las instituciones y dificulta la consolidación de una gobernanza ambiental efectiva.\n\n**Conexión Jurídica**\n\nDesde la perspectiva normativa, esta parada permite resaltar el papel central de la Ley 99 de 1993, la cual institucionaliza la participación ciudadana en materia ambiental e introduce la figura de la audiencia pública ambiental como un instrumento democrático de deliberación. Dicho mecanismo posibilita que las comunidades expresen sus preocupaciones frente a proyectos que puedan afectar sus territorios, fortaleciendo el control social y promoviendo la transparencia en la gestión ambiental.\n\nNo obstante, la coexistencia de proyectos formales sujetos a licencia con actividades extractivas ilegales evidencia una brecha significativa entre la normatividad y la realidad territorial. El caso de Cocorná refleja la necesidad de una gobernanza ambiental más robusta, que articule mecanismos de participación ciudadana, fortalecimiento institucional, persecución penal a la ilegalidad y gestión integral de los recursos naturales, bajo un enfoque de sostenibilidad y justicia socioambiental.",
    imageUrls: [
      { id: "https://i.imgur.com/l3lrIED.jpeg", hint: "river valley" },
      { id: "https://i.imgur.com/gR7Wb5y.jpeg", hint: "mountain road" },
      { id: "https://i.imgur.com/X6X40CX.jpeg", hint: "community meeting" },
      { id: "https://i.imgur.com/txEZSgQ.jpeg", hint: "field analysis" },
      { id: "https://i.imgur.com/SEGZfBG.jpeg", hint: "waterfall landscape" },
      { id: "https://i.imgur.com/uiS8ZoN.jpeg", hint: "group photo" },
      { id: "https://i.imgur.com/MwJtXpS.jpeg", hint: "mountain town" },
      { id: "https://i.imgur.com/pwRc28w.png", hint: "environmental map" },
    ],
    videoUrl: 'https://i.imgur.com/abC9xmu.mp4',
    icon: <Coffee className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Configuraciones territoriales, conflictos ambientales y participación...", url: "https://repositorio.unal.edu.co/items/144b9582-da30-4928-b635-2df4088ced83" },
      { title: "Golpe a la minería ilegal...", url: "https://www.elcolombiano.com/antioquia/destruyen-maquinaria-mineria-ilegal-clan-del-golfo-en-cocorna-KB26631658" },
      { title: "Audiencia pública ambiental para el proyecto PCH Cocorná III", url: "https://www.cornare.gov.co/noticias-corporativas/por-segunda-vez-se-realizo-audiencia-publica-ambiental-para-el-proyecto-pequena-central-hidroelectrica-cocorna-iii/" },
    ]
  },
  {
    stopNumber: 3,
    title: "Infraestructura, Conservación y Visiones del Desarrollo: Río Samaná Norte",
    description: "Este punto permitió una reflexión crítica sobre el modelo de desarrollo basado en la generación hidroeléctrica y sus implicaciones para los ecosistemas y las comunidades.",
    fullDescription: "**Parada 3 (Análisis Teórico): Río Samaná Norte – San Luis**\n\nAunque no fue posible realizar esta parada de manera presencial, la discusión en campo permitió abordar, desde una perspectiva analítica, los procesos ecológicos, sociales y jurídicos que confluyen en el Río Samaná Norte, considerado uno de los ecosistemas fluviales más estratégicos del Magdalena Medio antioqueño.\n\n**Análisis socioecológico**\n\nEl Río Samaná Norte constituye un eje fundamental para la conectividad ecológica y la seguridad alimentaria en la región. Biológicamente, es un hábitat crítico para el desove de peces migratorios durante el fenómeno de las subiendas, lo cual garantiza el ciclo reproductivo de múltiples especies y fortalece la sostenibilidad de la cuenca del Magdalena. Culturalmente, el río sostiene prácticas tradicionales de pesca artesanal, turismo comunitario y barequeo aurífero, todas ellas vinculadas a la memoria colectiva y a los sistemas productivos locales.\n\nNo obstante, el equilibrio socioecológico se encuentra bajo fuerte presión debido a la proyección de megaproyectos hidroeléctricos como Porvenir II y Palaguas. Estas iniciativas generan riesgos de fragmentación fluvial, pérdida de biodiversidad, modificación de caudales y desplazamiento de prácticas comunitarias tradicionales. La tensión central se ubica en la disyuntiva entre la expansión de infraestructura energética, promovida bajo la narrativa de la transición energética, y la obligación de preservar los valores ecológicos, culturales y sociales del territorio.\n\n**Conexión jurídica**\n\nDesde el ámbito jurídico, el caso del Samaná Norte invita a reflexionar sobre la necesidad de modelos alternativos de desarrollo, que reconozcan no solo los derechos colectivos de las comunidades ribereñas, sino también los derechos de los ríos y de la naturaleza como sujetos de protección.\n\nEn este sentido, la jurisprudencia colombiana ha marcado hitos relevantes. La Sentencia T-622 de 2016 de la Corte Constitucional reconoció al Río Atrato como sujeto de derechos, estableciendo la obligación del Estado y de las comunidades étnicas de ejercer su representación legal y velar por su protección, conservación y restauración. Este precedente abre la posibilidad de extender la discusión hacia otros ecosistemas estratégicos, como el Samaná Norte, cuyo valor socioecológico es igualmente incuestionable.\n\nAsimismo, decisiones posteriores —como las que han protegido páramos y otros ecosistemas sensibles— han fortalecido el paradigma de una Justicia Ambiental y Ecológica, que supera el enfoque antropocéntrico y avanza hacia la construcción de un marco jurídico biocéntrico. Bajo este enfoque, la gestión ambiental no se limita a mitigar impactos, sino que busca garantizar la integridad ecológica y la justicia intergeneracional.\n\n**Síntesis**\n\nEn consecuencia, el Río Samaná Norte debe ser entendido como un laboratorio sociojurídico que refleja las tensiones estructurales entre extractivismo, sostenibilidad y justicia ambiental. Su análisis pone de relieve la urgencia de repensar el modelo energético nacional bajo principios de equidad, participación ciudadana efectiva y respeto por los derechos de la naturaleza. Reconocerlo como sujeto de derechos, en sintonía con los avances jurisprudenciales, representaría un paso decisivo hacia la construcción de una gobernanza ambiental más justa, inclusiva y sostenible.",
    location: "https://maps.app.goo.gl/Xkj7QfLv4LnngYyt5",
    locationName: "Puente Rio Samaná, Autopista Medellín–Bogotá",
    imageUrls: [
      { id: "https://i.imgur.com/TEpsnHw.jpeg", hint: "wide river" },
      { id: "https://i.imgur.com/UAraOSz.png", hint: "jungle bridge" },
      { id: "https://i.imgur.com/X3e6JLZ.jpeg", hint: "small town" },
      { id: "https://i.imgur.com/AkvRbe9.jpeg", hint: "local agriculture" },
      { id: "https://i.imgur.com/Sby8vzj.jpeg", hint: "river biodiversity" },
      { id: "https://i.imgur.com/0lBdOGC.jpeg", hint: "community protest" }
    ],
    videoUrl: 'https://i.imgur.com/BTkXj3Z.mp4',
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    bibliography: [
      { title: "Encuentros de saberes: Pensar con los ríos...", url: "https://www.clacso.org/actividad/encuentros-de-saberes-pensar-con-los-rios-transicion-energetica-culturas-riberenas-y-conservacion-socioecologica-tercer-encuentro-la-proteccion-del-rio-samana-norte/" },
      { title: "Edicto ANLA – Aprovechamiento hidroeléctrico río Samaná Norte", url: "https://www.cornare.gov.co/edictos/edicto-anla-aprovechamiento-hidroelectrico-rio-samana-norte-o-porvenir-ii/" },
    ]
  },
  {
    stopNumber: 4,
    title: "Coexistencia, Geología Kárstica e Industria: Río Claro",
    note: "Esta parada incluye almuerzo. Valor: $115.000 COP (recorrido, almuerzo, snack, seguro).",
    location: "https://maps.app.goo.gl/4JDSmuowtvT5qpej6",
    locationName: "Sitio de Parada y Embarque",
    description: "Una experiencia integradora para observar la compleja interacción entre la geología kárstica, la industria cementera y los esfuerzos de conservación comunitaria.",
    fullDescription: "**Parada 4: Coexistencia, Geología Kárstica e Industria**\n\n**Río Claro – Puerto Triunfo**\n\nEl recorrido fluvial por el Río Claro permitió observar la interacción entre un ecosistema geológico altamente sensible y las dinámicas industriales y comunitarias que lo rodean. Este espacio constituye un escenario emblemático para reflexionar sobre la coexistencia entre conservación, turismo, minería e industria cementera en un contexto de transición socioecológica.\n\n**Fenómenos clave**\n\n**Sistema geológico kárstico**\nLa cuenca del Río Claro se desarrolla sobre un sistema kárstico en mármoles, caracterizado por la presencia de cavernas, galerías subterráneas y sistemas hidrológicos frágiles, entre los que destaca el complejo de cavernas de La Danta. Este patrimonio geológico y natural posee un alto valor científico, paisajístico y ecosistémico. Sin embargo, enfrenta impactos significativos derivados de la extracción de carbonato de calcio para la producción de cemento, principalmente en la planta Ríoclaro de Cementos Argos. La explotación minera en ambientes kársticos plantea riesgos de alteración hidrológica, pérdida de hábitats y deterioro irreversible de procesos geoambientales.\n\n**Sostenibilidad industrial**\nDurante la discusión se abordó la tensión entre la actividad industrial y las exigencias de sostenibilidad. En particular, se analizaron iniciativas como la producción de “cemento verde”, orientada a la reducción de emisiones de CO₂ y a la innovación tecnológica para minimizar los impactos de la industria cementera. Si bien tales esfuerzos responden a compromisos de responsabilidad empresarial y a las presiones regulatorias internacionales frente al cambio climático, persiste el debate sobre su eficacia real frente a los impactos locales en ecosistemas frágiles como los sistemas kársticos.\n\n**Conservación comunitaria**\nEl territorio de Río Claro se constituye también como un espacio de interacción de múltiples actividades: turismo de naturaleza, minería artesanal y programas de conservación liderados por la sociedad civil. Iniciativas como Huella Viva representan un esfuerzo de restauración ecológica y gobernanza territorial, orientado a mitigar los impactos de la actividad extractiva e industrial, y a fortalecer el tejido social en torno a la conservación. Este componente evidencia que la sostenibilidad no depende únicamente de la gestión empresarial, sino también de la capacidad de las comunidades para participar activamente en la construcción de alternativas de manejo integral del territorio.\n\n**Conexión jurídica**\n\nEl caso de Río Claro plantea interrogantes relevantes en torno a la eficacia de los instrumentos de control y regulación ambiental aplicados a la industria cementera en ecosistemas de alta fragilidad. El análisis permite evaluar la solidez de los Planes de Manejo Ambiental (PMA), las obligaciones derivadas del licenciamiento y el rol de las autoridades competentes en la fiscalización del cumplimiento de dichos compromisos.\n\nDesde una perspectiva más amplia, este escenario alimenta el debate sobre la responsabilidad empresarial en el marco de la transición hacia la sostenibilidad. En línea con el principio de quien contamina paga y con los estándares internacionales de debida diligencia ambiental, se exige a las empresas no solo compensar impactos, sino transformar sus modelos de producción hacia esquemas más responsables, transparentes y acordes con los límites ecosistémicos.\n\nFinalmente, la coexistencia observada en Río Claro refleja la necesidad de avanzar hacia marcos de gobernanza ambiental multinivel, en los que confluyan el Estado, la industria y las comunidades, bajo principios de corresponsabilidad, precaución y justicia intergeneracional.",
    imageUrls: [
      { id: "https://i.imgur.com/HkB42tQ.jpeg", hint: "clear river" },
      { id: "https://i.imgur.com/hPOBZuO.png", hint: "karst caves" },
      { id: "https://i.imgur.com/mJ0Ngw3.png", hint: "rafting tour" },
      { id: "https://i.imgur.com/WmzWQ0s.jpeg", hint: "tropical forest" },
      { id: "https://i.imgur.com/rWIy4Rq.jpeg", hint: "jungle canopy" },
      { id: "https://i.imgur.com/F9Kfxza.jpeg", hint: "river boat" },
    ],
    videoUrl: 'https://i.imgur.com/eCKe15A.mp4',
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
  { time: "3:00 pm", title: "Inicio del Retorno", description: "Regreso a Medellín", icon: <Home className="h-6 w-6" />, location: "#" },
  { time: "6:00 pm", title: "Llegada Estimada", description: "TOSTAO' Café & pan / Autónoma", location: "https://maps.app.goo.gl/P5t7GW6fe92hJ9H77", icon: <MapPin className="h-6 w-6" /> },
];

export default function FieldTripPage() {
  return (
    <StopModalProvider>
      <div className="bg-background min-h-screen text-foreground">
        <TripHeader stops={stops} />

        <main className="container mx-auto px-4 py-12">
          <Introduction />

          <div className="mt-16 grid gap-16">
            <GeneralInfo />
            <TeamInfo />
          </div>

          <section className="mt-24">
            <h2 className="text-4xl font-headline font-bold text-center mb-12 text-primary">
              Itinerario del Día
            </h2>
            <div className="relative space-y-24">
              <div className="absolute left-1/2 top-0 -bottom-8 w-px bg-border/50 -translate-x-1/2 hidden md:block" />

              <TimelineEntry data={timelineEvents[0]} />

              {stops.map((stop, index) => (
                 <ItinerarySection key={index} stop={stop} reverse={index % 2 !== 0} />
              ))}
              
              <LegalAnalysis />

              <Conclusions />

              <TimelineEntry data={timelineEvents[1]} />
              <TimelineEntry data={timelineEvents[2]} />
            </div>
          </section>
        </main>

        <footer className="py-8 mt-12 border-t border-border">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Facultad de Derecho. Universidad de Antioquia.</p>
          </div>
        </footer>

        <FullStopModal />
      </div>
    </StopModalProvider>
  );
}
