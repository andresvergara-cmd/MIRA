import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2e1b50",
                accent: "#00f5ff",
                glass: "rgba(255, 255, 255, 0.1)",
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'mira-bg': 'radial-gradient(circle at top center, #3d2466 0%, #2e1b50 100%)',
            },
            backdropBlur: {
                xs: "2px",
            },
        },
    },
    plugins: [],
} satisfies Config;
