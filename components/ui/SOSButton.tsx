"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SOSButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-soft-orange text-primary rounded-full shadow-[0_0_20px_rgba(255,159,104,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-pulse group overflow-hidden"
            aria-label="Emergencia S.O.S"
        >
            <span className="material-symbols-outlined text-2xl font-bold">emergency</span>
            <div className="absolute inset-0 rounded-full border-4 border-soft-orange animate-ping opacity-20 pointer-events-none" />

            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
        </button>
    );
}
