import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { supabase } from "@/lib/supabase";

// Función para obtener eventos desde Supabase
async function getEvents() {
    const { data: events, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

    if (error) {
        console.error('Error fetching events:', error);
        return [];
    }

    return events || [];
}

export default async function EventsPage() {
    const events = await getEvents();

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <PageHero
                title="Agenda Cultural"
                description="Explora nuestra selección de eventos diseñados para inspirar y conectar."
                icon={CalendarDays}
                variant="primary"
            />

            <div className="container py-16">
                <div className="grid gap-12">
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b pb-12 last:border-0"
                        >
                            {/* Date Column */}
                            <div className="lg:col-span-2 flex flex-col items-start lg:items-center text-center lg:border-r lg:pr-8">
                                <span className="text-5xl font-serif font-bold text-zinc-900 dark:text-zinc-100">
                                    {new Date(event.date).getDate()}
                                </span>
                                <span className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
                                    {new Date(event.date).toLocaleDateString('es-DO', { month: 'long' })}
                                </span>
                                <span className="text-sm text-muted-foreground mt-1">
                                    {new Date(event.date).getFullYear()}
                                </span>
                            </div>

                            {/* Image Column */}
                            <div className="lg:col-span-4 overflow-hidden aspect-[4/3] lg:aspect-[3/2] relative bg-muted">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={event.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop'}
                                    alt={event.title}
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content Column */}
                            <div className="lg:col-span-6 space-y-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <Badge variant="secondary" className="rounded-none uppercase tracking-wider text-xs">
                                        {event.category}
                                    </Badge>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground uppercase tracking-wider">
                                        <MapPin className="h-3 w-3" /> {event.location}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-serif font-bold group-hover:text-primary transition-colors">
                                    <Link href={`/events/${event.id}`}>
                                        {event.title}
                                    </Link>
                                </h2>

                                <p className="text-muted-foreground leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="flex items-center justify-between pt-4">
                                    <div className="flex items-center gap-2 text-sm font-medium">
                                        <Clock className="h-4 w-4" />
                                        {event.time}
                                    </div>
                                    <Button variant="link" className="p-0 h-auto group/btn" asChild>
                                        <Link href={`/events/${event.id}`}>
                                            Reservar Entrada <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
