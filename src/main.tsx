import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { MoviesApp } from './MoviesApp'
import './styles.css'
import { lightTheme } from './themes'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={client}>
            <ReactQueryDevtools />

            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <MoviesApp />
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
)
