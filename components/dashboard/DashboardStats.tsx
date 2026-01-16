"use client";
import { useTranslations } from "next-intl";

interface StatProps {
    label: string;
    value: string | number;
    icon: string;
    color?: string;
}

function StatCard({ label, value, icon, color = "accent" }: StatProps) {
    return (
        <div className="glass-card p-6 rounded-2xl flex items-center gap-6">
            <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center text-2xl`}>
                {icon}
            </div>
            <div>
                <p className="text-sm text-white/50 uppercase tracking-wider">{label}</p>
                <p className="text-2xl font-bold">{value}</p>
            </div>
        </div>
    );
}

export default function DashboardStats() {
    const t = useTranslations('Dashboard.stats');

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <StatCard label={t('total')} value="128" icon="💬" />
            <StatCard label={t('risk')} value="2" icon="⚠️" color="red-500" />
            <StatCard label={t('safe')} value="98%" icon="🛡️" color="green-400" />
        </div>
    );
}
