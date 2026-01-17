"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import MessageBubble from "./MessageBubble";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
    role: 'user' | 'assistant';
    content: string;
    mood?: string;
}

export default function ChatInterface() {
    const locale = useLocale();
    const t = useTranslations('Chat');
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: t('welcome') }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    locale: locale
                })
            });

            const data = await response.json();

            const botMessage: Message = {
                role: 'assistant',
                content: data.user_response,
                mood: data.analysis_layer?.risk_level === 'HIGH' ? '#ff4b4b' : '#00f5ff'
            };

            if (data.analysis_layer?.risk_level === 'HIGH') {
                if (typeof window !== 'undefined' && (window as any).triggerJITAI) {
                    (window as any).triggerJITAI();
                }
            }

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col h-[75vh] w-full max-w-4xl mx-auto glass-card rounded-[40px] overflow-hidden shadow-2xl relative z-10"
        >
            {/* Messages Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-10 scroll-smooth space-y-2"
            >
                <AnimatePresence mode="popLayout">
                    {messages.map((msg, i) => (
                        <MessageBubble key={i} message={msg} />
                    ))}
                </AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex justify-start mb-6 w-full opacity-60 italic text-sm text-accent"
                    >
                        {t('sending')}
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-8 md:p-10 bg-white/5 border-t border-white/10 backdrop-blur-md">
                <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                        placeholder={t('placeholder')}
                        className="w-full bg-white/20 border border-white/20 rounded-2xl px-8 py-5 pr-20 focus:outline-none focus:border-accent transition-all placeholder:text-white/30 text-lg shadow-2xl backdrop-blur-xl"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-4 bg-accent text-primary rounded-xl hover:scale-105 active:scale-95 disabled:opacity-30 disabled:grayscale disabled:scale-100 transition-all shadow-[0_0_15px_rgba(0,245,255,0.4)]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-184,56a16,16,0,0,0-2.31,30.27L102.19,134,124.73,207a16,16,0,0,0,30.27,2.31l56-184A16,16,0,0,0,227.32,28.68ZM151.04,204.1l-19.12-61.63L184,90.4a8,8,0,0,0-11.31-11.31L120.53,131.1,51.9,104.1l158.41-48.16Z"></path>
                        </svg>
                    </button>
                </form>
                <div className="mt-6 text-[11px] text-center text-white/30 uppercase tracking-[0.3em] font-bold">
                    {t('anonymous_tag')}
                </div>
            </div>
        </motion.div>
    );
}
