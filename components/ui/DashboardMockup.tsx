/**
 * DashboardMockup Component
 * Pixel-perfect recreation of the NeuraStock dashboard
 * Replaces the dashboard-mockup.png image with pure HTML/Tailwind
 */

'use client';

import React from 'react';
import { DollarSign, Package, AlertTriangle, PackageX, RefreshCw } from 'lucide-react';
import NumberTicker from './NumberTicker';

const DashboardMockup: React.FC = () => {
    return (
        <div className="w-full bg-[#0a0f1c] rounded-2xl p-3 text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div>
                    <h1 className="text-2xl font-bold text-white mb-1">NEURACALL</h1>
                    <p className="text-slate-400 text-xs">Métricas clave del inventario</p>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 rounded-lg transition-colors">
                    <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-cyan-400 text-xs font-medium">Sync</span>
                </button>
            </div>

            {/* Main Inventory Card */}
            <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-950/20 border border-emerald-500/30 rounded-xl p-5 mb-4">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-emerald-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                            Valor Inventario
                        </p>
                        <h2 className="text-4xl font-bold text-white mb-3">
                            <NumberTicker value={4538422657.32} prefix="$" decimals={2} />
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Stock actual • <span className="text-white font-medium"><NumberTicker value={23038} /></span> unidades
                        </p>
                    </div>
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-8 h-8 text-emerald-400" />
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
                {/* Productos */}
                <div className="bg-slate-900 border border-slate-800/50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-2">
                        <Package className="w-4 h-4 text-cyan-400" />
                    </div>
                    <p className="text-cyan-400 text-[10px] font-semibold mb-0.5 uppercase tracking-wide">
                        Productos
                    </p>
                    <p className="text-2xl font-bold text-white mb-1"><NumberTicker value={14643} /></p>
                    <p className="text-slate-500 text-[10px]">Total de productos</p>
                </div>

                {/* Stock */}
                <div className="bg-slate-900 border border-slate-800/50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center mb-2">
                        <Package className="w-4 h-4 text-blue-400" />
                    </div>
                    <p className="text-blue-400 text-[10px] font-semibold mb-0.5 uppercase tracking-wide">
                        Stock
                    </p>
                    <p className="text-2xl font-bold text-white mb-1"><NumberTicker value={23038} /></p>
                    <p className="text-slate-500 text-[10px]">Unidades totales</p>
                </div>

                {/* Stock Bajo */}
                <div className="bg-slate-900 border border-slate-800/50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center mb-2">
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-amber-400 text-[10px] font-semibold mb-0.5 uppercase tracking-wide">
                        Stock Bajo
                    </p>
                    <p className="text-2xl font-bold text-white mb-1"><NumberTicker value={0} /></p>
                    <p className="text-slate-500 text-[10px]">Productos en alerta</p>
                </div>

                {/* Agotados */}
                <div className="bg-slate-900 border border-slate-800/50 rounded-lg p-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center mb-2">
                        <PackageX className="w-4 h-4 text-red-400" />
                    </div>
                    <p className="text-red-400 text-[10px] font-semibold mb-0.5 uppercase tracking-wide">
                        Agotados
                    </p>
                    <p className="text-2xl font-bold text-white mb-1"><NumberTicker value={324} /></p>
                    <p className="text-slate-500 text-[10px]">Sin stock</p>
                </div>
            </div>

            {/* Bottom Section: Categories and Alerts */}
            <div className="grid grid-cols-2 gap-4">
                {/* Top Categorías */}
                <div className="bg-slate-900 border border-slate-800/50 rounded-lg p-5">
                    <h3 className="text-white font-semibold mb-4 text-sm">Top Categorías por Valor</h3>

                    {/* Varios */}
                    <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-300 text-sm">Varios</span>
                            <span className="text-cyan-400 text-sm font-semibold">100.0%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2.5">
                            <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                    </div>

                    {/* Electronica */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-slate-300 text-sm">Electronica</span>
                            <span className="text-cyan-400 text-sm font-semibold">23.2%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2.5">
                            <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: '23.2%' }}></div>
                        </div>
                    </div>
                </div>

                {/* Alertas de Stock */}
                <div className="bg-slate-900 border border-slate-800/50 rounded-lg p-5">
                    <h3 className="text-white font-semibold mb-4 text-sm">Alertas de Stock</h3>

                    {/* Abanico 1 */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                        <div>
                            <p className="text-slate-300 text-sm font-medium">Abanico</p>
                        </div>
                        <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-xs font-semibold">
                            AGOTADO
                        </span>
                    </div>

                    {/* Abanico 2 */}
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-300 text-xs font-medium">Abanico</p>
                        </div>
                        <span className="px-1.5 py-0.5 bg-red-500/20 border border-red-500/30 rounded text-red-400 text-[10px] font-semibold">
                            AGOTADO
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMockup;
