"use client";
import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function OnboardingConfig({ onNext }: { onNext: () => void }) {
    const t = useTranslations('Onboarding');
    const [notifications, setNotifications] = React.useState(true);
    const [analysis, setAnalysis] = React.useState(true);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1 flex items-center justify-center p-6 w-full"
        >
            <div className="glass-card w-full max-w-[640px] rounded-3xl p-10 flex flex-col items-center">
                {/* Progress Stepper - 3 of 5 */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-4 h-4 rounded-full bg-vibrant-cyan cyan-glow"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>

                {/* Headline */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black tracking-tight mb-4">{t('config.title')}</h1>
                    <p className="text-white/60 text-lg max-w-md mx-auto font-light leading-relaxed">
                        {t('config.subtitle')}
                    </p>
                </div>

                {/* Permission List */}
                <div className="w-full space-y-4 mb-10">
                    {/* Permission 1 */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-vibrant-cyan/20 transition-all group">
                        <div className="flex items-center gap-5">
                            <div className="size-14 flex items-center justify-center rounded-xl bg-vibrant-cyan/10 text-vibrant-cyan border border-vibrant-cyan/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">notifications_active</span>
                            </div>
                            <div className="flex flex-col text-left">
                                <h3 className="font-bold text-xl leading-none mb-2">{t('config.notifications_title')}</h3>
                                <p className="text-white/50 text-sm leading-snug">{t('config.notifications_desc')}</p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <label className={`relative flex h-[36px] w-[64px] cursor-pointer items-center rounded-full border-2 transition-all ${notifications ? 'bg-vibrant-cyan/30 border-vibrant-cyan/50 justify-end' : 'bg-white/5 border-white/10 p-1'}`}>
                                <div className="h-full aspect-square rounded-full bg-white shadow-xl transition-transform"></div>
                                <input
                                    type="checkbox"
                                    className="invisible absolute"
                                    checked={notifications}
                                    onChange={() => setNotifications(!notifications)}
                                />
                            </label>
                        </div>
                    </div>

                    {/* Permission 2 */}
                    <div className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-vibrant-cyan/20 transition-all group">
                        <div className="flex items-center gap-5">
                            <div className="size-14 flex items-center justify-center rounded-xl bg-vibrant-cyan/10 text-vibrant-cyan border border-vibrant-cyan/20 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl">psychology</span>
                            </div>
                            <div className="flex flex-col text-left">
                                <h3 className="font-bold text-xl leading-none mb-2">{t('config.analysis_title')}</h3>
                                <p className="text-white/50 text-sm leading-snug">{t('config.analysis_desc')}</p>
                            </div>
                        </div>
                        <div className="shrink-0">
                            <label className={`relative flex h-[36px] w-[64px] cursor-pointer items-center rounded-full border-2 transition-all ${analysis ? 'bg-vibrant-cyan/30 border-vibrant-cyan/50 justify-end' : 'bg-white/5 border-white/10 p-1'}`}>
                                <div className="h-full aspect-square rounded-full bg-white shadow-xl transition-transform"></div>
                                <input
                                    type="checkbox"
                                    className="invisible absolute"
                                    checked={analysis}
                                    onChange={() => setAnalysis(!analysis)}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Progress Indicator */}
                <div className="w-full mb-10">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-black text-white/40 uppercase tracking-[0.2em]">Paso 3 de 5: Personalización</span>
                        <span className="text-xs font-black text-vibrant-cyan uppercase tracking-[0.2em]">60%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
                        <div className="h-full bg-vibrant-cyan cyan-glow w-[60%] rounded-full transition-all duration-1000"></div>
                    </div>
                    <p className="text-center text-white/40 text-xs mt-4 font-medium uppercase tracking-widest">{t('config.progress_desc')}</p>
                </div>

                {/* CTA Button */}
                <button
                    onClick={onNext}
                    className="w-full bg-vibrant-cyan hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] text-primary font-black text-xl py-5 rounded-2xl transition-all flex items-center justify-center gap-3 group cursor-pointer active:scale-[0.98]"
                >
                    <span>{t('config.cta')}</span>
                    <span className="material-symbols-outlined font-bold transition-transform group-hover:translate-x-2">arrow_forward</span>
                </button>
            </div>
        </motion.div>
    );
}
