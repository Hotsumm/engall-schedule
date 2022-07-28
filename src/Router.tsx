import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import AddSchedule from './pages/AddSchedule';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addSchedule" element={<AddSchedule />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
