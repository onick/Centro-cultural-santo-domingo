"use client";

import { Card } from "@/components/ui/card";
import { BookOpen, Film, Theater, Users, Presentation, Palette, Music, Info } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";

const facilities = [
    {
        icon: BookOpen,
        title: "Biblioteca Dr. Nicolás Alcides Camilo González",
        description: "Fundada en 1955, nuestra biblioteca posee una selección de libros con temas diversos que van desde literatura, economía, filosofía y estudios generales. Compuesta por libros de autores extranjeros y escritores dominicanos.",
        services: [
            "Servicios de consulta y préstamo",
            "Donaciones a centros educativos",
            "Catálogo general disponible",
            "Área de estudio para estudiantes"
        ]
    },
    {
        icon: Palette,
        title: "Sala de Exposiciones Ada Balcácer",
        description: "Situada en el primer nivel, acoge grandes obras artísticas con una estructura adecuada para la buena circulación del personal y los visitantes. Ofrece visitas guiadas y está diseñada para inauguraciones y cierres de exposiciones.",
        services: [
            "Exposiciones artísticas y científicas",
            "Grandes clásicos de las artes visuales",
            "Artesanía y esculturas",
            "Visitas guiadas disponibles"
        ]
    },
    {
        icon: Film,
        title: "Auditorio / Cine",
        description: "Con capacidad para 60 personas, este espacio presenta grandes filmes del cine dominicano e internacional, documentales, obras de teatro y más. También se presta para conferencias, cursos y talleres de formación cultural.",
        services: [
            "Cine clásico y dominicano",
            "Cine de embajadas",
            "Cine infantil y escolar",
            "Proyecciones: Martes y viernes 7:00 p.m."
        ]
    },
    {
        icon: Theater,
        title: "Teatro",
        description: "Presentaciones de piezas teatrales de prestigiosos autores dominicanos y extranjeros, puestas en escena por actores de preparación y formación en las bellas artes del país y grandes escuelas de teatro del mundo.",
        services: [
            "Teatro dominicano y extranjero",
            "Actores profesionales",
            "Obras clásicas y contemporáneas",
            "Temporadas regulares"
        ]
    },
    {
        icon: Presentation,
        title: "Conferencias y Debates",
        description: "Espacio para conferencias, charlas y debates presenciales o virtuales. Cuenta con la sala de exposiciones y el cine auditorio, con disponibilidad para presentar materiales audiovisuales.",
        services: [
            "Conferencias presenciales y virtuales",
            "Charlas temáticas",
            "Debates culturales",
            "Equipo técnico audiovisual"
        ]
    },
    {
        icon: Music,
        title: "Patio Español",
        description: "Área al aire libre disponible para que los visitantes puedan socializar al concluir las actividades. Espacio preparado para conciertos, talleres de manualidades y lectura de poesías y poemas.",
        services: [
            "Conciertos al aire libre",
            "Talleres de manualidades",
            "Lecturas de poesía",
            "Eventos sociales"
        ]
    }
];

const cineCycles = [
    { name: "Cine Clásico", description: "Proyección de los mejores filmes del cine clásico" },
    { name: "Cine de Embajadas", description: "Películas correspondientes al país invitado" },
    { name: "Cine Dominicano", description: "Las mejores creaciones de cine del país" },
    { name: "Cine Infantil", description: "Películas divertidas y educativas para niños" },
    { name: "Cine Escolar", description: "Películas educativas para escuelas e institutos" },
    { name: "Cine al Aire Libre", description: "Proyecciones en el patio español" }
];

