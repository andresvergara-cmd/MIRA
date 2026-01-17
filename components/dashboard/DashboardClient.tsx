"use client";
import { motion } from 'framer-motion';
import MoodGraph from '@/components/dashboard/MoodGraph';
import DashboardStats from '@/components/dashboard/DashboardStats';
import InsomniaAlert from '@/components/dashboard/InsomniaAlert';
import { useTranslations } from 'next-intl';

export default function DashboardClient() {
    const t = useTranslations('Dashboard');
    return (
        <div className="max-w-7xl mx-auto space-y-12">
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl font-black tracking-tight glow-text"
            >
                {t('title')}
            </motion.h1>

            <DashboardStats />
            <InsomniaAlert />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-[40px] space-y-6">
                    <h3 className="text-xl font-bold">{t('mood_trend')}</h3>
                    <MoodGraph />
                </div>

                <div className="glass-card p-8 rounded-[40px] flex flex-col items-center justify-center space-y-6">
                    <h3 className="text-xl font-bold text-center w-full">{t('activity')}</h3>
                    <div className="flex gap-2 h-20 items-end">
                        {[...Array(24)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 10, opacity: 0.1 }}
                                animate={{
                                    height: [10, Math.random() * 40 + 10, 10],
                                    opacity: [0.2, 0.8, 0.2]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2 + Math.random() * 2,
                                    delay: i * 0.1
                                }}
                                className="w-2 bg-accent rounded-full"
                            />
                        ))}
                    </div>
                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold">Pulso de Interacción 24h</p>
                </div>
            </div>
        </div>
    );
}
