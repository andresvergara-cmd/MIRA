"use client";
import { motion } from 'framer-motion';

export default function Soundwave() {
    const bars = Array.from({ length: 16 }, (_, i) => i);

    return (
        <div className="flex items-end justify-center gap-1.5 h-32 px-10 py-6 glass rounded-full relative overflow-hidden">
            {/* Glow effect inside */}
            <div className="absolute inset-0 bg-accent/5 blur-xl pointer-events-none" />

            {bars.map((i) => (
                <motion.div
                    key={i}
                    className="w-1.5 bg-gradient-to-t from-accent to-white rounded-full"
                    animate={{
                        height: [
                            "20%",
                            `${Math.random() * 60 + 40}%`,
                            `${Math.random() * 30 + 20}%`,
                            `${Math.random() * 70 + 30}%`,
                            "20%"
                        ],
                        opacity: [0.3, 1, 0.5, 1, 0.3],
                    }}
                    transition={{
                        duration: 1.5 + Math.random(),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.05
                    }}
                />
            ))}
        </div>
    );
}
