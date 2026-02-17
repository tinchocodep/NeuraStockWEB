/**
 * Hero Screens Stack - OVERLAPPED DESIGN
 * One screen in front, one behind with visible corner
 * Larger sizes for better visibility
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardMockup from '@/components/ui/DashboardMockup';
import InteractiveClientForm from '@/components/ui/InteractiveClientForm';

const HeroScreensStack: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState<1 | 2>(1);

    const springTransition = {
        type: 'spring' as const,
        stiffness: 250,
        damping: 25,
    };

    return (
        <div
            className="relative w-full"
            style={{
                height: '700px',
                perspective: '1200px'
            }}
        >
            {/* SCREEN 1 - Dashboard */}
            <motion.div
                className="absolute cursor-pointer"
                onMouseEnter={() => setActiveScreen(1)}
                animate={{
                    zIndex: activeScreen === 1 ? 20 : 10,
                    scale: activeScreen === 1 ? 1 : 0.92,
                    x: activeScreen === 1 ? 0 : -50,
                    y: activeScreen === 1 ? 0 : -50,
                    rotateZ: activeScreen === 1 ? 0 : -3,
                    opacity: activeScreen === 1 ? 1 : 0.85,
                }}
                transition={springTransition}
                style={{
                    width: '90%',
                    height: '90%',
                    top: '5%',
                    left: '5%',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Border and shadow container */}
                <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden border-2"
                    animate={{
                        borderColor: activeScreen === 1
                            ? 'rgba(6, 182, 212, 0.6)'
                            : 'rgba(71, 85, 105, 0.4)',
                        boxShadow: activeScreen === 1
                            ? '0 30px 60px -15px rgba(6, 182, 212, 0.5), 0 0 100px rgba(6, 182, 212, 0.25)'
                            : '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
                        filter: activeScreen === 1 ? 'blur(0px)' : 'blur(1.5px)',
                    }}
                    transition={springTransition}
                >
                    <DashboardMockup />
                </motion.div>

                {/* Overlay darkening when inactive */}
                <motion.div
                    className="absolute inset-0 bg-black/20 pointer-events-none rounded-2xl"
                    animate={{
                        opacity: activeScreen === 1 ? 0 : 1,
                    }}
                    transition={springTransition}
                />
            </motion.div>

            {/* SCREEN 2 - Invoice (Behind, top-right corner visible) */}
            <motion.div
                className="absolute cursor-pointer"
                onMouseEnter={() => setActiveScreen(2)}
                animate={{
                    zIndex: activeScreen === 2 ? 20 : 10,
                    scale: activeScreen === 2 ? 1 : 0.92,
                    x: activeScreen === 2 ? 0 : 50,
                    y: activeScreen === 2 ? 0 : -50,
                    rotateZ: activeScreen === 2 ? 0 : 3,
                    opacity: activeScreen === 2 ? 1 : 0.85,
                }}
                transition={springTransition}
                style={{
                    width: '90%',
                    height: '90%',
                    top: '5%',
                    left: '5%',
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Border and shadow container */}
                <motion.div
                    className="relative w-full h-full rounded-2xl overflow-hidden border-2"
                    animate={{
                        borderColor: activeScreen === 2
                            ? 'rgba(16, 185, 129, 0.6)'
                            : 'rgba(71, 85, 105, 0.4)',
                        boxShadow: activeScreen === 2
                            ? '0 30px 60px -15px rgba(16, 185, 129, 0.5), 0 0 100px rgba(16, 185, 129, 0.25)'
                            : '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
                        filter: activeScreen === 2 ? 'blur(0px)' : 'blur(1.5px)',
                    }}
                    transition={springTransition}
                >
                    <InteractiveClientForm />
                </motion.div>

                {/* Overlay darkening when inactive */}
                <motion.div
                    className="absolute inset-0 bg-black/20 pointer-events-none rounded-2xl"
                    animate={{
                        opacity: activeScreen === 2 ? 0 : 1,
                    }}
                    transition={springTransition}
                />
            </motion.div>

            {/* Indicator Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30">
                <motion.button
                    className="w-2.5 h-2.5 rounded-full"
                    animate={{
                        backgroundColor: activeScreen === 1 ? '#06b6d4' : '#475569',
                        scale: activeScreen === 1 ? 1.4 : 1,
                    }}
                    onClick={() => setActiveScreen(1)}
                    whileHover={{ scale: 1.6 }}
                    transition={springTransition}
                />
                <motion.button
                    className="w-2.5 h-2.5 rounded-full"
                    animate={{
                        backgroundColor: activeScreen === 2 ? '#10b981' : '#475569',
                        scale: activeScreen === 2 ? 1.4 : 1,
                    }}
                    onClick={() => setActiveScreen(2)}
                    whileHover={{ scale: 1.6 }}
                    transition={springTransition}
                />
            </div>

            {/* Interactive Prompt - Floating annotation on the left */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: activeScreen === 2 ? 1 : 0,
                    x: activeScreen === 2 ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/2 -translate-y-1/2 left-[-280px] pointer-events-none z-[9999]"
            >
                <div className="relative">
                    {/* Arrow pointing to the card */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5m0 0l6 6m-6-6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400/50" />
                        </svg>
                    </div>

                    {/* Annotation card */}
                    <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 backdrop-blur-md border border-cyan-500/40 rounded-xl px-4 py-3 shadow-xl">
                        <div className="flex items-center gap-2.5">
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.6, 1, 0.6],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                            />
                            <span className="text-cyan-300 text-sm font-semibold whitespace-nowrap">
                                Probá buscando una persona en ARCA
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroScreensStack;
