import React from "react";

export function GridBackground({ children }) {
  return (
    // Main Container with Grid Pattern Class
    <div className="h-screen w-full dark:bg-black bg-white grid-pattern relative flex items-center justify-center">
      
      {/* Radial Gradient Mask (Corners ko fade karne ke liye) */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      
      {/* Content */}
      <div className="relative z-20 w-full h-full">
        {children}
      </div>
    </div>
  );
}