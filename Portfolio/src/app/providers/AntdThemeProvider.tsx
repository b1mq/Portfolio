import type { ReactNode } from 'react';
import React from 'react';
import { ConfigProvider, App as AntdApp } from 'antd';
import deDE from 'antd/locale/de_DE'; 
import { CustomTheme } from '../../assets/styles/theme';

interface ThemeProviderProps {
    children:ReactNode;
}
export const ThemeProvider:React.FC<ThemeProviderProps> = ({children}) => {
    return (
        <ConfigProvider theme={CustomTheme} locale={deDE} componentSize="middle">
            <AntdApp>
                {children}
            </AntdApp>
        </ConfigProvider>
    )
}