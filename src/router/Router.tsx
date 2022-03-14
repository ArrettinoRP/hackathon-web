import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { TopDevelopers } from '../pages/TopDevelopers';
import { Hackathon } from '../pages/Hackathon';
import { Error404 } from '../pages/Error404';

export const Router: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/top-developers" element={<TopDevelopers />} />
            <Route path="/hackathon/:id" element={<Hackathon />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};
