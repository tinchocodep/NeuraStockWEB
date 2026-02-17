/**
 * SpotlightCard Component
 * Feature card with mouse-tracking spotlight effect
 * Creates a radial gradient that follows the cursor
 */

'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    highlight?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
    title,
    description,
    icon,
    highlight = false,
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setMousePosition({ x, y });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
        relative overflow-hidden
        glass-card rounded-xl p-6
        ${highlight ? 'border-cyan-500/50' : 'border-slate-700'}
        transition-all duration-300
        group
      `}
        >
            {/* Spotlight Effect */}
            {isHovered && (
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
                    }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">
                {/* Icon Container */}
                <div
                    className={`
          w-14 h-14 rounded-lg
          flex items-center justify-center
          mb-4
          ${highlight ? 'bg-cyan-500/20' : 'bg-slate-800'}
          group-hover:bg-cyan-500/20
          transition-colors duration-300
        `}
                >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
