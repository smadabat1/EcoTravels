import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './components/theme-provider';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from "./routeTree.gen";
import './index.css'

const router = createRouter({ routeTree });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='light' storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
