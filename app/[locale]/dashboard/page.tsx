import { setRequestLocale, getTranslations } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import DashboardClient from '@/components/dashboard/DashboardClient';

export default async function DashboardPage({
    params
}: {
    params: Promise<any>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('Dashboard');

    return (
        <main className="min-h-screen pt-32 pb-20 px-6">
            <Navbar />
            <DashboardClient />

            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        </main>
    );
}
