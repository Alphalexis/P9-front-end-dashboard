import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Horizontal from "./frontend/components/Horizontal"
import Vertical from "./frontend/components/Vertical"
import Dashboard from "./frontend/pages/Dashboard"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Horizontal />
        <Vertical />
        <Routes>
        <Route path="/user/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
);