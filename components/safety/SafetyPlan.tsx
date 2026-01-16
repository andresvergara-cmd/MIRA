"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import BreathingExercise from './BreathingExercise';

interface SafetyPlanProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SafetyPlan({ isOpen, onClose }: SafetyPlanProps) {
    const t = useTranslations('Safety');
    const [activeTab, setActiveTab] = useState<'contacts' | 'breathing' | 'help'>('breathing');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={onClose} />

            {/* Modal */}
            <div className="relative w-full max-w-2xl bg-[#1a0f2e] border border-red-500/30 rounded-[40px] shadow-[0_0_100px_rgba(220,38,38,0.2)] overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-8 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-black text-red-500 tracking-tight">{t('title')}</h2>
                        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-white/50">✕</button>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-2 p-1 bg-white/5 rounded-2xl">
                        {['breathing', 'contacts', 'help'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? 'bg-red-600 text-white shadow-lg' : 'text-white/40 hover:text-white/60'
                                    }`}
                            >
                                {t(`tabs.${tab}`)}
                            </button>
                        ))}
                    </div>

                    <div className="min-h-[400px] flex flex-col justify-center">
                        {activeTab === 'breathing' && <BreathingExercise />}

                        {activeTab === 'contacts' && (
                            <div className="space-y-4 p-4">
                                <div className="glass-card p-4 rounded-2xl flex justify-between items-center border-l-4 border-red-500">
                                    <div>
                                        <p className="font-bold">Emergencias Nacionales</p>
                                        <p className="text-2xl text-red-500 font-black">911</p>
                                    </div>
                                    <button className="bg-red-600 p-4 rounded-full">📞</button>
                                </div>
                                <p className="text-white/40 text-center text-sm pt-8">
                                    {t('contacts_notice')}
                                </p>
                            </div>
                        )}

                        {activeTab === 'help' && (
                            <div className="space-y-4 p-4 text-center">
                                <h3 className="text-xl font-bold">{t('crisis_lines')}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="glass-card p-4 rounded-2xl text-left">
                                        <p className="font-bold">Línea de la Esperanza</p>
                                        <p className="text-accent">106</p>
                                    </div>
                                    <div className="glass-card p-4 rounded-2xl text-left">
                                        <p className="font-bold">Cruz Roja</p>
                                        <p className="text-accent">132</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-red-600/10 p-4 text-center">
                    <p className="text-xs text-red-400 font-bold uppercase tracking-widest">{t('warning')}</p>
                </div>
            </div>
        </div>
    );
}
