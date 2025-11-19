"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";

const publications = [
    {
        id: "rene-del-risco",
        title: "René del Risco Bermúdez",
        type: "Catálogo de Exposición",
        year: "2023",
        description: "Catálogo de la exposición dedicada al reconocido artista dominicano René del Risco Bermúdez.",
        coverImage: "/publicaciones/Rene del risco bermudez.png",
        downloadUrl: "#"
    },
    {
        id: "cordillera-que-canta",
        title: "Cordillera que Canta",
        type: "Publicación Cultural",
        year: "2023",
        description: "Recopilación de expresiones culturales y artísticas de la región montañosa dominicana.",
        coverImage: "/publicaciones/cordillera que canta.png",
        downloadUrl: "#"
    },
    {
        id: "el-arte-en-la-cabeza-pub",
        title: "El Arte en la Cabeza",
        type: "Catálogo de Exposición",
        year: "2023",
        description: "Publicación que explora el proceso creativo y la mente del artista.",
        coverImage: "/publicaciones/el arte en la cabeza.png",
        downloadUrl: "#"
    },
    {
        id: "jorge-pineda",
        title: "Jorge Pineda",
        type: "Catálogo de Exposición",
        year: "2024",
        description: "Retrospectiva de la obra del maestro Jorge Pineda.",
        coverImage: "/publicaciones/joge pineda.png",
        downloadUrl: "#"
    },
    {
        id: "macondo-santo-domingo",
        title: "Macondo en Santo Domingo",
        type: "Publicación Literaria",
        year: "2022",
        description: "Exploración de las influencias del realismo mágico en la literatura dominicana.",
        coverImage: "/publicaciones/macondo en santo domingo.png",
        downloadUrl: "#"
    },
    {
        id: "nadal-walcot",
        title: "Nadal Walcot",
        type: "Catálogo de Exposición",
        year: "2023",
        description: "Catálogo de exposición del artista Nadal Walcot.",
        coverImage: "/publicaciones/nadal walcot.png",
        downloadUrl: "#"
    },
    {
        id: "segunda-temporada-teatro",
        title: "Segunda Temporada de Teatro Banreservas",
        type: "Programa Cultural",
        year: "2024",
        description: "Programa y guía de la segunda temporada teatral del Centro Cultural Banreservas.",
        coverImage: "/publicaciones/segunda temporada de teatro banreserbas.png",
        downloadUrl: "#"
    },
    {
        id: "virgen-maria",
        title: "Virgen María",
        type: "Catálogo de Exposición",
        year: "2023",
        description: "Exposición sobre las representaciones artísticas de la Virgen María en el arte dominicano.",
        coverImage: "/publicaciones/virgen maria.png",
        downloadUrl: "#"
    }
];

export default function PublicationsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <PageHero
                title="Publicaciones"
                description="Catálogos de exposiciones, programas culturales y publicaciones especiales del Centro Cultural Banreservas."
                icon={BookOpen}
                variant="primary"
            />

            {/* Publications Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {publications.map((publication, index) => (
                            <motion.div
                                key={publication.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                                    {/* Cover Image */}
                                    <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={publication.coverImage}
                                            alt={publication.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="mb-3">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                                {publication.type}
                                            </span>
                                            <span className="text-xs text-muted-foreground ml-2">• {publication.year}</span>
                                        </div>

                                        <h3 className="font-serif font-bold text-xl mb-3 leading-tight group-hover:text-primary transition-colors flex-1">
                                            {publication.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                                            {publication.description}
                                        </p>

                                        <Button
                                            className="w-full rounded-none"
                                            variant="outline"
                                            asChild
                                        >
                                            <a href={publication.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                <Download className="h-4 w-4 mr-2" />
                                                Descargar PDF
                                            </a>
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                <div className="container max-w-4xl">
                    <Card className="p-12 bg-gradient-to-br from-primary to-primary/80 text-white text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <BookOpen className="h-16 w-16 mx-auto mb-6 text-white/90" />
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                                Suscríbete a nuestras publicaciones
                            </h2>
                            <p className="text-lg text-white/90 mb-8">
                                Recibe notificaciones sobre nuevos catálogos y publicaciones culturales.
                            </p>
                            <Button size="lg" variant="secondary" className="rounded-none h-14 px-10 text-lg">
                                Suscribirse
                            </Button>
                        </motion.div>
                    </Card>
                </div>
            </section>
        </div>
    );
}
