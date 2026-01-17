"use client";
import { motion } from 'framer-motion';

export default function MoodGraph() {
    const points = [40, 60, 45, 90, 65, 80, 50]; // Static mock data
    const pathData = points.map((p, i) => `${i * 50},${100 - p}`).join(' L ');

    return (
        <div className="w-full h-48 relative overflow-hidden flex items-center justify-center">
            <svg viewBox="0 0 300 100" className="w-full h-full">
                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#00f5ff" />
                    </linearGradient>
                    <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#00f5ff" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* Animated Line */}
                <motion.path
                    d={`M ${pathData}`}
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />

                {/* Fill Area */}
                <motion.path
                    d={`M 0,100 L ${pathData} L 300,100 Z`}
                    fill="url(#fillGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                />

                {/* Interactivity points */}
                {points.map((p, i) => (
                    <motion.circle
                        key={i}
                        cx={i * 50}
                        cy={100 - p}
                        r="4"
                        fill="#00f5ff"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.5 + i * 0.1 }}
                        className="drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]"
                    />
                ))}
            </svg>
        </div>
    );
}
