import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { customTheme } from './assets/styles/theme'
import './assets/styles/global.css'
import App from './App.tsx'
import { Analytics } from '@vercel/analytics/react'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={customTheme}>
      <App />
      <Analytics />
    </ConfigProvider>
  </StrictMode>,
)