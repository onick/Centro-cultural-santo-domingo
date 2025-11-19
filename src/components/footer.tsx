import Link from "next/link";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-white">
            {/* Main Footer Content */}
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand & Description */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/logo-ccb-footer.png"
                                alt="Centro Cultural Banreservas"
                                className="h-16 w-auto"
                            />
                        </div>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Donde el arte y la cultura se expresan. Espacio dedicado a preservar y difundir nuestra identidad, historia y valores culturales.
                        </p>

                        {/* Social Media */}
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">General</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                                    ¿Quiénes Somos?
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-white/70 hover:text-white transition-colors">
                                    Actividades
                                </Link>
                            </li>
                            <li>
                                <Link href="/library" className="text-white/70 hover:text-white transition-colors">
                                    Biblioteca Virtual
                                </Link>
                            </li>
                            <li>
                                <Link href="/publications" className="text-white/70 hover:text-white transition-colors">
                                    Publicaciones
                                </Link>
                            </li>
                            <li>
                                <Link href="/info" className="text-white/70 hover:text-white transition-colors">
                                    Información General
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Visit */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Visítanos</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/branches" className="text-white/70 hover:text-white transition-colors">
                                    Nuestras Sedes
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" className="text-white/70 hover:text-white transition-colors">
                                    Reserva tu Visita
                                </Link>
                            </li>
                            <li>
                                <Link href="/info" className="text-white/70 hover:text-white transition-colors">
                                    Horarios y Tarifas
                                </Link>
                            </li>
                            <li>
                                <Link href="/info" className="text-white/70 hover:text-white transition-colors">
                                    Preguntas Frecuentes
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif font-bold text-lg mb-6">Contáctanos</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#F79523] mt-0.5 flex-shrink-0" />
                                <div className="text-white/70">
                                    <p className="font-medium text-white mb-1">Sede Principal</p>
                                    <p className="text-sm">Calle Las Damas, Zona Colonial<br />Santo Domingo, República Dominicana</p>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#F79523] flex-shrink-0" />
                                <a href="tel:+18095550100" className="text-white/70 hover:text-white transition-colors">
                                    (809) 555-0100
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#F79523] flex-shrink-0" />
                                <a href="mailto:info@centrocultural.do" className="text-white/70 hover:text-white transition-colors">
                                    info@centrocultural.do
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        <p>
                            © {currentYear} Centro Cultural Banreservas. Todos los derechos reservados.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <Link href="/privacy" className="hover:text-white transition-colors">
                                Políticas de Privacidad
                            </Link>
                            <Link href="/terms" className="hover:text-white transition-colors">
                                Términos y Condiciones
                            </Link>
                            <Link href="/cookies" className="hover:text-white transition-colors">
                                Políticas de Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
