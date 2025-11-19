import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock, Share2, ArrowLeft, Ticket } from "lucide-react";
import Link from "next/link";

// Mock data fetcher function
async function getEvent(id: string) {
    return {
        id,
        title: "Concierto de Jazz Bajo las Estrellas",
        description: "Una noche mágica con los mejores exponentes del Jazz local e internacional. Disfruta de una velada inolvidable bajo el cielo estrellado de nuestra ciudad, acompañado de buena música y un ambiente inigualable. Contaremos con la presencia del cuarteto de Jazz de Santo Domingo y artistas invitados sorpresa.",
        date: "2023-11-25",
        time: "20:00",
        location: "Jardín Principal, Santo Domingo",
        category: "Concierto",
        price: "RD$ 1,500",
        image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop",
        organizer: "Centro Cultural",
        capacity: 200,
        registered: 145
    };
}

export default async function EventDetailsPage({ params }: { params: { id: string } }) {
    const event = await getEvent(params.id);

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Image */}
            <div className="h-[50vh] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-background to-transparent h-32" />
            </div>

            <div className="container -mt-20 relative z-30">
                <Link href="/events" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver a la Agenda
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="bg-background border p-8 md:p-12 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Badge variant="secondary" className="rounded-none uppercase tracking-wider px-3 py-1">
                                    {event.category}
                                </Badge>
                                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                                    Organizado por {event.organizer}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                                {event.title}
                            </h1>

                            <div className="flex flex-wrap gap-8 py-8 border-t border-b mb-8">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Fecha</p>
                                        <p className="font-medium">
                                            {new Date(event.date).toLocaleDateString('es-DO', { weekday: 'long', day: 'numeric', month: 'long' })}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Hora</p>
                                        <p className="font-medium">{event.time}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">Ubicación</p>
                                        <p className="font-medium">{event.location}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="prose prose-lg max-w-none text-muted-foreground font-light leading-relaxed">
                                <p>{event.description}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-zinc-50 dark:bg-zinc-900 p-8 border sticky top-24">
                            <h3 className="font-serif font-bold text-2xl mb-6">Asistir al Evento</h3>

                            <div className="flex justify-between items-end mb-8">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Costo de Entrada</p>
                                    <p className="text-3xl font-bold text-primary">Gratis</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-muted-foreground mb-1">Disponibilidad</p>
                                    <p className="font-medium text-green-600">Cupos disponibles</p>
                                </div>
                            </div>

                            <Button className="w-full h-12 text-lg rounded-none mb-4">
                                <Ticket className="mr-2 h-5 w-5" />
                                Reservar Cupo
                            </Button>

                            <p className="text-xs text-center text-muted-foreground mb-6">
                                Reserva necesaria para control de aforo.
                            </p>

                            <div className="border-t pt-6">
                                <Button variant="ghost" className="w-full justify-start hover:bg-transparent hover:underline px-0">
                                    <Share2 className="mr-2 h-4 w-4" />
                                    Compartir este evento
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
