/**
 * Social Proof Section - ORBITAL RINGS DESIGN
 * Clean pulsing concentric rings with client nodes
 * Two-column layout: visualization + info cards
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Shield, Zap } from 'lucide-react';
import { SocialProofProps } from '@/types';

const SocialProofSection: React.FC<SocialProofProps> = ({ title, logos }) => {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Client nodes data with positions (polar coordinates)
    const satellites = [
        {
            id: 'bygger',
            name: 'BYGGER',
            angle: -90, // top
            radius: 180,
            color: 'cyan',
            metric: 'Facturación Nativa',
            metricLabel: '',
            description: 'Operando con el SDK de AFIP/ARCA en tiempo real.',
        },
        {
            id: 'limayen',
            name: 'LIMAYEN',
            angle: 150, // bottom left
            radius: 180,
            color: 'emerald',
            metric: 'Stock Sincronizado',
            metricLabel: '',
            description: 'Inventario unificado y sin discrepancias manuales.',
        },
        {
            id: 'marma',
            name: 'MARMA',
            angle: 30, // bottom right
            radius: 180,
            color: 'purple',
            metric: 'Neteo de Costos',
            metricLabel: '',
            description: 'Distribución inteligente y cuentas corrientes al día.',
        },
    ];

    // Convert polar to cartesian coordinates
    const getPosition = (angle: number, radius: number) => {
        const rad = (angle * Math.PI) / 180;
        return {
            x: Math.cos(rad) * radius,
            y: Math.sin(rad) * radius,
        };
    };

    // Color mappings
    const colorMap = {
        cyan: {
            glow: 'shadow-cyan-500/50',
            border: 'border-cyan-500/30',
            text: 'text-cyan-400',
            bg: 'from-cyan-500/10 to-cyan-600/5',
            ring: 'border-cyan-500/20',
            icon: 'bg-cyan-500/20',
        },
        emerald: {
            glow: 'shadow-emerald-500/50',
            border: 'border-emerald-500/30',
            text: 'text-emerald-400',
            bg: 'from-emerald-500/10 to-emerald-600/5',
            ring: 'border-emerald-500/20',
            icon: 'bg-emerald-500/20',
        },
        purple: {
            glow: 'shadow-purple-500/50',
            border: 'border-purple-500/30',
            text: 'text-purple-400',
            bg: 'from-purple-500/10 to-purple-600/5',
            ring: 'border-purple-500/20',
            icon: 'bg-purple-500/20',
        },
    };

    const iconMap = {
        bygger: TrendingDown,
        limayen: Shield,
        marma: Zap,
    };

    return (
        <section className="relative py-24 px-6 bg-slate-950 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.05),transparent_70%)]" />

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Casos de{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            éxito reales
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        {title}
                    </p>
                </motion.div>

                {/* Two-column layout: Orbital Rings + Info */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT: Orbital Rings Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-square max-w-md mx-auto lg:mx-0"
                    >
                        {/* Concentric Rings */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Ring 1 - Innermost */}
                            <motion.div
                                className="absolute w-32 h-32 border border-slate-700/30 rounded-full"
                                animate={{
                                    opacity: [0.3, 0.5, 0.3],
                                    scale: [1, 1.05, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Ring 2 - Middle */}
                            <motion.div
                                className="absolute w-56 h-56 border border-cyan-500/20 rounded-full"
                                animate={{
                                    opacity: [0.2, 0.4, 0.2],
                                    scale: [1, 1.03, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            />

                            {/* Ring 3 - Outer (satellite orbit) */}
                            <motion.div
                                className="absolute w-96 h-96 border border-emerald-500/15 rounded-full"
                                animate={{
                                    opacity: [0.15, 0.3, 0.15],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1,
                                }}
                            />
                        </div>

                        {/* Central Hub Node (NeuraStock) */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                            animate={{
                                scale: hoveredNode ? [1, 1.08, 1] : 1,
                            }}
                            transition={{
                                scale: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            }}
                        >
                            {/* Reactor glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur-3xl"
                                animate={{
                                    opacity: [0.4, 0.6, 0.4],
                                    scale: [1, 1.3, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />

                            {/* Hub node */}
                            <div className="relative w-28 h-28 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border-2 border-cyan-500/50 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                                <div className="text-center">
                                    <p className="text-white font-bold text-base">NEURA</p>
                                    <p className="text-cyan-400 font-bold text-sm">STOCK</p>
                                </div>

                                {/* Inner glow ring */}
                                <motion.div
                                    className="absolute inset-3 border-2 border-emerald-400/40 rounded-full"
                                    animate={{
                                        opacity: [0.4, 0.7, 0.4],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Satellite Nodes (Clients) */}
                        {satellites.map((satellite) => {
                            const pos = getPosition(satellite.angle, satellite.radius);
                            const isHovered = hoveredNode === satellite.id;
                            const colors = colorMap[satellite.color as keyof typeof colorMap];

                            return (
                                <motion.div
                                    key={satellite.id}
                                    className="absolute top-1/2 left-1/2 z-20"
                                    style={{
                                        x: pos.x - 44,
                                        y: pos.y - 44,
                                    }}
                                    animate={{
                                        y: [pos.y - 44, pos.y - 48, pos.y - 44],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: satellite.angle / 100,
                                    }}
                                    onHoverStart={() => setHoveredNode(satellite.id)}
                                    onHoverEnd={() => setHoveredNode(null)}
                                >
                                    {/* Outer glow ring on hover */}
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 0.5, scale: 1.3 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className={`absolute inset-0 border-2 ${colors.ring} rounded-xl blur-sm`}
                                        />
                                    )}

                                    <motion.div
                                        className={`w-22 h-22 bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-lg border-2 ${colors.border} rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 ${isHovered ? `shadow-2xl ${colors.glow}` : 'shadow-lg shadow-slate-900/50'}`}
                                        animate={{
                                            scale: isHovered ? 1.15 : 1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p className={`text-white font-bold text-xs tracking-wider px-2 text-center ${isHovered ? colors.text : ''} transition-colors duration-300`}>
                                            {satellite.name}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Interaction hint */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-500 text-xs whitespace-nowrap"
                        >
                            Hover sobre las empresas
                        </motion.p>
                    </motion.div>

                    {/* RIGHT: Client Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-4"
                    >
                        {satellites.map((satellite, index) => {
                            const colors = colorMap[satellite.color as keyof typeof colorMap];
                            const Icon = iconMap[satellite.id as keyof typeof iconMap];
                            const isHovered = hoveredNode === satellite.id;

                            return (
                                <motion.div
                                    key={satellite.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                    onHoverStart={() => setHoveredNode(satellite.id)}
                                    onHoverEnd={() => setHoveredNode(null)}
                                    className={`relative p-6 bg-gradient-to-br ${colors.bg} backdrop-blur-sm border ${colors.border} rounded-2xl transition-all duration-300 cursor-pointer ${isHovered ? `shadow-2xl ${colors.glow}` : 'shadow-lg shadow-slate-900/50'}`}
                                >
                                    {/* Glow overlay on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-300`} />

                                    <div className="relative flex items-start gap-4">
                                        {/* Icon */}
                                        <div className={`w-12 h-12 ${colors.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <Icon className={`w-6 h-6 ${colors.text}`} />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h3 className="text-white font-bold text-lg mb-1">{satellite.name}</h3>
                                            <p className="text-slate-400 text-sm mb-3">{satellite.description}</p>

                                            {/* Metric */}
                                            <div className="flex items-end gap-2">
                                                <p className={`text-2xl font-black ${colors.text}`}>{satellite.metric}</p>
                                                {satellite.metricLabel && (
                                                    <p className="text-slate-400 text-sm pb-1">{satellite.metricLabel}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
