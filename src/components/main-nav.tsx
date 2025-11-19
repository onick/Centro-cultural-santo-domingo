"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Inicio", href: "/" },
    { name: "¿Quiénes Somos?", href: "/about" },
    { name: "Visítanos", href: "/branches" },
    { name: "Actividades", href: "/events" },
    { name: "Información", href: "/info" },
    { name: "Biblioteca Virtual", href: "/library" },
    { name: "Publicaciones", href: "/publications" },
];

export function MainNav() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled || !isHome ? "bg-background/95 backdrop-blur border-b py-2" : "bg-transparent py-6"
            )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/logo-ccb.png"
                        alt="Centro Cultural Banreservas"
                        className="h-12 w-auto"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium tracking-wide uppercase hover:opacity-70 transition-opacity whitespace-nowrap",
                                isScrolled || !isHome ? "text-foreground" : "text-white/90",
                                pathname === item.href && (isScrolled || !isHome) ? "border-b-2 border-primary" : ""
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                            "rounded-none px-6 border-[#F79523] text-[#F79523] hover:bg-[#F79523] hover:text-white transition-colors whitespace-nowrap",
                            isScrolled || !isHome ? "bg-transparent" : "bg-transparent"
                        )}
                        asChild
                    >
                        <Link href="/santiago">
                            Sede Santiago
                        </Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn("xl:hidden", isScrolled || !isHome ? "text-foreground" : "text-white")}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-b p-4 xl:hidden animate-in slide-in-from-top-5">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-serif font-medium p-2 hover:bg-accent",
                                    pathname === item.href ? "text-primary" : "text-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            className="w-full rounded-none border-[#F79523] text-[#F79523] hover:bg-[#F79523] hover:text-white"
                            variant="outline"
                            asChild
                        >
                            <Link href="/santiago" onClick={() => setIsOpen(false)}>
                                Sede Santiago
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
