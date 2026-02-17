/**
 * Features Section - BENTO BOX with SPOTLIGHT EFFECT
 * Asymmetric grid layout with interactive mouse-following spotlight
 * Premium SaaS design inspired by Vercel/Linear
 */

'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import {
    FileText,
    BarChart3,
    Users,
    Bell,
    DollarSign,
    TrendingUp,
} from 'lucide-react';
import ARCAConnection from '@/components/ui/ARCAConnection';

const FeaturesSection: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Mouse position tracking with spring animation
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const spotlightX = useSpring(mouseX, { stiffness: 150, damping: 20 });
    const spotlightY = useSpring(mouseY, { stiffness: 150, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Funcionalidades que parecen{' '}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            magia
                        </span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Todo lo que necesitás para gestionar tu inventario y facturación,
                        sin complicaciones técnicas
                    </p>
                </motion.div>

                {/* Bento Grid with Spotlight Effect */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    className="relative"
                >
                    {/* Spotlight Effect */}
                    <motion.div
                        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                        style={{
                            background: `radial-gradient(600px circle at ${spotlightX}px ${spotlightY}px, rgba(6, 182, 212, 0.15), transparent 40%)`,
                            left: 0,
                            top: 0,
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            zIndex: 0,
                        }}
                    />

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

                        {/* HERO CARD - Facturación ARCA (2 cols x 1 row) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="col-span-1 md:col-span-2 row-span-1 group"
                        >
                            <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden transition-all duration-300 hover:border-cyan-500/50">
                                {/* Card glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Split Layout: Text Left, Animation Right */}
                                <div className="relative flex flex-col lg:flex-row gap-8 items-center h-full">
                                    {/* Left: Content */}
                                    <div className="flex-1 space-y-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 flex items-center justify-center text-cyan-400">
                                            <FileText className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                                            Facturación ARCA Nativa
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            Emisión de comprobantes A, B, C y notas de crédito en 1 clic. El IVA y los topes se calculan solos. Olvidate de los errores manuales.
                                        </p>
                                    </div>

                                    {/* Right: ARCA Animation */}
                                    <div className="flex-1 w-full lg:w-auto">
                                        <div className="glass-card rounded-2xl p-6 border-cyan-500/30">
                                            <p className="text-sm text-slate-400 mb-4 text-center">
                                                Conexión en tiempo real con ARCA
                                            </p>
                                            <ARCAConnection />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* TALL CARD - Métricas (1 col x 2 rows) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="col-span-1 row-span-2 group"
                        >
                            <div className="relative h-full p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden transition-all duration-300 hover:border-emerald-500/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative flex flex-col h-full space-y-6">
                                    {/* Icon & Title */}
                                    <div className="space-y-4">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center text-emerald-400">
                                            <BarChart3 className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">
                                            Métricas de Análisis
                                        </h3>
                                        <p className="text-slate-300 leading-relaxed">
                                            Ticket promedio, ventas por provincia y ranking de clientes en tiempo real. Tomá decisiones basadas en datos, no en intuición.
                                        </p>
                                    </div>

                                    {/* Mini Chart Visualization */}
                                    <div className="flex-1 flex items-end gap-2 pb-4">
                                        {[40, 70, 45, 80, 60, 90, 55].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                                                className="flex-1 bg-gradient-to-t from-emerald-500 to-cyan-500 rounded-t-lg min-h-[20px]"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* COMPACT CARD - Cuentas Corrientes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="col-span-1 row-span-1 group"
                        >
                            <div className="relative h-full p-6 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden transition-all duration-300 hover:border-slate-600">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center text-slate-300">
                                        <DollarSign className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Cuentas Corrientes Inteligentes
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Neteo automático de costos de importación y control de saldos por cliente (CUIT) al instante.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* COMPACT CARD - Gestión de Clientes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.25 }}
                            className="col-span-1 row-span-1 group"
                        >
                            <div className="relative h-full p-6 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden transition-all duration-300 hover:border-slate-600">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center text-slate-300">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Gestión de Clientes
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Base de datos centralizada con historial completo de operaciones y estado de cuenta.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* COMPACT CARD - Alertas Inteligentes */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="col-span-1 row-span-1 group"
                        >
                            <div className="relative h-full p-6 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden transition-all duration-300 hover:border-amber-500/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center text-amber-400">
                                        <Bell className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Alertas Inteligentes
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Notificaciones automáticas de stock bajo o agotado antes de que te quedes sin mercadería.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* COMPACT CARD - Análisis Predictivo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="col-span-1 row-span-1 group"
                        >
                            <div className="relative h-full p-6 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 overflow-hidden transition-all duration-300 hover:border-purple-500/50">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative space-y-3">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center text-purple-400">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        Análisis Predictivo
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Proyecciones de demanda basadas en tu historial. Anticipate a las necesidades de tu negocio.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
