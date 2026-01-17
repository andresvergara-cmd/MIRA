"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSelector from '../ui/LanguageSelector';

import { useState } from 'react';

export default function Navbar() {
    const t = useTranslations('Navbar');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4">
            <div className="max-w-7xl mx-auto glass px-6 md:px-8 py-3 rounded-2xl flex items-center justify-between relative">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter glow-text z-50">
                    M.I.R.A
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-white/80"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className="material-symbols-outlined text-2xl">
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/chat" className="text-sm font-medium hover:text-accent transition-colors">
                        {t('chat')}
                    </Link>
                    <Link href="/dashboard" className="text-sm font-medium hover:text-accent transition-colors">
                        {t('dashboard')}
                    </Link>
                    <Link href="/perfil" className="text-sm font-medium hover:text-accent transition-colors">
                        {t('profile')}
                    </Link>
                    <LanguageSelector />
                    <button className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-all border border-white/10 shadow-lg">
                        {t('login')}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 p-6 glass rounded-2xl flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
                        <Link
                            href="/chat"
                            className="text-lg font-medium border-b border-white/5 pb-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('chat')}
                        </Link>
                        <Link
                            href="/dashboard"
                            className="text-lg font-medium border-b border-white/5 pb-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('dashboard')}
                        </Link>
                        <Link
                            href="/perfil"
                            className="text-lg font-medium border-b border-white/5 pb-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t('profile')}
                        </Link>
                        <div className="flex items-center justify-between py-2">
                            <span className="text-sm text-white/40 uppercase tracking-widest">{t('language')}</span>
                            <LanguageSelector />
                        </div>
                        <button className="w-full py-4 bg-accent text-primary rounded-xl font-bold text-center">
                            {t('login')}
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}
