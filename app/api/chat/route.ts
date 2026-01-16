import { NextResponse } from 'next/server';
import { getGeminiResponse } from '@/lib/gemini';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    let locale = 'es';
    try {
        const body = await req.json();
        locale = body.locale || 'es';
        const messages = body.messages;

        // 1. Get real response from Gemini
        const geminiData = await getGeminiResponse(messages, locale);

        // 2. Social Watch & Persistence (Phase 3)
        const now = new Date();
        const currentHour = now.getHours();

        // Detect "Digital Insomnia" pattern (2 AM - 5 AM)
        const isDigitalInsomnia = currentHour >= 2 && currentHour <= 5;

        // Save interaction to DB
        await prisma.interaction.create({
            data: {
                locale,
                content: messages[messages.length - 1].content,
                mood: geminiData.analysis_layer?.mood,
                riskLevel: geminiData.analysis_layer?.risk_level,
                analysis: geminiData.analysis_layer,
                createdAt: now,
            }
        });

        // 3. Return JSON response
        return NextResponse.json(geminiData);
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({
            error: 'Internal Server Error',
            user_response: locale === 'es'
                ? "Lo siento, tuve un problema al procesar tu mensaje. ¿Podrías repetirlo?"
                : "I'm sorry, I had trouble processing your message. Could you repeat it?"
        }, { status: 500 });
    }
}
