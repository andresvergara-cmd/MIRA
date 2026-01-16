"use client";

interface Message {
    role: 'user' | 'assistant';
    content: string;
    mood?: string;
}

export default function MessageBubble({ message }: { message: Message }) {
    const isAssistant = message.role === 'assistant';

    return (
        <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'} mb-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500`}>
            <div
                className={`max-w-[80%] px-6 py-4 rounded-3xl ${isAssistant
                        ? 'glass text-white'
                        : 'bg-accent text-primary font-medium'
                    } ${isAssistant ? 'rounded-tl-none' : 'rounded-tr-none'}`}
                style={isAssistant && message.mood ? { borderColor: message.mood } : {}}
            >
                <p className="text-base leading-relaxed whitespace-pre-wrap">
                    {message.content}
                </p>
            </div>
        </div>
    );
}
