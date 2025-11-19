export interface Event {
    id: string | number;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    category: 'Concierto' | 'Cine' | 'Taller' | 'Conferencia' | 'Visita Guiada' | 'Otro';
    price: string | number;
    image: string;
    capacity?: number;
    registered?: number;
}

export interface Branch {
    id: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
    image: string;
}

export interface Stat {
    label: string;
    value: string | number;
    change?: string;
    trend?: 'up' | 'down' | 'neutral';
}
