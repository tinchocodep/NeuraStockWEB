/**
 * FeatureCard Component
 * SRP: Displays a single feature with icon, title, and description
 * Used in the Core Features section
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FeatureProps } from '@/types';

const FeatureCard: React.FC<FeatureProps> = ({
    title,
    description,
    icon,
    highlight = false,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className={`
        glass-card
        rounded-xl p-6
        ${highlight ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-transparent' : 'border-slate-700'}
        hover:border-cyan-500/50
        transition-all duration-300
        group
      `}
        >
            {/* Icon Container */}
            <div className={`
        w-14 h-14 rounded-lg
        flex items-center justify-center
        mb-4
        ${highlight ? 'bg-cyan-500/20' : 'bg-slate-800'}
        group-hover:bg-cyan-500/20
        transition-colors duration-300
      `}>
                <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3">
                {title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
