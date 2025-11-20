"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Newspaper, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const categories = [
    {
        id: "arte",
        title: "Arte",
        icon: Palette,
        description: "Colección de libros y documentos sobre arte visual, historia del arte y artistas dominicanos.",
        count: 15,
        color: "from-purple-500/20 to-purple-500/5"
    },
    {
        id: "biografias",
        title: "Biografías",
        icon: Users,
        description: "Historias de vida de personalidades destacadas de la cultura dominicana.",
        count: 12,
        color: "from-blue-500/20 to-blue-500/5"
    },
    {
        id: "migracion",
        title: "Clásicos de la Migración Dominicana",
        icon: Globe,
        description: "Obras fundamentales sobre la historia y la experiencia migratoria dominicana.",
        count: 8,
        color: "from-green-500/20 to-green-500/5"
    },
    {
        id: "cuentos",
        title: "Cuentos",
        icon: BookOpen,
        description: "Selección de narrativa corta de autores dominicanos e internacionales.",
        count: 25,
        color: "from-orange-500/20 to-orange-500/5"
    },
    {
        id: "ensayos",
        title: "Ensayos",
        icon: FileText,
        description: "Reflexiones y análisis sobre temas culturales, sociales e históricos.",
        count: 18,
        color: "from-red-500/20 to-red-500/5"
    },
    {
        id: "entrevistas",
        title: "Entrevistas",
        icon: MessageSquare,
        description: "Conversaciones con figuras relevantes de la cultura dominicana.",
        count: 10,
        color: "from-teal-500/20 to-teal-500/5"
    },
    {
        id: "novelas",
        title: "Novelas",
        icon: Book,
        description: "Narrativa extensa de autores dominicanos contemporáneos y clásicos.",
        count: 20,
        color: "from-indigo-500/20 to-indigo-500/5"
    },
    {
        id: "pedro-mir",
        title: "Pedro Mir",
        icon: Award,
        description: "Obras completas del poeta nacional de la República Dominicana.",
        count: 7,
        color: "from-yellow-500/20 to-yellow-500/5"
    },
    {
        id: "poesias",
        title: "Poesías",
        icon: Feather,
        description: "Antología de poesía dominicana desde el siglo XIX hasta la actualidad.",
        count: 30,
        color: "from-pink-500/20 to-pink-500/5"
    },
    {
        id: "teatro",
        title: "Teatro",
        icon: Drama,
        description: "Obras teatrales de dramaturgos dominicanos e internacionales.",
        count: 14,
        color: "from-cyan-500/20 to-cyan-500/5"
    }
];

import { Palette, Users, Globe, Book, MessageSquare, Award, Feather, Drama } from "lucide-react";

export default function LibraryPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <PageHero
                title="Biblioteca Virtual"
                description="Bienvenidos a nuestra biblioteca virtual, un espacio donde encontrarás una colección digital que abarca desde libros electrónicos, revistas y documentos puestos en circulación por Banreservas."
                icon={BookOpen}
                variant="primary"
            />

            {/* Categories Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={`/library/${category.id}`}>
                                    <Card className="p-0 h-full hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-zinc-200 dark:border-zinc-800 bg-[#FAF9F6] dark:bg-zinc-900 overflow-hidden">
                                        <div className="p-8 border-l-4 border-primary">
                                            {/* Header tipo ficha bibliográfica */}
                                            <div className="flex items-start justify-between mb-6 pb-4 border-b border-zinc-300 dark:border-zinc-700">
                                                <div className="flex items-center gap-4">
                                                    <div className="h-12 w-12 border-2 border-primary/20 rounded flex items-center justify-center">
                                                        <category.icon className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1 font-mono">
                                                            Categoría
                                                        </div>
                                                        <h3 className="text-2xl font-serif font-bold tracking-tight">
                                                            {category.title}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-mono">
                                                        Recursos
                                                    </div>
                                                    <div className="text-3xl font-serif font-bold text-primary">
                                                        {category.count}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Descripción */}
                                            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                                                {category.description}
                                            </p>

                                            {/* Footer */}
                                            <div className="flex items-center justify-between pt-4 border-t border-zinc-300 dark:border-zinc-700">
                                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                                                    <div className="h-1 w-8 bg-primary"></div>
                                                    <span>Disponible</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                                                    <span>Explorar</span>
                                                    <ExternalLink className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Resources */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                            Recursos Destacados
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Selección especial de publicaciones más consultadas
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                type: "Biografía",
                                title: "Pedro Mir en Familia",
                                author: "Familia Mir",
                                year: "2023",
                                pages: "280 págs",
                                cover: "/biografia/pedro mir en familia.png"
                            },
                            {
                                type: "Biografía",
                                title: "Dominicanas de Voluntad en la Diáspora",
                                author: "Varios Autores",
                                year: "2023",
                                pages: "320 págs",
                                cover: "/biografia/dominicanas de voluntad en la diaspora.png"
                            },
                            {
                                type: "Biografía",
                                title: "Dominicanas Fuera de Serie",
                                author: "Colección Especial",
                                year: "2024",
                                pages: "250 págs",
                                cover: "/biografia/dominicanaas fuera de serie.png"
                            }
                        ].map((resource, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 rounded mb-4 overflow-hidden">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={resource.cover}
                                            alt={resource.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                            {resource.type}
                                        </span>
                                    </div>
                                    <h4 className="font-serif font-bold text-lg mb-2">{resource.title}</h4>
                                    <p className="text-sm text-muted-foreground mb-1">{resource.author}</p>
                                    <p className="text-xs text-muted-foreground mb-4">
                                        {resource.year} • {resource.pages}
                                    </p>
                                    <Button variant="outline" size="sm" className="w-full">
                                        <Download className="h-4 w-4 mr-2" />
                                        Descargar
                                    </Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container">
                    <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Newspaper className="h-16 w-16 mx-auto mb-6 text-white/90" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                                Suscríbete a nuestro boletín
                            </h2>
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                                Recibe notificaciones sobre nuevas publicaciones, recursos digitales y contenido exclusivo.
                            </p>
                            <Button size="lg" variant="secondary" className="rounded-none h-14 px-10 text-lg">
                                Suscribirse Ahora
                            </Button>
                        </motion.div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
