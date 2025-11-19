"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin, Clock, ArrowRight, Building2, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock data specific for Santiago
const santiagoEvents = [
    {
        id: 101,
        title: "Exposición: Colores del Cibao",
        date: "2024-12-10",
        time: "18:00",
        location: "Sala de Exposiciones, Santiago",
        image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2940&auto=format&fit=crop",
        category: "Exposición"
    },
    {
        id: 102,
        title: "Concierto de Cuerdas del Norte",
        date: "2024-12-14",
        time: "19:30",
        location: "Auditorio Santiago",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop",
        category: "Música"
    },
    {
        id: 103,
        title: "Taller de Alfarería Tradicional",
        date: "2024-12-16",
        time: "15:00",
        location: "Patio Cultural, Santiago",
        image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2874&auto=format&fit=crop",
        category: "Taller"
    }
];

export default function SantiagoPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section Santiago */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/santiago.jpg')", // Using the local Santiago image
                    }}
                />

                <div className="relative z-20 container text-center text-white space-y-8 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Badge className="mb-6 bg-[#F79523] text-white border-none px-4 py-1 text-sm tracking-widest uppercase">
                            Zona Norte
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
                            Centro Cultural
                            <span className="block text-[#F79523] mt-2">Santiago</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-white/90 font-light leading-relaxed mb-12">
                            Un faro de cultura y modernidad en el corazón del Cibao, preservando nuestras raíces y proyectando el futuro.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button size="lg" className="rounded-none h-14 px-10 text-lg bg-[#F79523] hover:bg-[#F79523]/90 text-white" asChild>
                            <Link href="/events?location=santiago">
                                Agenda Santiago
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Info Bar */}
            <section className="bg-zinc-900 text-white py-12 border-b border-white/10">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <MapPin className="h-6 w-6 text-[#F79523]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Ubicación</h3>
                                <p className="text-white/70 text-sm">Calle del Sol, Centro Histórico<br />Santiago de los Caballeros</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Clock className="h-6 w-6 text-[#F79523]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Horario</h3>
                                <p className="text-white/70 text-sm">Mar - Dom: 10:00 AM - 9:00 PM<br />Lunes: Cerrado</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 justify-center md:justify-start">
                            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                <Phone className="h-6 w-6 text-[#F79523]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Contacto</h3>
                                <p className="text-white/70 text-sm">(809) 555-0200<br />info.sti@centrocultural.do</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Santiago Events */}
            <section className="py-24 bg-background">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-serif font-bold mb-3"
                            >
                                Actividades en Santiago
                            </motion.h2>
                            <p className="text-muted-foreground text-lg">Eventos exclusivos de la Zona Norte</p>
                        </div>
                        <Button variant="outline" className="rounded-none hidden md:inline-flex" asChild>
                            <Link href="/events">Ver Agenda Completa</Link>
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {santiagoEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 border-zinc-200 dark:border-zinc-800">
                                    <div className="relative h-56 overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <Badge className="absolute top-3 right-3 bg-[#F79523] hover:bg-[#F79523]">
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
                                        <h3 className="font-serif font-bold text-xl mb-3 group-hover:text-[#F79523] transition-colors">
                                            {event.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                            <MapPin className="h-4 w-4" />
                                            {event.location}
                                        </div>
                                        <Button variant="link" className="p-0 h-auto text-[#F79523]" asChild>
                                            <Link href={`/events/${event.id}`}>
                                                Más detalles <ArrowRight className="ml-1 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Santiago Short */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-serif font-bold mb-6">Sobre la Sede</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Ubicado en el histórico edificio del antiguo Hotel Mercedes, el Centro Cultural Banreservas Santiago
                                es un espacio dedicado a la promoción de los valores culturales de la región norte.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-[#F79523]" />
                                    <span>Sala de Exposiciones Temporales</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-[#F79523]" />
                                    <span>Auditorio para 100 personas</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-[#F79523]" />
                                    <span>Biblioteca Especializada</span>
                                </li>
                            </ul>
                            <Button variant="outline" className="rounded-none" asChild>
                                <Link href="/about">Conoce nuestra historia</Link>
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px]"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/santiago.jpg"
                                alt="Interior Sede Santiago"
                                className="w-full h-full object-cover shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
