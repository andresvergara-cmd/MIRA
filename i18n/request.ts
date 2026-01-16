import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from './request'; // This is a placeholder, usually it's just a simple config

export default getRequestConfig(async ({ locale }) => {
    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
