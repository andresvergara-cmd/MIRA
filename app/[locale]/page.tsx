import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import ClientPage from './ClientPage';

export default async function Home({
    params
}: {
    params: Promise<any>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Navbar />
            <ClientPage />
        </>
    );
}
