"use client";
import React, { useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

interface SafetyPlanProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SafetyPlan({ isOpen, onClose }: SafetyPlanProps) {
    const t = useTranslations('Safety');
    const scrollRef = useRef<HTMLDivElement>(null);
    const [contacts, setContacts] = React.useState<{ name: string; phone: string }[]>([]);
    const [showPersonalContacts, setShowPersonalContacts] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            const saved = localStorage.getItem('mira_safety_contacts');
            if (saved) setContacts(JSON.parse(saved));
        }
    }, [isOpen]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const reasons = [
        { id: 'family', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK-IQLl6AQ0JwCZik8m1NtYKuPJcEMuq0h_xZJC-CClwYiLD5JC0N6NtWjbX9ex6UUiWdgH0PXYp2Shm-cScCo6uvjwm8yW8w8A0GcGNYtU9arSCYRVSuHrW82muSOCKv9CbmCyf5tCf-pOQkW4TwfSTvpOI1NO4UaF4Kr4RjBSVKz9E_ldNbrJ-lf0tWUlhCiucXCHRn91fEXpLoeca8OFZvOEwOp6w30tR-uM0oLtektH2XuoU23nhNbJNjvI-J9AfcGDg2AIeY' },
        { id: 'pet', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOS2dO1U-yB3ey8eFPM_FVginAU9XGxm-TMakaeyO-uAoxZo4SmF5aObobZj7rBxjUVW5_LyB5mkoFKPFSstPtsWnWU6CEOi-xYsKnSRXIdGdTCYLajOhL5AEarObFDjqduYvAXMHlq9zBbDqYOZ3N0CfFe3v7szjWG0cMzx6RBEFfDlVQDJbZCAH7F8ZYWRLq7pqiQMbUzYn6PyuRff6btDQ_UofoJvBWHAT3qdj9jW4R0KGl7r3m9OBfq5eeIVzAH9pe1Ict-TM' },
        { id: 'nature', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGorsowmI7_JzQ6s4M-MquyiX3DsfVvgD2y2yP3IdmPh9bFRr7G8lh9jAE597_4A6CNicNcyjEqUCVssxrt9GEeAnpmRc9J8otM_4-UnNYFFsK-MMHuD749hju2SMZ9FBKAOMOJ55OFOYf-AlMeDqZdr-T9fCQoaq87j3Z8jr48HsH-5ARpIy-YDduS9sQZXhL9ubxjiC6e4RVi3-gYe-9VFbN317Uzj4b-LDh-heE5it08YFoZU1uSaCVnbJmK1nhEiAQJLYpRqA' },
        { id: 'friends', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9_Jr1-MRWl0ZNbFIwWU5p2PljayVDJet1K8CyGquT2Cbu3eVYCreKptb6_Hh7AIFJboVTihKMiC6QOjB_hGAVYVPDdLM_nncLK8q9VXhyoyCd7rYERkDSj_Har0c7fsLg0NFJiPi6058TlhPETWkfBtPQgoTa9gF7SrPHi5qgZPGzmrKn8ocW3rrNO45x5sSLpZdqk0TSsgNqLJTVHvFT602du2aqDzvwvCrSXDskR6LCHAFycN5_-XsP92SluOLaHJh-b-Z49Bo' }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                    {/* Deep Blur Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-primary/60 backdrop-blur-[20px]"
                        onClick={onClose}
                    />

                    {/* Main Glass Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-[1000px] h-[90vh] glass-container rounded-[24px] overflow-hidden flex flex-col shadow-2xl z-10"
                    >
                        {/* Alert Banner */}
                        <div className="bg-soft-orange/20 border-b border-soft-orange/30 px-6 py-3 flex items-center gap-3">
                            <span className="material-symbols-outlined text-soft-orange text-lg">info</span>
                            <p className="text-soft-orange text-sm font-bold tracking-wide uppercase">{t('alert_banner')}</p>
                        </div>

                        {/* Top Header */}
                        <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                            <div className="flex flex-col gap-1 text-left">
                                <div className="flex items-center gap-3">
                                    <div className="size-6 text-vibrant-cyan">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                            <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h1 className="text-white text-3xl font-black tracking-tight">{t('title')}</h1>
                                </div>
                                <p className="text-white/60 text-lg">{t('subtitle')}</p>
                            </div>
                            <button onClick={onClose} className="size-12 rounded-full glass-container flex items-center justify-center text-white hover:bg-white/20 transition-all">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </header>

                        <div className="flex-1 overflow-y-auto p-8 hide-scrollbar">
                            {/* Section 1: Razones para vivir */}
                            <section className="mb-12">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-white text-2xl font-bold tracking-tight text-left">{t('reasons_to_live')}</h2>
                                    <div className="flex gap-2">
                                        <button onClick={() => scroll('left')} className="size-10 rounded-full glass-container flex items-center justify-center text-white/50 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                                        </button>
                                        <button onClick={() => scroll('right')} className="size-10 rounded-full glass-container flex items-center justify-center text-white/50 hover:text-white transition-colors">
                                            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Carousel */}
                                <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x">
                                    {reasons.map((reason) => (
                                        <div key={reason.id} className="min-w-[280px] flex flex-col gap-4 group snap-start">
                                            <div className="aspect-[4/5] rounded-2xl bg-cover bg-center overflow-hidden relative shadow-lg" style={{ backgroundImage: `url('${reason.image}')` }}>
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                                <div className="absolute bottom-4 left-4 right-4 text-left">
                                                    <p className="text-white font-bold text-lg">{t(`reasons.${reason.id}`)}</p>
                                                    <p className="text-white/70 text-sm">{t(`reasons.${reason.id}_desc`)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Section 2: Contactos de Emergencia */}
                            <section>
                                <h2 className="text-white text-2xl font-bold tracking-tight mb-6 text-left">{t('emergency_contacts')}</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Primary Action: Crisis Hotline */}
                                    <a
                                        href="tel:106"
                                        className="flex items-center justify-between p-6 bg-vibrant-cyan rounded-2xl cyan-glow group active:scale-95 transition-all text-left decoration-none"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="size-14 bg-black/10 rounded-full flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary text-3xl font-bold">phone_in_talk</span>
                                            </div>
                                            <div>
                                                <p className="text-primary font-black text-xl leading-none mb-1">{t('call_crisis')}</p>
                                                <p className="text-primary/70 font-bold uppercase tracking-widest text-xs">{t('confidential')}</p>
                                            </div>
                                        </div>
                                        <span className="material-symbols-outlined text-primary text-2xl group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
                                    </a>

                                    {/* Secondary Action: Support Network */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setShowPersonalContacts(!showPersonalContacts)}
                                            className="w-full flex items-center justify-between p-6 glass-container border-vibrant-cyan/40 rounded-2xl group active:scale-95 transition-all text-left"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="size-14 bg-vibrant-cyan/10 rounded-full flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-vibrant-cyan text-3xl">groups</span>
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-xl leading-none mb-1">{t('contact_support')}</p>
                                                    <p className="text-white/50 uppercase tracking-widest text-xs font-medium">{t('trusted_contacts')}</p>
                                                </div>
                                            </div>
                                            <span className={`material-symbols-outlined text-vibrant-cyan text-2xl transition-transform ${showPersonalContacts ? 'rotate-90' : ''}`}>arrow_forward_ios</span>
                                        </button>

                                        <AnimatePresence>
                                            {showPersonalContacts && contacts.length > 0 && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="mt-4 space-y-3"
                                                >
                                                    {contacts.map((c, i) => (
                                                        <a
                                                            key={i}
                                                            href={`tel:${c.phone}`}
                                                            className="flex items-center justify-between p-4 glass-card rounded-xl hover:bg-white/5 transition-all"
                                                        >
                                                            <div className="text-left">
                                                                <p className="font-bold text-white">{c.name}</p>
                                                                <p className="text-vibrant-cyan text-sm">{c.phone}</p>
                                                            </div>
                                                            <span className="material-symbols-outlined text-vibrant-cyan">call</span>
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Footer: Immediate Warning */}
                        <footer className="p-8 border-t border-white/10 flex items-center justify-center">
                            <a href="tel:911" className="flex items-center gap-2 text-soft-orange hover:scale-105 transition-transform decoration-none">
                                <span className="material-symbols-outlined text-xl">warning</span>
                                <p className="font-bold text-sm tracking-wide uppercase">{t('immediate_warning')}</p>
                            </a>
                        </footer>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
