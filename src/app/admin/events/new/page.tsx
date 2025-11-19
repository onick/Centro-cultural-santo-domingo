import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewEventPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link href="/admin/events" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al listado
                </Link>
                <h1 className="text-3xl font-bold tracking-tight">Crear Nuevo Evento</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Detalles del Evento</CardTitle>
                    <CardDescription>
                        Completa la información para publicar un nuevo evento.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="title">Título del Evento</Label>
                        <Input id="title" placeholder="Ej. Concierto de Verano" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Descripción</Label>
                        <Textarea id="description" placeholder="Describe el evento..." className="min-h-[100px]" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="date">Fecha</Label>
                            <Input id="date" type="date" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="time">Hora</Label>
                            <Input id="time" type="time" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="branch">Sucursal</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar sede" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="sd">Santo Domingo</SelectItem>
                                    <SelectItem value="sti">Santiago</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="category">Categoría</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccionar categoría" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="concert">Concierto</SelectItem>
                                    <SelectItem value="cinema">Cine</SelectItem>
                                    <SelectItem value="workshop">Taller</SelectItem>
                                    <SelectItem value="conference">Conferencia</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="capacity">Capacidad (Personas)</Label>
                            <Input id="capacity" type="number" placeholder="100" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="image">Imagen de Portada (URL)</Label>
                        <Input id="image" placeholder="https://..." />
                        <p className="text-xs text-muted-foreground">
                            * En el futuro integraremos subida de archivos.
                        </p>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-4">
                    <Button variant="outline" asChild>
                        <Link href="/admin/events">Cancelar</Link>
                    </Button>
                    <Button>Crear Evento</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
