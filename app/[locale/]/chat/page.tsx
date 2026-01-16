import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import ChatInterface from '@/components/chat/ChatInterface';

export default async function ChatPage({
    params
}: {
    params: Promise<any>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <main className="min-h-screen pt-28 pb-10 px-6 flex flex-col items-center">
            <Navbar />

            <div className="w-full max-w-4xl mb-8 flex flex-col items-center text-center space-y-4">
                <h2 className="text-3xl font-bold glow-text">Sentinel Assistant</h2>
                <div className="h-1 w-20 bg-accent rounded-full opacity-50" />
            </div>

            <ChatInterface />

            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
        </main>
    );
}
