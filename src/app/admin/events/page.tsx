import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus, MoreHorizontal, Pencil, Trash } from "lucide-react"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Mock data
const events = [
    {
        id: 1,
        title: "Concierto de Jazz Bajo las Estrellas",
        date: "2023-11-25",
        location: "Santo Domingo",
        status: "Activo",
        sold: 145,
        capacity: 200
    },
    {
        id: 2,
        title: "Ciclo de Cine: Clásicos Dominicanos",
        date: "2023-11-28",
        location: "Santiago",
        status: "Activo",
        sold: 45,
        capacity: 100
    },
    {
        id: 3,
        title: "Taller de Pintura para Niños",
        date: "2023-12-02",
        location: "Santo Domingo",
        status: "Borrador",
        sold: 0,
        capacity: 20
    }
]

export default function AdminEventsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Eventos</h1>
                    <p className="text-muted-foreground">
                        Gestiona los eventos de todas las sucursales.
                    </p>
                </div>
                <Link href="/admin/events/new">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Nuevo Evento
                    </Button>
                </Link>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Título</TableHead>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Ubicación</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="text-right">Ventas</TableHead>
                            <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {events.map((event) => (
                            <TableRow key={event.id}>
                                <TableCell className="font-medium">{event.title}</TableCell>
                                <TableCell>{event.date}</TableCell>
                                <TableCell>{event.location}</TableCell>
                                <TableCell>
                                    <Badge variant={event.status === 'Activo' ? 'default' : 'secondary'}>
                                        {event.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    {event.sold} / {event.capacity}
                                </TableCell>
                                <TableCell>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" className="h-8 w-8 p-0">
                                                <span className="sr-only">Open menu</span>
                                                <MoreHorizontal className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                                            <DropdownMenuItem>
                                                <Pencil className="mr-2 h-4 w-4" /> Editar
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="text-red-600">
                                                <Trash className="mr-2 h-4 w-4" /> Eliminar
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
