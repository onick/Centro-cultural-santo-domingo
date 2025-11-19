"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getResourcesByCategory } from "@/data/library-resources";
import { use } from "react";

const categoryInfo: Record<string, { title: string; description: string }> = {
    arte: {
        title: "Arte",
        description: "Colección de libros y documentos sobre arte visual, historia del arte y artistas dominicanos."
    },
    biografias: {
        title: "Biografías",
        description: "Historias de vida de personalidades destacadas de la cultura dominicana."
    },
    migracion: {
        title: "Clásicos de la Migración Dominicana",
        description: "Obras fundamentales sobre la historia y la experiencia migratoria dominicana."
    }
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = use(params);
    const resources = getResourcesByCategory(resolvedParams.category);
    const info = categoryInfo[resolvedParams.category] || { title: resolvedParams.category, description: "" };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="container">
                    <Link
                        href="/library"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Volver a Biblioteca Virtual
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                            {info.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            {info.description}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                            <FileText className="h-4 w-4" />
                            <span>{resources.length} recursos disponibles</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-20">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {resources.map((resource, index) => (
                            <motion.div
                                key={resource.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                                    {/* Cover Image */}
                                    <div className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={resource.coverImage}
                                            alt={resource.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                                {resource.year}
                                            </span>
                                        </div>

                                        <h3 className="font-serif font-bold text-xl mb-2 leading-tight group-hover:text-primary transition-colors">
                                            {resource.title}
                                        </h3>

                                        <p className="text-sm text-muted-foreground mb-1">{resource.author}</p>

                                        {resource.pages && (
                                            <p className="text-xs text-muted-foreground mb-4">
                                                {resource.pages} páginas
                                            </p>
                                        )}

                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                            {resource.description}
                                        </p>

                                        <Button
                                            className="w-full rounded-none"
                                            asChild
                                        >
                                            <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                                                <Download className="h-4 w-4 mr-2" />
                                                Descargar PDF
                                            </a>
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {resources.length === 0 && (
                        <div className="text-center py-20">
                            <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                            <h3 className="text-2xl font-serif font-bold mb-2">No hay recursos disponibles</h3>
                            <p className="text-muted-foreground">Esta categoría está en desarrollo.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