export default function InfoPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <PageHero
                title="Información General"
                description="Descubre todos nuestros espacios, servicios y actividades culturales disponibles para la comunidad."
                icon={Info}
                variant="primary"
            />

            {/* Facilities - Alternating Layout */}
            <section className="py-20">
                <div className="container">
                    <div className="space-y-32">
                        {facilities.map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="relative h-[400px] overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={`https://images.unsplash.com/photo-${index === 0 ? '1481627834876-60a67b33e69f' : // Library
                                                index === 1 ? '1577083165540-7c914c51863f' : // Gallery
                                                    index === 2 ? '1489599849927-2ee91cede3ba' : // Cinema
                                                        index === 3 ? '1503095396549-807759245b35' : // Theater
                                                            index === 4 ? '1540575467063-178a50c2df87' : // Conference
                                                                '1519167758481-83f29ad8ee8d' // Patio
                                                }?q=80&w=2670&auto=format&fit=crop`}
                                            alt={facility.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="inline-flex h-14 w-14 bg-primary/10 rounded-full items-center justify-center">
                                        <facility.icon className="h-7 w-7 text-primary" />
                                    </div>

                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
                                            {facility.title}
                                        </h2>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {facility.description}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                                            Servicios Disponibles
                                        </h4>
                                        <ul className="grid sm:grid-cols-2 gap-3">
                                            {facility.services.map((service, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    <span className="text-sm text-foreground/80">{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cinema Cycles Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Cinema Background Image */}
                <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop"
                        alt="Cinema"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark elegant overlay */}
                    <div className="absolute inset-0 bg-zinc-900/85 dark:bg-black/90" />
                </div>

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Ciclos de Cine</h2>
                        <p className="text-lg text-white/70">
                            Nuestra variada programación cinematográfica
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {cineCycles.map((cycle, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                            >
                                <div className="p-6 border-l-2 border-l-[#F79523] bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                    <h4 className="font-serif font-bold text-lg mb-2 text-white group-hover:text-[#F79523] transition-colors">
                                        {cycle.name}
                                    </h4>
                                    <p className="text-sm text-white/60">{cycle.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Children Section */}
            <section className="py-20 relative overflow-hidden">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/987-banneres-internos.jpg"
                        alt="Actividades para niños"
                        className="w-full h-full object-cover"
                    />
                    {/* Elegant gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95 dark:from-zinc-900/95 dark:via-zinc-900/90 dark:to-zinc-900/95" />
                </div>

                <div className="container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <div className="inline-flex h-16 w-16 bg-secondary/20 rounded-full items-center justify-center mb-6">
                                <Users className="h-8 w-8 text-secondary-foreground" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                                Actividades para Niños
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                El Centro Cultural Banreservas tiene actividades especiales para los más pequeños:
                                teatro infantil, cine educativo, espacios literarios con la Biblioteca,
                                talleres de manualidades y mucho más.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-4 gap-6 text-center">
                            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                                <Theater className="h-10 w-10 mx-auto mb-3 text-primary" />
                                <h4 className="font-bold mb-2">Teatro Infantil</h4>
                                <p className="text-sm text-muted-foreground">Obras adaptadas para niños</p>
                            </Card>
                            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                                <Film className="h-10 w-10 mx-auto mb-3 text-primary" />
                                <h4 className="font-bold mb-2">Cine Educativo</h4>
                                <p className="text-sm text-muted-foreground">Películas didácticas</p>
                            </Card>
                            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                                <BookOpen className="h-10 w-10 mx-auto mb-3 text-primary" />
                                <h4 className="font-bold mb-2">Espacios Literarios</h4>
                                <p className="text-sm text-muted-foreground">Cuentacuentos y lectura</p>
                            </Card>
                            <Card className="p-6 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm">
                                <Palette className="h-10 w-10 mx-auto mb-3 text-primary" />
                                <h4 className="font-bold mb-2">Manualidades</h4>
                                <p className="text-sm text-muted-foreground">Talleres creativos</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Historical Info */}
            <section className="py-20 bg-primary text-white">
                <div className="container max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Biblioteca Dr. Nicolás Alcides Camilo González
                        </h2>
                        <div className="space-y-4 text-lg text-white/90 leading-relaxed">
                            <p>
                                El nombre actual fue designado mediante resolución del Consejo de Directores,
                                el 17 de julio de 1997, en honor a un excepcional colaborador de la institución.
                            </p>
                            <p>
                                Alcides Camilo, en su diversa trayectoria, se extendió desde directivo hasta áreas
                                administrativas y de negocios por más de 34 años en servicio. Fue el propulsor y
                                mentor del perfeccionamiento de la biblioteca y de la extensión de sus servicios
                                al público general.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
