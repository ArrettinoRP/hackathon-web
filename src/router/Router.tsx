import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { TopDevelopers } from '../pages/TopDevelopers';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-developers" element={<TopDevelopers />} />
        </Routes>
    );
};
