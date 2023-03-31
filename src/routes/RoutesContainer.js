import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import NewsFeed from '../components/NewsFeed';

const RoutesContainer = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/feed" replace={true} />} />
                <Route path="/feed" element={<NewsFeed />} />
            </Routes>
        </>
    );
}

export default RoutesContainer;