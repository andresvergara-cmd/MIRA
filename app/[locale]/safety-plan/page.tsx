"use client";
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Navbar from '@/components/layout/Navbar';

export default function SafetyPlanConfig() {
    const t = useTranslations('Safety');
    const [contacts, setContacts] = useState<{ name: string; phone: string }[]>([]);
    const [newContact, setNewContact] = useState({ name: '', phone: '' });

    useEffect(() => {
        const saved = localStorage.getItem('mira_safety_contacts');
        if (saved) setContacts(JSON.parse(saved));
    }, []);

    const addContact = () => {
        if (!newContact.name || !newContact.phone) return;
        const updated = [...contacts, newContact];
        setContacts(updated);
        localStorage.setItem('mira_safety_contacts', JSON.stringify(updated));
        setNewContact({ name: '', phone: '' });
    };

    const removeContact = (index: number) => {
        const updated = contacts.filter((_, i) => i !== index);
        setContacts(updated);
        localStorage.setItem('mira_safety_contacts', JSON.stringify(updated));
    };

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
            <Navbar />

            <div className="space-y-4">
                <h1 className="text-4xl font-bold glow-text">{t('title')} - Configuración</h1>
                <p className="text-white/50">Tu plan de seguridad se guarda localmente en este dispositivo por tu privacidad.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contacts Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span>📞</span> {t('tabs.contacts')}
                    </h2>

                    <div className="space-y-4">
                        {contacts.map((c, i) => (
                            <div key={i} className="glass-card p-4 rounded-2xl flex justify-between items-center group">
                                <div>
                                    <p className="font-bold">{c.name}</p>
                                    <p className="text-accent">{c.phone}</p>
                                </div>
                                <button onClick={() => removeContact(i)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card p-6 rounded-3xl space-y-4 border border-white/10">
                        <input
                            placeholder="Nombre del contacto"
                            value={newContact.name}
                            onChange={e => setNewContact({ ...newContact, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                        />
                        <input
                            placeholder="Número de teléfono"
                            value={newContact.phone}
                            onChange={e => setNewContact({ ...newContact, phone: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                        />
                        <button
                            onClick={addContact}
                            className="w-full bg-accent text-primary font-bold py-3 rounded-xl hover:scale-[1.02] transition-transform"
                        >
                            Añadir Contacto
                        </button>
                    </div>
                </div>

                {/* Info Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <span>🛡️</span> Recursos de Ayuda
                    </h2>
                    <div className="glass-card p-6 rounded-3xl space-y-6 border border-white/10">
                        <div className="space-y-2">
                            <p className="font-bold text-red-500 uppercase text-xs tracking-widest">Línea Nacional</p>
                            <p className="text-3xl font-black">911</p>
                        </div>
                        <div className="h-px bg-white/10" />
                        <div className="space-y-4">
                            <p className="text-sm text-white/60">Recuerda que M.I.R.A es una herramienta de apoyo, no un reemplazo de ayuda profesional médica o psiquiátrica.</p>
                            <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl transition-colors">
                                Ver Guía de Primeros Auxilios 🔗
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
