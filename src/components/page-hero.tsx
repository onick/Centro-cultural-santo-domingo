"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeroProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    variant?: "primary" | "secondary";
}

export function PageHero({ title, description, icon: Icon, variant = "primary" }: PageHeroProps) {
    const bgClass = variant === "primary"
        ? "bg-gradient-to-br from-primary via-primary to-primary/80"
        : "bg-gradient-to-br from-secondary/20 to-secondary/5";

    const textClass = variant === "primary" ? "text-white" : "text-foreground";

    return (
        <section className={`relative py-32 ${bgClass} overflow-hidden`}>
            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    {Icon && (
                        <div className={`inline-flex h-20 w-20 ${variant === "primary" ? "bg-white/10" : "bg-primary/10"} rounded-full items-center justify-center mb-8`}>
                            <Icon className={`h-10 w-10 ${variant === "primary" ? "text-white" : "text-primary"}`} />
                        </div>
                    )}
                    <h1 className={`text-5xl md:text-7xl font-serif font-bold mb-6 ${textClass}`}>
                        {title}
                    </h1>
                    <p className={`text-xl md:text-2xl ${variant === "primary" ? "text-white/90" : "text-muted-foreground"} leading-relaxed`}>
                        {description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
