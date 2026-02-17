/**
 * ARCAConnection Component
 * Animated SVG showing data flow between NeuraStock and ARCA
 * Displays "light packets" traveling and returning with approval
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const ARCAConnection: React.FC = () => {
    return (
        <div className="relative w-full h-32 flex items-center justify-center">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 120"
                className="overflow-visible"
            >
                {/* Connection Line */}
                <motion.path
                    d="M 80 60 Q 200 20, 320 60"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                />

                {/* Gradient Definition */}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                    </linearGradient>
                </defs>

                {/* Traveling Light Packet (NeuraStock → ARCA) */}
                <motion.circle
                    r="4"
                    fill="#06b6d4"
                    filter="url(#glow)"
                    initial={{ offsetDistance: '0%', opacity: 0 }}
                    animate={{
                        offsetDistance: ['0%', '100%'],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: 'easeInOut',
                    }}
                    style={{
                        offsetPath: 'path("M 80 60 Q 200 20, 320 60")',
                    }}
                />

                {/* Glow Filter */}
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* NeuraStock Node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/50"
            >
                <span className="text-white text-xs font-bold">NS</span>
            </motion.div>

            {/* ARCA Node */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center"
            >
                <Image
                    src="/images/arca-logo.png"
                    alt="ARCA Logo"
                    width={80}
                    height={80}
                    className="object-contain drop-shadow-2xl"
                />
            </motion.div>

            {/* Approval Check (appears periodically) */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1.2, 1],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    times: [0, 0.3, 0.7, 1],
                }}
                className="absolute right-2 top-4"
            >
                <CheckCircle className="w-8 h-8 text-emerald-400" />
            </motion.div>
        </div>
    );
};

export default ARCAConnection;
