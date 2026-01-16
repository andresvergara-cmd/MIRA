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

    setRequestLocale(locale);
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <head>
                <title>M.I.R.A - Introspección Mental y Agente de Respuesta</title>
            </head>
            <body className="antialiased">
                <NextIntlClientProvider messages={messages}>
                    <SafetyProvider>
                        {children}
                    </SafetyProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
