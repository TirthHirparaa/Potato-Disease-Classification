import React from 'react';

const LoadingSpinner = ({ size = 'lg' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeClasses[size]} border-4 border-farm-green-200 border-t-farm-green-600 rounded-full animate-spin`}></div>
    </div>
  );
};

export default LoadingSpinner;
