"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, ArrowRight, BookOpen, Users, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredExhibitions = [
  {
    id: 1,
    title: "Colección de Arte Visual",
    subtitle: "Maestros del Arte Dominicano",
    description: "Descubre las obras de maestros del arte dominicano desde inicios del siglo XX, destacando la diversidad de estilos y técnicas.",
    image: "https://images.unsplash.com/photo-1578926288207-83c8160Fed5d?q=80&w=2940&auto=format&fit=crop",
    link: "/exhibitions/art-collection",
    badge: "Permanente"
  },
  {
    id: 2,
    title: "Historia y Patrimonio",
    subtitle: "Nuestra Herencia Cultural",
    description: "Explora nuestra valiosa colección que nos revela el origen y evolución de la cultura dominicana.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2960&auto=format&fit=crop",
    link: "/exhibitions/heritage",
    badge: "Destacado"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Concierto de Piano Clásico",
    date: "2024-12-15",
    time: "19:00",
    location: "Auditorio Principal",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=2940&auto=format&fit=crop",
    category: "Música"
  },
  {
    id: 2,
    title: "Ciclo de Cine Dominicano",
    date: "2024-12-18",
    time: "18:00",
    location: "Sala de Proyecciones",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
    category: "Cine"
  },
  {
    id: 3,
    title: "Taller de Fotografía Documental",
    date: "2024-12-20",
    time: "10:00",
    location: "Aula 3",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2874&auto=format&fit=crop",
    category: "Taller"
  }
];

const newsItems = [
  {
    id: 1,
    title: "Centro Cultural Banreservas celebra un año de promoción cultural",
    excerpt: "Un año lleno de actividades, exposiciones y eventos que han enriquecido la vida cultural de Santo Domingo y Santiago.",
    date: "2024-11-10",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop",
    category: "Anuncio"
  },
  {
    id: 2,
    title: "Nueva exposición temporal: Visiones Contemporáneas",
    excerpt: "Artistas emergentes presentan su visión única del arte dominicano en el siglo XXI.",
    date: "2024-11-05",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2940&auto=format&fit=crop",
    category: "Exposición"
  }
];

const stats = [
  { icon: Building2, label: "Sedes", value: "2" },
  { icon: CalendarDays, label: "Eventos Mensuales", value: "30+" },
  { icon: Users, label: "Visitantes/Año", value: "50K+" },
  { icon: BookOpen, label: "Recursos Digitales", value: "1000+" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564399579883-451a5d44ec08?q=80&w=2940&auto=format&fit=crop')",
          }}
        />

        <div className="relative z-20 container text-center text-white space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-white/90 font-medium">
              Donde el arte y la cultura se expresan
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1]">
              Centro Cultural
              <span className="block text-[#F79523] mt-2">Banreservas</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed mb-12">
              Una joya cultural en el corazón de Santo Domingo, dedicada a preservar y difundir nuestra identidad, historia y valores culturales.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="rounded-none h-14 px-10 text-lg bg-primary hover:bg-primary/90" asChild>
              <Link href="/events">
                Explorar Actividades
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="rounded-none h-14 px-10 text-lg bg-white text-zinc-900 hover:bg-white/90" asChild>
              <Link href="/branches">Planea tu Visita</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-[#F79523]" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Exhibitions */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Exposiciones Destacadas</h2>
              <p className="text-lg text-muted-foreground">
                Sumérgete en nuestra colección permanente y exhibiciones temporales
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredExhibitions.map((exhibition, index) => (
              <motion.div
                key={exhibition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-80 overflow-hidden">
                    <Badge className="absolute top-4 left-4 z-10 bg-secondary text-secondary-foreground">
                      {exhibition.badge}
                    </Badge>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  <div className="p-8 -mt-32 relative z-10">
                    <p className="text-sm uppercase tracking-widest text-white/80 mb-2">{exhibition.subtitle}</p>
                    <h3 className="text-3xl font-serif font-bold text-white mb-4">{exhibition.title}</h3>
                    <p className="text-white/90 mb-6 leading-relaxed">{exhibition.description}</p>
                    <Button variant="link" className="text-white hover:text-[#F79523] p-0 h-auto" asChild>
                      <Link href={exhibition.link}>
                        Explorar colección <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold mb-3"
              >
                Próximas Actividades
              </motion.h2>
              <p className="text-muted-foreground text-lg">Eventos gratuitos para toda la familia</p>
            </div>
            <Button variant="outline" className="rounded-none hidden md:inline-flex" asChild>
              <Link href="/events">Ver Agenda Completa</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-3 right-3 bg-secondary">
                      {event.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" />
                        {new Date(event.date).toLocaleDateString('es-DO', { day: 'numeric', month: 'short' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </div>
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <Button variant="link" className="p-0 h-auto" asChild>
                      <Link href={`/events/${event.id}`}>
                        Reservar cupo <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 md:hidden">
            <Button variant="outline" className="rounded-none" asChild>
              <Link href="/events">Ver Agenda Completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Noticias de Interés</h2>
              <p className="text-lg text-muted-foreground">
                Mantente al día con las últimas novedades del centro cultural
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {newsItems.map((news, index) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <Badge variant="secondary" className="mb-3">{news.category}</Badge>
                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{news.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(news.date).toLocaleDateString('es-DO', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                  <Button variant="link" className="p-0 h-auto">
                    Leer más <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Descubre, Explora y Conéctate
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Sumérgete en la rica herencia cultural dominicana. Visita nuestras sedes en Santo Domingo y Santiago.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-none h-14 px-10 text-lg" asChild>
                <Link href="/branches">Planificar Visita</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-none h-14 px-10 text-lg border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link href="/about">Conoce Más</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
