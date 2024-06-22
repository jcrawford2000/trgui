import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './index.css'
import { createRoot } from 'react-dom/client'
import WebSocket from 'ws'

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App className="bg-neutral"/>
    </React.StrictMode>
);
