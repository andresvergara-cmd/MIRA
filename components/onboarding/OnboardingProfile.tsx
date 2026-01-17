"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function OnboardingProfile({ onNext, onDataChange, data }: { onNext: () => void, onDataChange: (data: any) => void, data: any }) {
    const t = useTranslations('Onboarding');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 flex flex-col items-center justify-center px-4 py-12 md:py-20 w-full"
        >
            <div className="w-full max-w-[640px] flex flex-col gap-10">
                {/* PageHeading */}
                <div className="text-center md:text-left">
                    <h1 className="text-white text-5xl font-black leading-tight tracking-[-0.033em] mb-4 font-display">
                        {t('profile.title')}
                    </h1>
                    <p className="text-white/60 text-lg font-light max-w-[480px]">
                        {t('profile.subtitle')}
                    </p>
                </div>

                {/* Input Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                        <label className="flex flex-col gap-3">
                            <span className="text-white/80 text-sm font-medium pl-2 uppercase tracking-widest text-left">{t('profile.name_label')}</span>
                            <input
                                className="glass-input h-14 px-6 text-white placeholder:text-white/30 text-base"
                                placeholder={t('profile.name_placeholder')}
                                type="text"
                                value={data.name}
                                onChange={(e) => onDataChange({ name: e.target.value })}
                            />
                        </label>
                    </div>
                    <div className="md:col-span-1">
                        <label className="flex flex-col gap-3">
                            <span className="text-white/80 text-sm font-medium pl-2 uppercase tracking-widest text-left">{t('profile.age_label')}</span>
                            <input
                                className="glass-input h-14 px-6 text-white placeholder:text-white/30 text-base"
                                placeholder={t('profile.age_placeholder')}
                                type="number"
                                value={data.age}
                                onChange={(e) => onDataChange({ age: e.target.value })}
                            />
                        </label>
                    </div>
                </div>

                {/* SectionHeader */}
                <div className="pt-4 border-t border-white/5">
                    <h2 className="text-white text-2xl font-bold tracking-tight mb-8 text-left">{t('profile.sources_title')}</h2>
                    {/* Social Buttons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <button
                            className={`glass-card flex flex-col items-center justify-center p-8 gap-4 text-center group cursor-pointer transition-all ${data.sources.includes('twitter') ? 'border-vibrant-cyan ring-1 ring-vibrant-cyan/30' : ''}`}
                            onClick={() => {
                                const newSources = data.sources.includes('twitter')
                                    ? data.sources.filter((s: string) => s !== 'twitter')
                                    : [...data.sources, 'twitter'];
                                onDataChange({ sources: newSources });
                            }}
                        >
                            <span className="material-symbols-outlined text-4xl text-vibrant-cyan group-hover:scale-110 transition-transform">alternate_email</span>
                            <span className="text-sm font-semibold tracking-wide uppercase">X (Twitter)</span>
                        </button>
                        <button
                            className={`glass-card flex flex-col items-center justify-center p-8 gap-4 text-center group cursor-pointer transition-all ${data.sources.includes('instagram') ? 'border-vibrant-cyan ring-1 ring-vibrant-cyan/30' : ''}`}
                            onClick={() => {
                                const newSources = data.sources.includes('instagram')
                                    ? data.sources.filter((s: string) => s !== 'instagram')
                                    : [...data.sources, 'instagram'];
                                onDataChange({ sources: newSources });
                            }}
                        >
                            <span className="material-symbols-outlined text-4xl text-vibrant-cyan group-hover:scale-110 transition-transform">photo_camera</span>
                            <span className="text-sm font-semibold tracking-wide uppercase">Instagram</span>
                        </button>
                        <button
                            className={`glass-card flex flex-col items-center justify-center p-8 gap-4 text-center group cursor-pointer transition-all ${data.sources.includes('whatsapp') ? 'border-vibrant-cyan ring-1 ring-vibrant-cyan/30' : ''}`}
                            onClick={() => {
                                const newSources = data.sources.includes('whatsapp')
                                    ? data.sources.filter((s: string) => s !== 'whatsapp')
                                    : [...data.sources, 'whatsapp'];
                                onDataChange({ sources: newSources });
                            }}
                        >
                            <span className="material-symbols-outlined text-4xl text-vibrant-cyan group-hover:scale-110 transition-transform">chat_bubble</span>
                            <span className="text-sm font-semibold tracking-wide uppercase">WhatsApp</span>
                        </button>
                    </div>
                </div>

                {/* Final CTA */}
                <div className="pt-10 flex flex-col items-center gap-10">
                    {/* Progress Indicator - 4 of 5 */}
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="flex items-center gap-3">
                            <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                            <div className="h-2 w-10 bg-vibrant-cyan rounded-full cyan-glow"></div>
                            <div className="h-2 w-2 bg-white/20 rounded-full"></div>
                        </div>
                        <span className="text-vibrant-cyan text-sm tracking-[0.3em] uppercase font-black">
                            Paso 4 de 5: Perfil
                        </span>
                    </div>

                    <button
                        onClick={onNext}
                        className="w-full bg-vibrant-cyan hover:shadow-[0_0_40px_rgba(0,255,255,0.4)] text-primary font-black text-2xl py-6 rounded-2xl transition-all uppercase tracking-widest cursor-pointer active:scale-[0.98] flex items-center justify-center gap-4 group"
                    >
                        <span>{t('profile.cta')}</span>
                        <span className="material-symbols-outlined font-bold group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </button>
                    <p className="text-center text-white/30 text-xs uppercase tracking-[0.2em] font-bold px-10 leading-loose">
                        {t('profile.footer_note')}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
