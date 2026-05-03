import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Figtree', ...defaultTheme.fontFamily.sans],
                "subtitle-medium": ["Inter"],
                "body-base": ["Inter"],
                "display-bold": ["Inter"],
                "header-semibold": ["Inter"],
                "table-header": ["Inter"],
                "label-sm": ["Inter"]
            },
            colors: {
                "secondary": "#565e74",
                "on-primary": "#ffffff",
                "on-primary-fixed": "#0f0069",
                "on-secondary": "#ffffff",
                "on-primary-fixed-variant": "#3323cc",
                "on-surface": "#1b1b24",
                "secondary-container": "#dae2fd",
                "border-subtle": "#E2E8F0",
                "tertiary-container": "#a44100",
                "inverse-on-surface": "#f3effc",
                "on-tertiary-fixed-variant": "#7b2f00",
                "on-tertiary-container": "#ffd2be",
                "surface-dim": "#dcd8e5",
                "on-primary-container": "#dad7ff",
                "text-primary": "#0F172A",
                "surface-variant": "#e4e1ee",
                "error-container": "#ffdad6",
                "outline-variant": "#c7c4d8",
                "on-secondary-container": "#5c647a",
                "primary": "#3525cd",
                "primary-fixed-dim": "#c3c0ff",
                "warning-hold": "#F59E0B",
                "surface-bright": "#fcf8ff",
                "on-background": "#1b1b24",
                "secondary-fixed-dim": "#bec6e0",
                "surface-container-low": "#f5f2ff",
                "background": "#fcf8ff",
                "canvas-bg": "#F8FAFC",
                "danger-error": "#F43F5E",
                "on-secondary-fixed-variant": "#3f465c",
                "surface": "#fcf8ff",
                "success-profit": "#10B981",
                "tertiary": "#7e3000",
                "on-secondary-fixed": "#131b2e",
                "ai-accent": "#EEF2FF",
                "on-tertiary": "#ffffff",
                "surface-container-lowest": "#ffffff",
                "on-surface-variant": "#464555",
                "surface-container": "#f0ecf9",
                "text-secondary": "#64748B",
                "surface-bg": "#FFFFFF",
                "surface-tint": "#4d44e3",
                "outline": "#777587",
                "secondary-fixed": "#dae2fd",
                "tertiary-fixed": "#ffdbcc",
                "inverse-surface": "#302f39",
                "error": "#ba1a1a",
                "primary-fixed": "#e2dfff",
                "surface-container-high": "#eae6f4",
                "on-error-container": "#93000a",
                "primary-container": "#4f46e5",
                "on-tertiary-fixed": "#351000",
                "on-error": "#ffffff",
                "surface-container-highest": "#e4e1ee",
                "inverse-primary": "#c3c0ff",
                "tertiary-fixed-dim": "#ffb695"
            },
            spacing: {
                "header-height": "64px",
                "sidebar-width": "256px",
                "stack-sm": "12px",
                "gutter-md": "24px",
                "canvas-padding": "32px"
            },
            fontSize: {
                "subtitle-medium": ["14px", { "lineHeight": "20px", "fontWeight": "500" }],
                "body-base": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
                "display-bold": ["20px", { "lineHeight": "28px", "fontWeight": "700" }],
                "header-semibold": ["18px", { "lineHeight": "24px", "fontWeight": "600" }],
                "table-header": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600" }],
                "label-sm": ["12px", { "lineHeight": "16px", "fontWeight": "500" }]
            }
        },
    },

    plugins: [forms],
};
