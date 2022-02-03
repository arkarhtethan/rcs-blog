import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import NotFound from './screens/NotFound';
import PostDetails from './screens/PostDetails';
import PostList from './screens/PostList';

export default function App () {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/:id" element={<PostDetails />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}