"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock, Share2, ArrowLeft, Ticket, Facebook, Twitter, Link as LinkIcon, Check } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function EventDetailsPage() {
    const params = useParams();
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [copied, setCopied] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);

    useEffect(() => {
        async function fetchEvent() {
            const { data, error } = await supabase
                .from('events')
                .select('*')
                .eq('id', params.id)
                .single();

            if (error) {
                console.error('Error fetching event:', error);
            } else {
                setEvent(data);
            }
            setLoading(false);
        }

        fetchEvent();
    }, [params.id]);

    // Get current URL for sharing
    const eventUrl = typeof window !== 'undefined' ? window.location.href : '';
    const eventTitle = event ? encodeURIComponent(event.title) : '';

    const shareLinks = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(eventUrl)}&text=${eventTitle}`,
        whatsapp: `https://wa.me/?text=${eventTitle}%20${encodeURIComponent(eventUrl)}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(eventUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground">Cargando evento...</p>
                </div>
            </div>
        );
    }

    if (!event) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2">Evento no encontrado</h1>
                    <Link href="/events" className="text-primary hover:underline">
                        Volver a la agenda
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Image */}
            <div className="h-[50vh] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={event.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop'}
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
                                {event.full_description && (
                                    <p className="mt-4">{event.full_description}</p>
                                )}
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
                                    <p className="font-medium text-green-600">
                                        {event.capacity - event.registered_count > 0 ? 'Cupos disponibles' : 'Agotado'}
                                    </p>
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
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start hover:bg-transparent hover:underline px-0 mb-3"
                                    onClick={() => setShowShareMenu(!showShareMenu)}
                                >
                                    <Share2 className="mr-2 h-4 w-4" />
                                    Compartir este evento
                                </Button>

                                {showShareMenu && (
                                    <div className="space-y-2 pl-6 animate-in slide-in-from-top-2">
                                        <a
                                            href={shareLinks.facebook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                                        >
                                            <Facebook className="h-4 w-4" />
                                            Facebook
                                        </a>
                                        <a
                                            href={shareLinks.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                                        >
                                            <Twitter className="h-4 w-4" />
                                            Twitter
                                        </a>
                                        <a
                                            href={shareLinks.whatsapp}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                                        >
                                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                            WhatsApp
                                        </a>
                                        <button
                                            onClick={copyToClipboard}
                                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left"
                                        >
                                            {copied ? <Check className="h-4 w-4 text-green-600" /> : <LinkIcon className="h-4 w-4" />}
                                            {copied ? "¡Copiado!" : "Copiar enlace"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
