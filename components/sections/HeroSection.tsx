/**
 * Hero Section Component - SPLIT SCREEN CINEMATIC
 * Premium 50/50 layout with always-visible animated dashboard
 * Inspired by Linear, Vercel, Stripe aesthetics
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import DashboardMockup from '@/components/ui/DashboardMockup';
import HeroScreensStack from '@/components/ui/HeroScreensStack';
import { HeroSectionProps } from '@/types';

const HeroSection: React.FC<HeroSectionProps> = ({ headline, subheadline }) => {
    const [isDashboardHovered, setIsDashboardHovered] = useState(false);
    const [activeScreen, setActiveScreen] = useState<1 | 2>(1);

    return (
        <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.15),transparent_50%)]" />

            {/* Split Screen Container */}
            <div className="relative w-full max-w-[1800px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* LEFT SIDE - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="space-y-8 lg:pr-8"
                >
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                    >
                        El control total de tu{' '}
                        <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                            stock y facturación
                        </span>
                        , en piloto automático
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-slate-400 leading-relaxed max-w-xl"
                    >
                        {subheadline}
                    </motion.p>

                </motion.div>

                {/* VERTICAL DIVIDER LINE */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

                {/* RIGHT SIDE - Animated Dashboard (Always Visible) */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    className="relative lg:pl-8"
                    onMouseEnter={() => setIsDashboardHovered(true)}
                    onMouseLeave={() => setIsDashboardHovered(false)}
                >
                    {/* Glow Effect (intensifies on hover) */}
                    <motion.div
                        className="absolute inset-0 -z-10 blur-3xl"
                        animate={{
                            opacity: isDashboardHovered ? 0.5 : 0.3,
                            scale: isDashboardHovered ? 1.15 : 1.1,
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500" />
                    </motion.div>

                    {/* Dashboard Container with Glassmorphism */}
                    <motion.div
                        className="relative rounded-2xl border overflow-hidden shadow-2xl transition-all duration-500"
                        animate={{
                            borderColor: isDashboardHovered ? 'rgba(6, 182, 212, 0.5)' : 'rgba(71, 85, 105, 0.5)',
                            boxShadow: isDashboardHovered
                                ? '0 25px 50px -12px rgba(6, 182, 212, 0.25)'
                                : '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Glassmorphism Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10" />

                        {/* Interactive Screens Stack */}
                        <HeroScreensStack onScreenChange={setActiveScreen} />
                    </motion.div>

                    {/* Decorative Light Rays */}
                    <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-cyan-500/20 to-transparent blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-emerald-500/20 to-transparent blur-2xl pointer-events-none" />

                    {/* Preview Badge - Below Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-center mt-8 relative z-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
                            <Sparkles className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-400 text-sm font-semibold">
                                Preview de la Aplicación
                            </span>
                        </div>
                    </motion.div>

                    {/* Interactive Prompt - Floating annotation */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{
                            opacity: activeScreen === 2 ? 1 : 0,
                            x: activeScreen === 2 ? 0 : 20,
                        }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none z-[9999]"
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
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        </section>
    );
};

export default HeroSection;
