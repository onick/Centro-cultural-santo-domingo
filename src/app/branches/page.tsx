"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight, Building2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";

const branches = [
    {
        id: "santo-domingo",
        name: "Sede Principal - Santo Domingo",
        address: "Calle Las Damas, Zona Colonial, Santo Domingo",
        phone: "(809) 555-0100",
        email: "info.sd@centrocultural.do",
        hours: "Lun - Dom: 9:00 AM - 8:00 PM",
        image: "/fachada-santo-domingo.jpg",
        description: "Ubicada en la primera calle del Nuevo Mundo, nuestra sede principal es un testimonio vivo de la historia colonial. Un espacio donde el pasado dialoga con las expresiones artísticas contemporáneas."
    },
    {
        id: "santiago",
        name: "Centro Cultural Santiago Zona Norte",
        address: "Calle del Sol, Centro Histórico, Santiago de los Caballeros",
        phone: "(809) 555-0200",
        email: "info.sti@centrocultural.do",
        hours: "Mar - Dom: 10:00 AM - 9:00 PM",
        image: "/santiago.jpg",
        description: "En el corazón del Cibao, nuestra sede en Santiago se erige como un faro de cultura y modernidad, albergando las manifestaciones artísticas más vibrantes de la región norte."
    }
];

export default function BranchesPage() {
    return (
        <div className="min-h-screen bg-background">
            <PageHero
                title="Nuestras Sedes"
                description="Espacios arquitectónicos únicos dedicados a la preservación y difusión del arte y la cultura dominicana."
                icon={Building2}
                variant="primary"
            />

            <div className="container py-20">

                <div className="space-y-24">
                    {branches.map((branch, index) => (
                        <div key={branch.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="w-full lg:w-1/2 aspect-[4/3] relative overflow-hidden bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={branch.image}
                                    alt={branch.name}
                                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                />
                                {/* Elegant vignette gradient overlay - darker towards edges */}
                                <div
                                    className="absolute inset-0"
                                    style={{ background: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.6) 100%)' }}
                                />
                            </div>

                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{branch.name}</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {branch.description}
                                    </p>
                                </div>

                                <div className="space-y-4 border-t border-b py-8">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-5 w-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium uppercase tracking-wide text-xs text-muted-foreground mb-1">Dirección</p>
                                            <p className="text-lg">{branch.address}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-4">
                                            <Clock className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <p className="font-medium uppercase tracking-wide text-xs text-muted-foreground mb-1">Horario</p>
                                                <p>{branch.hours}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Phone className="h-5 w-5 text-primary mt-1" />
                                            <div>
                                                <p className="font-medium uppercase tracking-wide text-xs text-muted-foreground mb-1">Contacto</p>
                                                <p>{branch.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Button className="rounded-none h-12 px-8 text-lg" variant="outline">
                                    Ver Cartelera de esta Sede <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
