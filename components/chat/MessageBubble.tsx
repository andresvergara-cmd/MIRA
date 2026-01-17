"use client";
import { motion } from 'framer-motion';

interface Message {
    role: 'user' | 'assistant';
    content: string;
    mood?: string;
}

export default function MessageBubble({ message }: { message: Message }) {
    const isAssistant = message.role === 'assistant';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} mb-6 w-full`}
        >
            <div
                className={`max-w-[85%] px-7 py-5 rounded-[28px] ${isAssistant
                        ? 'glass text-white shadow-xl'
                        : 'bg-accent text-primary font-bold shadow-lg shadow-accent/10'
                    } ${isAssistant ? 'rounded-tl-none border-l-2' : 'rounded-tr-none'}`}
                style={isAssistant && message.mood ? { borderColor: message.mood } : {}}
            >
                <p className="text-[17px] leading-[1.6] whitespace-pre-wrap tracking-tight">
                    {message.content}
                </p>
            </div>
        </motion.div>
    );
}
