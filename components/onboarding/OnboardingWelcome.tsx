"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function OnboardingWelcome({ onNext }: { onNext: () => void }) {
    const t = useTranslations('Onboarding');

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col items-center justify-center relative px-6 py-20"
        >
            {/* Background Ambient Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Central M.I.R.A. Orb */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mira-orb-container mb-12 relative z-10 group"
            >
                <div className="mira-orb-glow"></div>
                <div className="mira-orb"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="w-48 h-48 border border-vibrant-cyan/20 rounded-full animate-ping pointer-events-none"></div>
                </div>
            </motion.div>

            {/* Glassmorphism Content Card */}
            <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="glass-card max-w-[540px] w-full p-10 rounded-3xl flex flex-col items-center text-center relative z-20"
            >
                <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4 font-display">
                    {t('welcome.title')} <span className="text-vibrant-cyan">M.I.R.A.</span>
                </h1>
                <p className="text-[#B0B0C0] text-lg font-light leading-relaxed max-w-[400px] mb-10">
                    {t('welcome.subtitle')}
                </p>
                <div className="w-full max-w-[320px]">
                    <button
                        onClick={onNext}
                        className="bg-vibrant-cyan text-primary h-[64px] w-full rounded-[24px] flex items-center justify-center gap-3 text-lg font-black group cursor-pointer hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <span>{t('welcome.cta')}</span>
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                </div>
            </motion.div>

            {/* Progress Indicator - 1 of 5 */}
            <div className="absolute bottom-12 flex gap-3 z-20 items-center">
                <div className="h-2 w-8 bg-vibrant-cyan rounded-full cyan-glow"></div>
                <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                <div className="h-2 w-2 bg-white/20 rounded-full"></div>
            </div>
        </motion.div>
    );
}
