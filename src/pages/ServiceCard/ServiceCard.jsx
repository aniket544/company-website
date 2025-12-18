import React from 'react';
import { BackgroundGradient } from '../../components/UI/BackgroundGradient';    
// CSS file hata diya kyunki ab Tailwind use kar rahe hain

function ServiceCard({ icon, title, description, image }) {
    return (
        <div className="w-full max-w-sm p-2"> {/* Wrapper */}
            <BackgroundGradient className="rounded-[22px] bg-[var(--bg-secondary)] p-4 sm:p-8 overflow-hidden h-full flex flex-col items-center text-center">
                
                {/* Icon Section */}
                <div className="text-4xl mb-4 text-[var(--accent-cyan)] drop-shadow-lg">
                    {icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 mt-2 text-[var(--text-color)]">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {description}
                </p>

                {/* Image (Optional: Added Hover Zoom Effect) */}
                {image && (
                    <img 
                        src={image} 
                        alt={title} 
                        className="rounded-lg object-cover mt-4 w-full h-32 transform hover:scale-105 transition-transform duration-300" 
                    />
                )}

                {/* "Learn More" Badge (Optional visual touch) */}
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 border border-[var(--border-color)]">
                    <span>Learn more </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        →
                    </span>
                </button>

            </BackgroundGradient>
        </div>
    );
}

export default ServiceCard;