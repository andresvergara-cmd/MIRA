"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { AnimatePresence } from 'framer-motion';
import OnboardingWelcome from '@/components/onboarding/OnboardingWelcome';
import OnboardingPrivacy from '@/components/onboarding/OnboardingPrivacy';
import OnboardingConfig from '@/components/onboarding/OnboardingConfig';
import OnboardingProfile from '@/components/onboarding/OnboardingProfile';
import OnboardingSummary from '@/components/onboarding/OnboardingSummary';

export default function OnboardingPage() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState({
        name: '',
        age: '',
        sources: [] as string[]
    });

    const t = useTranslations('Onboarding');
    const locale = useLocale();
    const router = useRouter();

    const handleNext = () => setStep(step + 1);
    const handleSkip = () => router.push(`/${locale}/dashboard`);
    const handleFinish = () => router.push(`/${locale}/dashboard`);

    const updateUserData = (newData: Partial<typeof userData>) => {
        setUserData(prev => ({ ...prev, ...newData }));
    };

    return (
        <div className="bg-[#0f0720] min-h-screen flex flex-col text-white overflow-hidden relative">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            {/* Ambient Gradients - Global for Onboarding */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 blur-[120px] rounded-full -z-10"></div>
            </div>

            {/* Top Navigation Bar */}
            <header className="w-full flex items-center justify-between px-10 py-6 absolute top-0 z-50">
                <div className="flex items-center gap-3">
                    <div className="size-8 flex items-center justify-center bg-vibrant-cyan/20 rounded-lg text-vibrant-cyan">
                        <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <h2 className="text-xl font-bold tracking-tight text-white font-display">M.I.R.A.</h2>
                </div>
                {step < 5 && (
                    <button
                        onClick={handleSkip}
                        className="text-sm font-bold text-white/80 hover:text-vibrant-cyan transition-all cursor-pointer bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
                    >
                        {t('skip')}
                    </button>
                )}
            </header>

            <main className="flex-1 flex flex-col relative z-20">
                <AnimatePresence mode="wait">
                    {step === 1 && <OnboardingWelcome key="welcome" onNext={handleNext} />}
                    {step === 2 && <OnboardingPrivacy key="privacy" onNext={handleNext} />}
                    {step === 3 && <OnboardingConfig key="config" onNext={handleNext} />}
                    {step === 4 && (
                        <OnboardingProfile
                            key="profile"
                            onNext={handleNext}
                            onDataChange={updateUserData}
                            data={userData}
                        />
                    )}
                    {step === 5 && (
                        <OnboardingSummary
                            key="summary"
                            onFinish={handleFinish}
                            data={userData}
                        />
                    )}
                </AnimatePresence>
            </main>

            {/* Visual Accents */}
            <div className="fixed bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-vibrant-cyan/5 blur-[100px] rounded-full pointer-events-none"></div>

            {/* Footer Decoration */}
            {step > 1 && (
                <footer className="px-10 py-6 text-center z-50">
                    <p className="text-white/30 text-xs uppercase tracking-[0.2em]">Tecnología de Insights Seguros v2.4</p>
                </footer>
            )}
        </div>
    );
}
