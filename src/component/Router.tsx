//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import CarDetails from './CarDetails'; 
import CarList from './CarList';

export default function Router() {
  return (
   
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/cars" element={<CarList user={''} />} />
      <Route path="/car/:id" element={<CarDetails />} />
    </Routes>
  );
}



