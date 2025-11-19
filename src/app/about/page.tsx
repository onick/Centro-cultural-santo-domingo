"use client";

import { Card } from "@/components/ui/card";
import { Building2, Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/page-hero";

const values = [
    "Compromiso social",
    "Honestidad",
    "Responsabilidad",
    "Ética",
    "Promoción de la cultura",
    "Expansión del arte",
    "Amor por el conocimiento",
    "Hermandad",
    "Trabajo en equipo",
    "Colaboración",
    "Respeto al pensamiento y a las creencias de todas las personas, instituciones y grupos"
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <PageHero
                title="¿Quiénes Somos?"
                description="El Centro Cultural Banreservas es la unidad de la Familia Reservas, sin fines de lucro, que gestiona aportes al desarrollo del arte y la cultura, el conocimiento de sus evoluciones e interacciones con las creaciones de expresiones emergentes."
                variant="primary"
            />

            {/* Nuestro Origen */}
            <section className="py-20 bg-background">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Nuestro Origen
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    El Centro Cultural Banreservas fue inaugurado el 31 de enero de 2013.
                                    Se encuentra ubicado en el edificio que fungió como una de las cinco casas
                                    del adelantado español Francisco de Garay, construida en el año 1506, según
                                    explica el sacerdote e historiador Fray Vicente Rubio.
                                </p>
                                <p>
                                    En la edificación, de dos niveles, residieron varias familias en distintas ocasiones.
                                    Más tarde, al adquirirla el Banco de Reservas, fue ocupada sucesivamente por diferentes
                                    entidades de la institución, hasta que, en 2008, el entonces administrador de la
                                    institución, licenciado Daniel Toribio, tuvo la idea de que el Banco poseyese una
                                    dependencia que realizara actividades culturales como parte de su responsabilidad
                                    social corporativa.
                                </p>
                                <p>
                                    Varios años después, el edificio fue amueblado y se produjo la inauguración del Centro
                                    Cultural Banreservas por el licenciado Vicente Bengoa. Desde entonces, la entidad ha
                                    desarrollado un amplio programa de actividades realizadas con el fin de llevar al pueblo
                                    dominicano el conocimiento y valoración de su propia cultura, en intercambio con las
                                    culturas de otros pueblos del mundo.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] rounded-none overflow-hidden"
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/PNG/fachada.jpg"
                                alt="Fachada Centro Cultural Banreservas"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Misión, Visión, Valores */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                <div className="container">
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {/* Misión */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <Card className="p-8 h-full border-0 shadow-lg">
                                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Target className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4">Misión</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Llevar un espacio de conocimiento, deleite y diversificación al pueblo dominicano
                                    acercándolo al arte, la ciencia y la cultura. Todas las actividades llegan al público
                                    general, donde los usuarios pueden disfrutar de exposiciones de artes plásticas,
                                    conciertos, teatro, espacios literarios dinámicos, películas y documentales, charlas,
                                    conferencias, entre otras actividades.
                                </p>
                            </Card>
                        </motion.div>

                        {/* Visión */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Card className="p-8 h-full border-0 shadow-lg">
                                <div className="h-14 w-14 bg-secondary/20 rounded-full flex items-center justify-center mb-6">
                                    <Eye className="h-7 w-7 text-secondary-foreground" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4">Visión</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Ser una institución cultural que, por su dinamismo e influencia, ofrezca respuestas
                                    y programas efectivos para satisfacer las necesidades culturales de la comunidad
                                    nacional en general y de la Ciudad Colonial en particular.
                                </p>
                            </Card>
                        </motion.div>

                        {/* Valores */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <Card className="p-8 h-full border-0 shadow-lg">
                                <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                    <Heart className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4">Valores</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Principios que guían nuestro compromiso con la cultura dominicana
                                </p>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                    {values.map((value, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                            <p className="text-xs text-foreground/80 leading-tight">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Nuestro Edificio */}
            <section className="py-20 bg-primary text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="inline-flex h-20 w-20 bg-white/10 rounded-full items-center justify-center mb-8">
                                <Building2 className="h-10 w-10 text-white" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Nuestro Edificio
                            </h2>
                            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                                El Centro Cultural Banreservas se encuentra en un edificio colonial en la calle
                                Isabel la Católica 202, en la Ciudad Colonial de Santo Domingo, frente al primer
                                Banco de Reservas del país.
                            </p>
                            <div className="inline-block">
                                <div className="h-1 w-24 bg-[#F79523]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Actividades */}
            <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
                <div className="container">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                Nuestra Agenda Cultural
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                Exposiciones de artes plásticas, ciclos de cine dominicano y extranjero, presentaciones
                                teatrales, talleres, conferencias, conversatorios, coloquios, conciertos musicales y
                                puestas en circulación de libros forman parte de nuestra agenda de actividades.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Artes Plásticas</span>
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Cine</span>
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Teatro</span>
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Talleres</span>
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Conferencias</span>
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Música</span>
                                <span className="px-6 py-3 bg-primary text-white rounded-full">Literatura</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
