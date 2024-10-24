import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../page/Home';
import About from '../page/About';
import CarListing from '../page/CarListing';
import Blog from '../page/Blog';
import BlogDetail from '../page/BlogDetail';
import CarDetail from '../page/CarDetail';
import Notfound from '../page/Notfound';
import Contact from '../page/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/car" element={<CarListing />} />
      <Route path="/car/:slug" element={<CarDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Router;

