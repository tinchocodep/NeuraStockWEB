/**
 * Secondary Screen Replica - Invoice Creation Interface
 * Pixel-perfect clone of the invoice screen from the provided image
 * Pure React component without img tags
 */

'use client';

import React from 'react';
import {
    FileText,
    Users,
    Search,
    Plus,
    ShoppingCart,
    Calendar,
    Printer,
    Settings,
    LogOut,
    BarChart3,
    Package,
    DollarSign,
    FileStack,
    RotateCcw
} from 'lucide-react';

const SecondaryScreenReplica: React.FC = () => {
    return (
        <div className="w-full h-full bg-slate-950 flex overflow-hidden rounded-lg">
            {/* MAIN CONTENT */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-slate-900 border-b border-slate-800 px-4 py-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                <FileText className="w-4 h-4 text-cyan-400" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-base">Nueva Factura</h1>
                                <p className="text-cyan-400 text-[10px]">COMPROBANTE ELECTRÓNICO</p>
                            </div>
                        </div>

                        {/* Invoice Type Buttons */}
                        <div className="flex items-center gap-1.5">
                            <button className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-medium hover:bg-slate-700 transition-colors">
                                A
                            </button>
                            <button className="px-2 py-1 bg-cyan-500 text-white rounded text-[10px] font-medium shadow-lg shadow-cyan-500/30">
                                B
                            </button>
                            <button className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-medium hover:bg-slate-700 transition-colors">
                                C
                            </button>
                            <button className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-medium hover:bg-slate-700 transition-colors">
                                M
                            </button>
                            <button className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-medium hover:bg-slate-700 transition-colors">
                                T
                            </button>
                            <button className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-medium hover:bg-slate-700 transition-colors">
                                MIPYME
                            </button>
                            <button className="px-2 py-1 bg-slate-800 text-slate-400 rounded text-[10px] font-medium hover:bg-slate-700 transition-colors">
                                Presupuesto
                            </button>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Left Panel - Client & Items */}
                    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                        {/* Client Data Section */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-1.5 text-cyan-400">
                                    <Users className="w-3.5 h-3.5" />
                                    <h3 className="font-semibold text-xs">Datos del Cliente</h3>
                                </div>
                                <button className="text-cyan-400 text-[10px] hover:text-cyan-300 transition-colors">
                                    Mostrando últimos clientes
                                </button>
                            </div>

                            {/* Search Input */}
                            <div className="relative">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Buscar cliente por nombre o CUIT..."
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                                    <button className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center hover:bg-slate-600 transition-colors">
                                        <span className="text-slate-400 text-[10px]">⌘</span>
                                    </button>
                                    <button className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center hover:bg-cyan-600 transition-colors">
                                        <Users className="w-3.5 h-3.5 text-white" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Add Items Section */}
                        <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-3">
                            <div className="flex items-center gap-1.5 text-cyan-400 mb-3">
                                <Plus className="w-3.5 h-3.5" />
                                <h3 className="font-semibold text-xs">Agregar Ítems</h3>
                            </div>

                            {/* Search Inventory */}
                            <div className="relative mb-3">
                                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" />
                                <input
                                    type="text"
                                    placeholder="Buscar en inventario..."
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-8 pr-24 py-2 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                                    <span className="px-2 py-0.5 bg-slate-700 rounded text-slate-400 text-[10px]">
                                        IVA 21%
                                    </span>
                                </div>
                            </div>

                            {/* Table Header */}
                            <div className="grid grid-cols-12 gap-2 text-slate-500 text-[10px] font-semibold mb-2 px-1.5">
                                <div className="col-span-5">PRODUCTO</div>
                                <div className="col-span-2 text-center">CANT</div>
                                <div className="col-span-2 text-right">UNITARIO</div>
                                <div className="col-span-2 text-right">IVA</div>
                                <div className="col-span-1 text-right">SUBTOTAL</div>
                            </div>

                            {/* Empty State */}
                            <div className="flex flex-col items-center justify-center py-8 border-2 border-dashed border-slate-800 rounded-lg">
                                <ShoppingCart className="w-10 h-10 text-slate-700 mb-2" />
                                <p className="text-slate-600 text-xs">El carrito está vacío</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel - Summary */}
                    <div className="w-64 bg-slate-900 border-l border-slate-800 p-4 flex flex-col">
                        {/* Summary Header */}
                        <div className="mb-4">
                            <div className="flex items-center gap-1.5 text-cyan-400 mb-3">
                                <FileText className="w-3.5 h-3.5" />
                                <h3 className="font-semibold text-xs">Resumen de Factura</h3>
                            </div>

                            {/* Date */}
                            <div className="flex items-center gap-1.5 mb-3">
                                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                                <span className="text-slate-400 text-[10px]">Fecha:</span>
                                <span className="text-white text-[10px] font-medium">17/02/2026</span>
                            </div>
                        </div>

                        {/* Summary Items */}
                        <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-xs">Subtotal Bruto</span>
                                <span className="text-white text-xs font-medium">$ 0,00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-xs">% Descuento</span>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-white text-xs">0</span>
                                    <span className="text-red-500 text-xs">-$ 0,00</span>
                                </div>
                            </div>
                            <div className="h-px bg-slate-800 my-2" />
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-xs">Neto Gravado</span>
                                <span className="text-white text-xs font-medium">$ 0,00</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-slate-400 text-xs">IVA Total</span>
                                <span className="text-white text-xs font-medium">$ 0,00</span>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="bg-slate-800/50 rounded-lg p-3 mb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-white font-bold text-sm">TOTAL</span>
                                <span className="text-cyan-400 font-bold text-lg">$ 0,00</span>
                            </div>
                        </div>

                        {/* Generate Button */}
                        <button className="w-full bg-slate-800 border border-slate-700 text-slate-500 rounded-lg py-2 flex items-center justify-center gap-1.5 mb-2 cursor-not-allowed">
                            <Printer className="w-3.5 h-3.5" />
                            <span className="font-semibold text-xs">Generar Factura</span>
                        </button>

                        {/* Warning Message */}
                        <p className="text-red-500 text-[10px] text-center">
                            * Seleccione un cliente para continuar
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondaryScreenReplica;
