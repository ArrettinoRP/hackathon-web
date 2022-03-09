import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';
import { Header } from './Layout';
import './app.css';

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="body_container">
                <Router />
            </div>
        </BrowserRouter>
    );
};
