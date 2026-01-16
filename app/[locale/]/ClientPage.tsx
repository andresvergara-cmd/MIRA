"use client";
import { useTranslations } from 'next-intl';
import Soundwave from '@/components/ui/Soundwave';

export default function ClientPage() {
    const t = useTranslations('Home');

    const features = [
        { title: t('features.privacy'), icon: "🛡️" },
        { title: t('features.support'), icon: "🌙" },
        { title: t('features.empathy'), icon: "🧠" }
    ];

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <section className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                <div className="space-y-6 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight glow-text leading-tight">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="relative group cursor-pointer">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150 group-hover:bg-accent/30 transition-all duration-700" />
                    <Soundwave />
                </div>

                <button className="px-10 py-5 bg-accent text-primary rounded-full text-xl font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,245,255,0.4)]">
                    {t('cta')}
                </button>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-24">
                    {features.map((feature, i) => (
                        <div key={i} className="glass-card p-10 rounded-3xl flex flex-col items-center gap-4 text-center">
                            <span className="text-4xl">{feature.icon}</span>
                            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        </main>
    );
}
