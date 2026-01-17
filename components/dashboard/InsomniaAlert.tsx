"use client";
import { useTranslations } from "next-intl";

export default function InsomniaAlert() {
    const t = useTranslations('Dashboard');

    return (
        <div className="w-full glass-card p-10 md:p-12 rounded-[40px] border-l-8 border-accent relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 md:p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-7xl">🌙</span>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1 space-y-4">
                    <h3 className="text-3xl font-black text-accent tracking-tight">{t('insomnia_alert')}</h3>
                    <p className="text-xl text-white/70 leading-relaxed max-w-2xl">{t('insomnia_desc')}</p>
                </div>

                <button className="whitespace-nowrap px-8 py-4 bg-accent/20 hover:bg-accent/40 text-accent rounded-2xl font-black transition-all border border-accent/30 shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                    Analizar Patrones
                </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        </div>
    );
}
