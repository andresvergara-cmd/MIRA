"use client";
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function BreathingExercise() {
    const [stage, setStage] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
    const [timer, setTimer] = useState(4);
    const t = useTranslations('Safety.breathing');

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev === 1) {
                    if (stage === 'inhale') { setStage('hold'); return 4; }
                    if (stage === 'hold') { setStage('exhale'); return 4; }
                    setStage('inhale');
                    return 4;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, [stage]);

    return (
        <div className="flex flex-col items-center justify-center p-8 space-y-8">
            <div className="relative flex items-center justify-center">
                {/* Animated Circle */}
                <div
                    className={`w-40 h-40 rounded-full bg-accent/20 border-2 border-accent transition-all duration-[4000ms] ease-in-out ${stage === 'inhale' ? 'scale-150' : stage === 'exhale' ? 'scale-100' : 'scale-150 opacity-80'
                        }`}
                />
                <div className="absolute text-2xl font-bold text-accent">
                    {timer}
                </div>
            </div>

            <div className="text-center space-y-2">
                <h4 className="text-xl font-bold uppercase tracking-widest text-accent">
                    {t(stage)}
                </h4>
                <p className="text-white/60 text-sm">Sigue el ritmo de la luz</p>
            </div>
        </div>
    );
}
