"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import MessageBubble from "./MessageBubble";

interface Message {
    role: 'user' | 'assistant';
    content: string;
    mood?: string;
}

export default function ChatInterface() {
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
                    locale: window.location.pathname.split('/')[1] || 'es'
                })
            });

            const data = await response.json();

            const botMessage: Message = {
                role: 'assistant',
                content: data.user_response,
                mood: data.analysis_layer?.risk_level === 'HIGH' ? '#ff4b4b' : '#00f5ff'
            };

            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error('Fetch error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-[70vh] w-full max-w-4xl mx-auto glass-card rounded-3xl overflow-hidden shadow-2xl">
            {/* Messages Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-8 scroll-smooth"
            >
                {messages.map((msg, i) => (
                    <MessageBubble key={i} message={msg} />
                ))}
                {isLoading && (
                    <div className="flex justify-start mb-6 w-full opacity-60 italic text-sm">
                        {t('sending')}
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white/5 border-t border-white/10">
                <form onSubmit={handleSubmit} className="relative">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        disabled={isLoading}
                        placeholder={t('placeholder')}
                        className="w-full bg-white/5 border border-white/20 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:border-accent transition-colors placeholder:text-white/30"
                    />
                    <button
                        type="submit"
                        disabled={isLoading || !input.trim()}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-accent hover:scale-110 disabled:opacity-50 disabled:scale-100 transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-184,56a16,16,0,0,0-2.31,30.27L102.19,134,124.73,207a16,16,0,0,0,30.27,2.31l56-184A16,16,0,0,0,227.32,28.68ZM151.04,204.1l-19.12-61.63L184,90.4a8,8,0,0,0-11.31-11.31L120.53,131.1,51.9,104.1l158.41-48.16Z"></path>
                        </svg>
                    </button>
                </form>
                <div className="mt-3 text-[10px] text-center text-white/40 uppercase tracking-widest font-bold">
                    {t('anonymous_tag')}
                </div>
            </div>
        </div>
    );
}
