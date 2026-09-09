import React from 'react';

const Header = () => {
  return (
    <header className="bg-farm-green-700 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🌾</div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Kisan Mitra
              </h1>
              <p className="text-farm-green-100 text-sm">
                Smart Farming Solutions
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-white">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🏥</span>
              <span className="text-sm">Disease Detection</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">🤖</span>
              <span className="text-sm">AI Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">📱</span>
              <span className="text-sm">Mobile Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
