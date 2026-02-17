/**
 * Interactive Client Form Component
 * Dark Mode form with ARCA integration for automatic client data loading
 * Includes custom hook for webhook connection to n8n
 */

'use client';

import React, { useState } from 'react';
import { X, Search, Info, MapPin, Mail, UserPlus } from 'lucide-react';

// ============================================================================
// CUSTOM HOOK: useArcaSearch
// ============================================================================

interface ArcaResponse {
    name?: string;
    address?: string;
    taxCondition?: string;
    jurisdiction?: string;
}

interface UseArcaSearchReturn {
    searchCuit: (cuit: string) => Promise<void>;
    isLoading: boolean;
    error: string | null;
}

const useArcaSearch = (
    onSuccess: (data: ArcaResponse) => void
): UseArcaSearchReturn => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const searchCuit = async (cuit: string) => {
        setIsLoading(true);
        setError(null);

        try {
            // Webhook URL de n8n para búsqueda de personas en ARCA
            const webhookUrl = 'https://n8n.neuracall.net/webhook/BuscarPersonas';

            console.log('🔍 Buscando CUIT:', cuit);
            console.log('📡 URL:', webhookUrl);

            const response = await fetch(webhookUrl, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ cuit }),
            });

            console.log('📥 Response status:', response.status);

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('✅ Data received:', data);

            // El webhook devuelve un array, tomamos el primer elemento
            const personData = Array.isArray(data) ? data[0] : data;

            if (personData) {
                onSuccess(personData);
            } else {
                throw new Error('No se encontraron datos para el CUIT ingresado');
            }
        } catch (err) {
            console.error('❌ Error en búsqueda:', err);

            // Mensaje de error más específico para CORS
            if (err instanceof TypeError && err.message === 'Failed to fetch') {
                setError('Error de conexión. Verifica que n8n tenga CORS habilitado.');
            } else {
                setError(err instanceof Error ? err.message : 'Error desconocido');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { searchCuit, isLoading, error };
};

// ============================================================================
// MAIN COMPONENT: InteractiveClientForm
// ============================================================================

interface ClientData {
    razonSocial: string;
    cuit: string;
    condicionIva: string;
    direccionFiscal: string;
    jurisdiccion: string;
    email: string;
}

const InteractiveClientForm: React.FC = () => {
    const [clientData, setClientData] = useState<ClientData>({
        razonSocial: '',
        cuit: '',
        condicionIva: 'Responsable Inscripto',
        direccionFiscal: '',
        jurisdiccion: 'CABA',
        email: '',
    });

    const handleArcaSuccess = (data: ArcaResponse) => {
        setClientData((prev) => ({
            ...prev,
            razonSocial: data.name || prev.razonSocial,
            direccionFiscal: data.address || prev.direccionFiscal,
            condicionIva: data.taxCondition || prev.condicionIva,
            jurisdiccion: data.jurisdiction || prev.jurisdiccion,
        }));
    };

    const { searchCuit, isLoading, error } = useArcaSearch(handleArcaSuccess);

    const handleSearch = () => {
        if (clientData.cuit.trim()) {
            searchCuit(clientData.cuit);
        }
    };

    return (
        <div className="w-full h-full bg-slate-950 flex items-center justify-center p-6 overflow-hidden rounded-lg">
            {/* Form Container */}
            <div className="w-full max-w-xl bg-slate-900 rounded-xl border border-slate-800 shadow-2xl">
                {/* Header */}
                <div className="flex items-start gap-3 p-5 border-b border-slate-800">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <UserPlus className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h2 className="text-white font-bold text-lg">Nuevo Cliente</h2>
                        <p className="text-slate-400 text-xs">Agregar a la base de datos de Neuracall</p>
                    </div>
                    <button className="text-slate-400 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* ARCA Info Banner */}
                <div className="mx-5 mt-4 mb-4 bg-cyan-950/30 border border-cyan-900/50 rounded-lg p-3 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <p className="text-cyan-400 text-xs leading-relaxed">
                        Para una carga automática, ingrese el CUIT y presione la lupa para consultar datos en ARCA.
                    </p>
                </div>

                {/* Form Content */}
                <div className="p-5 space-y-4">
                    {/* Razón Social */}
                    <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                            Razón Social / Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Ej: Empresa S.A."
                            value={clientData.razonSocial}
                            onChange={(e) =>
                                setClientData({ ...clientData, razonSocial: e.target.value })
                            }
                            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                    </div>

                    {/* CUIT and Condición Fiscal - Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* CUIT with Search */}
                        <div>
                            <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                CUIT / DNI
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="30-12345678-9"
                                    value={clientData.cuit}
                                    onChange={(e) =>
                                        setClientData({ ...clientData, cuit: e.target.value })
                                    }
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-3 pr-10 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                                <button
                                    onClick={handleSearch}
                                    disabled={isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-700 rounded flex items-center justify-center transition-colors"
                                >
                                    {isLoading ? (
                                        <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <Search className="w-3.5 h-3.5 text-white" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Condición Fiscal */}
                        <div>
                            <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                Condición Fiscal
                            </label>
                            <select
                                value={clientData.condicionIva}
                                onChange={(e) =>
                                    setClientData({ ...clientData, condicionIva: e.target.value })
                                }
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                            >
                                <option>Responsable Inscripto</option>
                                <option>Monotributista</option>
                                <option>Exento</option>
                                <option>Consumidor Final</option>
                            </select>
                        </div>
                    </div>

                    {/* Dirección Fiscal */}
                    <div>
                        <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                            Dirección Fiscal
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Calle Falsa 123, CABA"
                                value={clientData.direccionFiscal}
                                onChange={(e) =>
                                    setClientData({ ...clientData, direccionFiscal: e.target.value })
                                }
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Jurisdicción and Email - Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {/* Jurisdicción */}
                        <div>
                            <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                Jurisdicción
                            </label>
                            <select
                                value={clientData.jurisdiccion}
                                onChange={(e) =>
                                    setClientData({ ...clientData, jurisdiccion: e.target.value })
                                }
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                            >
                                <option>CABA</option>
                                <option>Buenos Aires</option>
                                <option>Córdoba</option>
                                <option>Santa Fe</option>
                            </select>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-slate-400 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="email"
                                    placeholder="cliente@ejemplo.com"
                                    value={clientData.email}
                                    onChange={(e) =>
                                        setClientData({ ...clientData, email: e.target.value })
                                    }
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-3">
                            <p className="text-red-400 text-xs">{error}</p>
                        </div>
                    )}
                </div>

                {/* Footer Actions */}
                <div className="flex items-center gap-3 p-5 border-t border-slate-800">
                    <button className="flex-1 bg-slate-800 hover:bg-slate-700 text-white rounded-lg py-2.5 text-sm font-semibold transition-colors">
                        Cancelar
                    </button>
                    <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                        <UserPlus className="w-4 h-4" />
                        Guardar Cliente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InteractiveClientForm;
