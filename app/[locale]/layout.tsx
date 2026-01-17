import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import SafetyProvider from '@/components/safety/SafetyProvider';
import "./globals.css";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<any>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Enable static rendering
    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <title>M.I.R.A - Introspección Mental y Agente de Respuesta</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap" />
            </head>
            <body className="antialiased">
                <div id="debug-locale" style={{ display: 'none' }} data-locale={locale}></div>
                <div className="mesh-gradient" />
                <NextIntlClientProvider messages={messages} locale={locale}>
                    <SafetyProvider>
                        {children}
                    </SafetyProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
