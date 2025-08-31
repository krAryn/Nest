import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from "@clerk/clerk-react"

const CLERK_PUBLISHABLE_KEY = import.meta.env.NEST_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')).render(
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </ClerkProvider>
)
