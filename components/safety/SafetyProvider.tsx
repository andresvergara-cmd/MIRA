"use client";
import { useState } from 'react';
import SOSButton from '@/components/ui/SOSButton';
import SafetyPlan from '@/components/safety/SafetyPlan';

export default function SafetyProvider({ children }: { children: React.ReactNode }) {
    const [isSafetyOpen, setIsSafetyOpen] = useState(false);

    // Global event listener for JITAI trigger from API
    if (typeof window !== 'undefined') {
        (window as any).triggerJITAI = () => setIsSafetyOpen(true);
    }

    return (
        <>
            {children}
            <SOSButton onClick={() => setIsSafetyOpen(true)} />
            <SafetyPlan isOpen={isSafetyOpen} onClose={() => setIsSafetyOpen(false)} />
        </>
    );
}
