"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function OnboardingSummary({ onFinish, data }: { onFinish: () => void, data: any }) {
    const t = useTranslations('Onboarding');

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex items-center justify-center px-4 pt-20 pb-10 w-full"
        >
            <div className="relative w-full max-w-[800px]">
                {/* Decorative Background Element */}
                <div className="absolute -top-20 -left-20 size-64 bg-primary/10 blur-[100px] rounded-full"></div>
                <div className="absolute -bottom-20 -right-20 size-64 bg-primary/5 blur-[100px] rounded-full"></div>

                {/* Central Glassmorphism Card */}
                <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col items-center relative z-10">
                    {/* Glowing Cyan Orb */}
                    <div className="mb-10 relative">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="orb-gradient size-32 rounded-full flex items-center justify-center relative z-20"
                        >
                            <span className="material-symbols-outlined text-[#18141e] text-5xl font-light">auto_awesome</span>
                        </motion.div>
                        {/* Orb Ring Decoration */}
                        <div className="absolute inset-0 size-40 -top-4 -left-4 border border-vibrant-cyan/20 rounded-full animate-spin-slow"></div>
                    </div>

                    {/* Title Section */}
                    <div className="text-center mb-10">
                        <h1 className="text-vibrant-cyan text-4xl md:text-5xl font-bold tracking-tighter uppercase cyan-glow-text mb-2">
                            {t('summary.title')}
                        </h1>
                        <div className="h-1 w-24 bg-vibrant-cyan mx-auto rounded-full shadow-[0_0_10px_#00f0ff]"></div>
                    </div>

                    {/* Summary List */}
                    <div className="w-full space-y-0 border-y border-white/10 mb-8">
                        <div className="grid grid-cols-[140px_1fr] py-5 border-b border-white/5 group text-left">
                            <p className="text-vibrant-cyan/60 text-sm uppercase tracking-widest font-black leading-none">{t('summary.name_label')}</p>
                            <p className="text-white text-xl font-bold">{data.name.trim() || 'Usuario MIRA'}</p>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-5 border-b border-white/5 text-left">
                            <p className="text-vibrant-cyan/60 text-sm uppercase tracking-widest font-black leading-none">{t('summary.sources_label')}</p>
                            <div className="flex gap-4 flex-wrap">
                                {data.sources.length > 0 ? (
                                    data.sources.map((source: string) => (
                                        <span key={source} className="flex items-center gap-2 text-white/90 font-bold">
                                            <span className="material-symbols-outlined text-vibrant-cyan scale-90">
                                                {source === 'twitter' ? 'alternate_email' : source === 'instagram' ? 'photo_camera' : 'chat_bubble'}
                                            </span> {source === 'twitter' ? 'X' : source.charAt(0).toUpperCase() + source.slice(1)}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-white/40 italic font-medium uppercase tracking-[0.1em] text-xs">Sin fuentes vinculadas</span>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-[140px_1fr] py-5 text-left">
                            <p className="text-vibrant-cyan/60 text-sm uppercase tracking-widest font-black leading-none">{t('summary.ai_status_label')}</p>
                            <div className="flex items-center gap-3">
                                <span className="text-vibrant-cyan font-black flex items-center gap-3">
                                    <span className="size-3 bg-vibrant-cyan rounded-full animate-pulse shadow-[0_0_15px_#00ffff]"></span>
                                    {t('summary.ai_status_analyzing')}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Empathetic Message */}
                    <div className="max-w-md text-center mb-12">
                        <p className="text-white/90 text-xl font-light leading-relaxed italic opacity-80">
                            "{t('summary.message')}"
                        </p>
                    </div>

                    {/* Primary CTA Button */}
                    <div className="w-full">
                        <button
                            onClick={onFinish}
                            className="w-full h-20 bg-vibrant-cyan hover:shadow-[0_0_50px_rgba(0,255,255,0.5)] text-primary font-black text-2xl rounded-2xl transition-all flex items-center justify-center gap-4 group cursor-pointer active:scale-[0.98] uppercase tracking-widest"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                {t('summary.cta')}
                                <span className="material-symbols-outlined font-bold group-hover:translate-x-2 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Contextual Footer Info */}
                <p className="text-center mt-8 text-white/30 text-xs tracking-[0.2em] uppercase">
                    {t('summary.footer_version')}
                </p>
            </div>
        </motion.div>
    );
}
