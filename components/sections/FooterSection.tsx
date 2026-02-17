/**
 * Footer Section - UPDATED
 * With scroll reveal animations
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const FooterSection: React.FC = () => {
    // Stagger animation for footer elements
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <footer className="py-20 px-6 border-t border-slate-800 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                {/* Final CTA */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    variants={containerVariants}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl lg:text-5xl font-bold text-white mb-6"
                    >
                        Dejá de cargar datos a mano.
                        <br />
                        <span className="gradient-text">
                            Empezá a facturar inteligentemente.
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Branding & Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="border-t border-slate-800 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-400">
                            <span>Un producto de</span>
                            <a
                                href="https://neuracall.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 transition-colors"
                            >
                                Neuracall
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>

                        <div className="flex items-center gap-6 text-sm text-slate-500">
                            <a href="#" className="hover:text-slate-300 transition-colors">
                                Términos y Condiciones
                            </a>
                            <a href="#" className="hover:text-slate-300 transition-colors">
                                Privacidad
                            </a>
                            <a href="#" className="hover:text-slate-300 transition-colors">
                                Contacto
                            </a>
                        </div>
                    </div>

                    <p className="text-center text-slate-600 text-sm mt-8">
                        © {new Date().getFullYear()} NeuraStock. Todos los derechos
                        reservados.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default FooterSection;
