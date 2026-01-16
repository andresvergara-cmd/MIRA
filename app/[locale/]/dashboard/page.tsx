import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import DashboardStats from '@/components/dashboard/DashboardStats';
import InsomniaAlert from '@/components/dashboard/InsomniaAlert';
import { useTranslations } from 'next-intl';

export default async function DashboardPage({
    params
}: {
    params: Promise<any>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="min-h-screen pt-28 pb-10 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <Navbar />

            <div className="w-full mb-12 space-y-2">
                <h1 className="text-4xl font-bold glow-text">Social Watch Dashboard</h1>
                <p className="text-white/50">Monitoreo pasivo y detección de patrones de bienestar.</p>
            </div>

            <div className="w-full space-y-8">
                <DashboardStats />
                <InsomniaAlert />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="glass-card p-8 rounded-3xl h-64 flex flex-col items-center justify-center text-center">
                        <p className="text-white/30 italic">Gráfico de Tendencia de Bienestar (Próximamente)</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl h-64 flex flex-col items-center justify-center text-center">
                        <p className="text-white/30 italic">Mapa de Calor de Actividad (Próximamente)</p>
                    </div>
                </div>
            </div>

            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        </main>
    );
}
