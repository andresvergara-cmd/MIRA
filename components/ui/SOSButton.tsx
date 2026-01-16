"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function SOSButton({ onClick }: { onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-red-600 text-white rounded-full shadow-[0_0_20px_rgba(220,38,38,0.5)] flex items-center justify-center text-2xl font-black hover:scale-110 active:scale-95 transition-all animate-pulse hover:animate-none group"
            aria-label="S.O.S"
        >
            SOS
            <div className="absolute inset-0 rounded-full border-4 border-red-600 animate-ping opacity-25 pointer-events-none" />
        </button>
    );
}
