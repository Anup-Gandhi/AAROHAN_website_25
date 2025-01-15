// components/Loader.js
import React from 'react';
import loaderGif from '../assets/Loader.gif'; // Update the path based on your project structure

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img src={loaderGif} alt="Loading..." className="w-24 h-24" />
    </div>
  );
};

export default Loader;
