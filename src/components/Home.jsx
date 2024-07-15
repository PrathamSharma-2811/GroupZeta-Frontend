import React from 'react';

const Home = () => {
  return (
    <div className="home bg-gray-100" style={{ 
      backgroundImage: 'url(https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?t=st=1721031367~exp=1721034967~hmac=c890100ce260e95a1e65da6001617f10bb05bdfb276f53589007f0dae19c13e3&w=1800)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '75vh', // Adjusted to cover 75% of the viewport height
    }}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold" style={{ color: '#FFFFFF', fontFamily: '"Times New Roman", Times, serif' }}>Zeta your one-stop shop for the best products online</h1>
      </div>
    </div>
  );
};

export default Home;

