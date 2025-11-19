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
                                    <Card className={`p-8 h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-0 bg-gradient-to-br ${category.color}`}>
                                        <div className="flex flex-col h-full">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <category.icon className="h-7 w-7 text-primary" />
                                                </div>
                                                <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                                                    {category.count} recursos
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">
                                                    {category.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed">
                                                    {category.description}
                                                </p>
                                            </div>

                                            <div className="mt-6 pt-6 border-t flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                                                <span>Explorar colección</span>
                                                <ExternalLink className="h-4 w-4" />
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
                                type: "Libro Digital",
                                title: "Historia del Arte Dominicano",
                                author: "Varios Autores",
                                year: "2023",
                                pages: "350 págs"
                            },
                            {
                                type: "Revista Cultural",
                                title: "Hojas de Cultura",
                                author: "Banreservas",
                                year: "2024",
                                pages: "120 págs"
                            },
                            {
                                type: "Ensayo",
                                title: "Identidad y Migración",
                                author: "Colección Especial",
                                year: "2023",
                                pages: "200 págs"
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
                                    <div className="aspect-[3/4] bg-gradient-to-br from-primary/20 to-primary/5 rounded mb-4 flex items-center justify-center">
                                        <BookOpen className="h-16 w-16 text-primary/40" />
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
