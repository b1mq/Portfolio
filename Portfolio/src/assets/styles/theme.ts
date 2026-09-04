import {theme} from "antd";
import type{ ThemeConfig } from "antd";

export const CustomTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        colorPrimary: '#6366f1',
        colorSuccess: '#10b981',
        colorWarning: '#f59e0b',
        colorError: '#ef4444',
        colorInfo: '#3b82f6',
        colorBgBase: '#0b0f19',
        colorBgContainer: '#111827',
        colorBgElevated: '#1f2937',


        colorText: '#f9fafb',
        colorTextSecondary: '#9ca3af',
        colorBorder: '#374151',
        colorBorderSecondary: '#1f2937',


        borderRadius: 8,
        fontFamily: `'JetBrains Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
    },
    components: {
        Button: {
            colorPrimary: "#6366f1",
            fontWeight: 600,
            borderRadius: 8,
            controlHeight: 40,
        },
        Card: {
            colorBgContainer: '#111827',
            colorBorder: '#1f2937',
            borderRadiusLG: 12,
        },
        Tag: {
            borderRadius: 6,
            fontSize: 12,
        },
        Typography: {
            colorTextHeading: '#ffffff',
        },
        Menu: {
            colorBgContainer: 'transparent',
            colorItemBgSelected: '#1e1b4b',
            colorItemTextSelected: '#818cf8',
        },


    }
}