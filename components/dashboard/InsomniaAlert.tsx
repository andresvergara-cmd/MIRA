"use client";
import { useTranslations } from "next-intl";

export default function InsomniaAlert() {
    const t = useTranslations('Dashboard');

    return (
        <div className="w-full glass-card p-8 rounded-3xl border-l-4 border-accent relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-6xl">🌙</span>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-2">
                    <h3 className="text-2xl font-bold text-accent">{t('insomnia_alert')}</h3>
                    <p className="text-white/70">{t('insomnia_desc')}</p>
                </div>

                <button className="px-6 py-3 bg-accent/20 hover:bg-accent/30 text-accent rounded-xl font-bold transition-all border border-accent/30">
                    Analizar Patrones
                </button>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
        </div>
    );
}
