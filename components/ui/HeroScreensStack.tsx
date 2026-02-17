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

            {/* Interactive Prompt - Only visible when screen 2 is active */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{
                    opacity: activeScreen === 2 ? 1 : 0,
                    y: activeScreen === 2 ? 0 : 10,
                }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
            >
                <div className="bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-full px-4 py-2 flex items-center gap-2">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <span className="text-cyan-400 text-sm font-medium">
                        Probá buscando una persona en ARCA
                    </span>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroScreensStack;
