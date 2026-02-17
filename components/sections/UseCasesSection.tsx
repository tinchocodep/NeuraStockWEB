/**
 * Use Cases Section - EXPANDABLE CARDS LAYOUT
 * Interactive horizontal cards that expand on hover
 * Zero clicks, zero fake mockups - pure micro-interactions
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, Check } from 'lucide-react';

const UseCasesSection: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const useCases = [
        {
            id: 'cognitive',
            icon: <Brain className="w-8 h-8" />,
            targetAudience: 'Pyme Mediana/Grande',
            title: 'Envolvete en tu sistema actual',
            pitch: 'Si ya usás Tango, SAP o Xubio, no lo cambies. NeuraStock actúa como capa cognitiva para que dejes de cargar datos a mano y operes en tiempo real.',
            checkmarks: [
                'Integración sin fricción',
                'Cero migraciones dolorosas',
                'Datos sincronizados con ARCA',
            ],
            color: 'cyan',
        },
        {
            id: 'light',
            icon: <Rocket className="w-8 h-8" />,
            targetAudience: 'Pyme Chica/Micro',
            title: 'Tu Sistema Operativo Inmediato',
            pitch: '¿Te manejás con Excel y cuadernos? Empezá hoy mismo. Sin implementaciones de 6 meses. Funciona como tu ERP desde el primer día.',
            checkmarks: [
                'Implementación en 24hs',
                'Facturación en 1 clic',
                'Control total del caos',
            ],
            color: 'emerald',
        },
    ];

    const colorMap = {
        cyan: {
            border: 'border-cyan-500/50',
            glow: 'shadow-cyan-500/20',
            text: 'text-cyan-400',
            bg: 'from-cyan-500/10',
        },
        emerald: {
            border: 'border-emerald-500/50',
            glow: 'shadow-emerald-500/20',
            text: 'text-emerald-400',
            bg: 'from-emerald-500/10',
        },
    };

    return (
        <section className="py-24 px-6 bg-slate-950/30">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Dos caminos, un mismo destino
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Elegí el modelo que mejor se adapte a tu operación actual
                    </p>
                </motion.div>

                {/* Expandable Cards Container */}
                <div
                    className="flex flex-col lg:flex-row gap-6"
                    onMouseLeave={() => setHoveredCard(null)}
                >
                    {useCases.map((useCase) => {
                        const isHovered = hoveredCard === useCase.id;
                        const isOtherHovered = hoveredCard && hoveredCard !== useCase.id;
                        const colors = colorMap[useCase.color as keyof typeof colorMap];

                        return (
                            <motion.div
                                key={useCase.id}
                                layout
                                onMouseEnter={() => setHoveredCard(useCase.id)}
                                initial={false}
                                animate={{
                                    flex: isHovered ? 1.4 : isOtherHovered ? 0.6 : 1,
                                    opacity: isOtherHovered ? 0.5 : 1,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                }}
                                className={`
                                    relative p-8 lg:p-10 rounded-3xl
                                    bg-slate-900/50 backdrop-blur-sm
                                    border-2 transition-all duration-300
                                    cursor-pointer
                                    ${isHovered
                                        ? `${colors.border} shadow-2xl ${colors.glow}`
                                        : 'border-slate-800 shadow-lg shadow-slate-900/50'
                                    }
                                `}
                            >
                                {/* Subtle background glow on hover */}
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={`absolute inset-0 bg-gradient-to-br ${colors.bg} to-transparent rounded-3xl`}
                                    />
                                )}

                                <div className="relative space-y-6">
                                    {/* Icon & Target Audience */}
                                    <div className="flex items-center gap-4">
                                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} to-transparent flex items-center justify-center ${colors.text}`}>
                                            {useCase.icon}
                                        </div>
                                        <div>
                                            <p className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
                                                Para
                                            </p>
                                            <p className={`${colors.text} font-bold text-lg`}>
                                                {useCase.targetAudience}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                                        {useCase.title}
                                    </h3>

                                    {/* Pitch */}
                                    <p className="text-slate-300 leading-relaxed">
                                        {useCase.pitch}
                                    </p>

                                    {/* Checkmarks - Only visible when expanded */}
                                    <AnimatePresence>
                                        {isHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.3, delay: 0.1 }}
                                                className="space-y-3 pt-4 border-t border-slate-700/50"
                                            >
                                                {useCase.checkmarks.map((item, index) => (
                                                    <motion.div
                                                        key={item}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.2 + index * 0.1 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                                        <span className="text-slate-300 text-sm">
                                                            {item}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Interaction hint */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center text-slate-500 text-sm mt-8"
                >
                    Pasa el cursor sobre las tarjetas para ver más detalles
                </motion.p>
            </div>
        </section>
    );
};

export default UseCasesSection;
