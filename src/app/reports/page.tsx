import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Ticket, Calendar, TrendingUp } from "lucide-react";

const stats = [
    {
        label: "Total Visitantes (Mes)",
        value: "2,543",
        change: "+12.5%",
        icon: Users,
    },
    {
        label: "Entradas Vendidas",
        value: "1,205",
        change: "+8.2%",
        icon: Ticket,
    },
    {
        label: "Eventos Realizados",
        value: "14",
        change: "+2",
        icon: Calendar,
    },
    {
        label: "Ingresos Totales",
        value: "RD$ 450,200",
        change: "+15.3%",
        icon: TrendingUp,
    },
];

const recentSales = [
    {
        user: "Ana García",
        email: "ana.garcia@email.com",
        amount: "RD$ 1,500",
        event: "Concierto de Jazz",
        date: "Hace 2 horas"
    },
    {
        user: "Carlos Rodriguez",
        email: "carlos.r@email.com",
        amount: "RD$ 500",
        event: "Taller de Pintura",
        date: "Hace 4 horas"
    },
    {
        user: "Maria Lopez",
        email: "maria.l@email.com",
        amount: "Gratis",
        event: "Cine: Clásicos",
        date: "Hace 5 horas"
    },
    {
        user: "Juan Perez",
        email: "juan.p@email.com",
        amount: "RD$ 3,000",
        event: "Concierto de Jazz (x2)",
        date: "Hace 1 día"
    },
];

export default function ReportsPage() {
    return (
        <div className="container py-10">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Panel de Reportes</h1>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                {stats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.label}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">
                                <span className="text-green-500 font-medium">{stat.change}</span> vs mes anterior
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Chart Placeholder */}
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Resumen de Asistencia</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md border border-dashed">
                            <p className="text-muted-foreground text-sm">Gráfico de asistencia semanal (Requiere integración de datos)</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Recent Sales */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {recentSales.map((sale, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none">{sale.user}</p>
                                        <p className="text-xs text-muted-foreground">
                                            {sale.event}
                                        </p>
                                    </div>
                                    <div className="ml-auto font-medium text-sm">
                                        {sale.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
