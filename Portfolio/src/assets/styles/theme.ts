import type {ThemeConfig} from "antd";
import {  theme } from 'antd';

export const customTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#10b981',
    colorBgBase: '#080d0a',
    colorBgContainer: '#0f1712',
    colorBgElevated: '#17231c',
    colorText: '#f0fdf4',
    colorTextHeading: '#ffffff',
    colorTextSecondary: '#86efac',
    colorBorder: '#1c3326',
    colorBorderSecondary: '#12241a',
    borderRadius: 8,
    fontFamily: `'JetBrains Mono', -apple-system, BlinkMacSystemFont, monospace`,
  },
  components: {
    Card: {
      colorBgContainer: '#0f1712',
      colorBorder: '#1c3326',
      colorHeaderBg: '#0f1712',
      colorTextHeading: '#ffffff',
    },
    Tag: {
      borderRadius: 6,
    },
  },
};