"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";

const events = [
    {
        id: 1,
        title: "Concierto de Jazz Bajo las Estrellas",
        description: "Una noche mágica con los mejores exponentes del Jazz local e internacional.",
        date: "2023-11-25",
        time: "20:00",
        location: "Jardín Principal, Santo Domingo",
        category: "Concierto",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Ciclo de Cine: Clásicos Dominicanos",
        description: "Proyección de películas emblemáticas del cine dominicano restauradas.",
        date: "2023-11-28",
        time: "19:00",
        location: "Auditorio, Santiago",
        category: "Cine",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Taller de Pintura para Niños",
        description: "Actividad creativa para niños de 8 a 12 años. Materiales incluidos.",
        date: "2023-12-02",
        time: "10:00",
        location: "Sala de Talleres, Santo Domingo",
        category: "Taller",
        image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Conferencia: Historia del Arte Caribeño",
        description: "Un recorrido por las influencias y evolución del arte en el Caribe.",
        date: "2023-12-05",
        time: "18:30",
        location: "Salón Multiuso, Santiago",
        category: "Conferencia",
        image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2670&auto=format&fit=crop"
    }
];

export default function EventsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <PageHero
                title="Agenda Cultural"
                description="Explora nuestra selección de eventos diseñados para inspirar y conectar."
                icon={CalendarDays}
                variant="primary"
            />

            <div className="container py-16">
                <div className="grid gap-12">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b pb-12 last:border-0"
                        >
                            {/* Date Column */}
                            <div className="lg:col-span-2 flex flex-col items-start lg:items-center text-center lg:border-r lg:pr-8">
                                <span className="text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                                    {new Date(event.date).getDate()}
                                </span>
                                <span className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
                                    {new Date(event.date).toLocaleDateString('es-DO', { month: 'long' })}
                                </span>
                                <span className="text-sm text-muted-foreground mt-1">
                                    {new Date(event.date).getFullYear()}
                                </span>
                            </div>

                            {/* Image Column */}
                            <div className="lg:col-span-4 overflow-hidden aspect-[4/3] lg:aspect-[3/2] relative bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="lg:col-span-6 space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="secondary" className="rounded-none uppercase tracking-wider text-xs">
                                        {event.category}
                                    </Badge>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground uppercase tracking-wider">
                                        <MapPin className="h-3 w-3" /> {event.location}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors">
                                    <Link href={`/events/${event.id}`}>
                                        {event.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="flex items-center justify-between pt-4">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Clock className="h-4 w-4" />
                                        {event.time}
                                    </div>
                                    <Button variant="link" className="p-0 h-auto group/btn" asChild>
                                        <Link href={`/events/${event.id}`}>
                                            Reservar Entrada <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
