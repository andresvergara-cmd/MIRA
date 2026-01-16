"use client";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSelector from '../ui/LanguageSelector';

export default function Navbar() {
    const t = useTranslations('Navbar');

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-2xl">
                <Link href="/" className="text-2xl font-bold tracking-tighter glow-text">
                    M.I.R.A
                </Link>

                <div className="flex items-center gap-8">
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
                    <button className="px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-bold transition-all border border-white/10">
                        {t('login')}
                    </button>
                </div>
            </div>
        </nav>
    );
}
