"use client";
import { useTranslations } from 'next-intl';
import Soundwave from '@/components/ui/Soundwave';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function ClientPage() {
    const t = useTranslations('Home');

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const features = [
        { title: t('features.privacy'), icon: "🛡️" },
        { title: t('features.support'), icon: "🌙" },
        { title: t('features.empathy'), icon: "🧠" }
    ];

    return (
        <motion.main
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen pt-32 pb-20 px-6 overflow-hidden"
        >
            <section className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                <motion.div variants={itemVariants} className="space-y-6 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-black tracking-tight glow-text leading-[1.1] pb-2">
                        {t('title')}
                    </h1>
                    <p className="text-xl md:text-3xl text-white/60 font-light max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="relative group cursor-pointer py-10"
                >
                    <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full scale-150 group-hover:bg-accent/40 transition-all duration-1000" />
                    <Soundwave />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <button className="px-12 py-6 bg-accent text-primary rounded-full text-2xl font-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_50px_rgba(0,245,255,0.4)] relative overflow-hidden group">
                        <span className="relative z-10">{t('cta')}</span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </button>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-24"
                >
                    {features.map((feature, i) => (
                        <div key={i} className="glass-card p-12 rounded-[40px] flex flex-col items-center gap-6 text-center group">
                            <span className="text-5xl transform group-hover:scale-125 transition-transform duration-500">{feature.icon}</span>
                            <h3 className="text-2xl font-bold text-white tracking-tight">{feature.title}</h3>
                        </div>
                    ))}
                </motion.div>
            </section>
        </motion.main>
    );
}
