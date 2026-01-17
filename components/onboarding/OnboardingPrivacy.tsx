"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function OnboardingPrivacy({ onNext }: { onNext: () => void }) {
    const t = useTranslations('Onboarding');

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center max-w-[1200px] mx-auto px-6 py-10 w-full"
        >
            {/* Hero Icon Section */}
            <div className="shield-container mb-12 flex justify-center items-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Glass Layers for Shield */}
                    <div className="absolute inset-0 floating-shield rounded-full"></div>
                    <div className="relative z-10 text-vibrant-cyan scale-[2.5] cyan-glow">
                        <span className="material-symbols-outlined !text-7xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 48" }}>
                            shield_lock
                        </span>
                    </div>
                    {/* Orbital Rings */}
                    <div className="absolute inset-0 border border-vibrant-cyan/20 rounded-full animate-pulse scale-110"></div>
                    <div className="absolute inset-4 border border-white/10 rounded-full"></div>
                </div>
            </div>

            {/* Header Content */}
            <div className="text-center max-w-2xl mb-12">
                <h1 className="text-white text-5xl font-bold leading-tight mb-6 tracking-tight">
                    {t('privacy.title')}
                </h1>
                <p className="text-white/70 text-lg font-light leading-relaxed">
                    {t('privacy.subtitle')}
                </p>
            </div>

            {/* Glassmorphism Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
                {/* Card 1 */}
                <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 group hover:border-vibrant-cyan/50 transition-all duration-300">
                    <div className="size-12 rounded-xl bg-vibrant-cyan/10 flex items-center justify-center text-vibrant-cyan group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">key</span>
                    </div>
                    <h3 className="text-xl font-bold">{t('privacy.encryption_title')}</h3>
                    <p className="text-white/60 leading-normal text-left">
                        {t('privacy.encryption_desc')}
                    </p>
                </div>
                {/* Card 2 */}
                <div className="glass-card p-8 rounded-2xl flex flex-col items-start gap-4 group hover:border-vibrant-cyan/50 transition-all duration-300">
                    <div className="size-12 rounded-xl bg-vibrant-cyan/10 flex items-center justify-center text-vibrant-cyan group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined">data_usage</span>
                    </div>
                    <h3 className="text-xl font-bold">{t('privacy.control_title')}</h3>
                    <p className="text-white/60 leading-normal text-left">
                        {t('privacy.control_desc')}
                    </p>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="w-full max-w-md flex flex-col items-center gap-8">
                {/* Progress Indicator - 2 of 5 */}
                <div className="flex flex-col items-center gap-3 w-full">
                    <div className="flex items-center gap-2.5">
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-8 bg-vibrant-cyan rounded-full cyan-glow"></div>
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                        <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                    </div>
                    <span className="text-vibrant-cyan text-sm tracking-widest uppercase font-black">
                        Paso 2 de 5: Seguridad
                    </span>
                </div>
                {/* Navigation Button */}
                <button
                    onClick={onNext}
                    className="group relative flex w-full h-16 items-center justify-center overflow-hidden rounded-2xl bg-vibrant-cyan text-primary font-black text-xl hover:shadow-[0_0_30px_rgba(0,245,255,0.4)] active:scale-[0.98] transition-all cursor-pointer"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {t('next')}
                        <span className="material-symbols-outlined font-bold">arrow_forward</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
            </div>
        </motion.div>
    );
}
