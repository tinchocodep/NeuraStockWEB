/**
 * API Route: ARCA Person Search Proxy
 * Proxies requests to n8n webhook to avoid CORS issues.
 * The browser calls this endpoint, which forwards to n8n server-side.
 */

import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://n8n.neuracall.net/webhook-test/BuscarPersonasPruebaDomicilio';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        if (!body.cuit) {
            return NextResponse.json(
                { error: 'CUIT es requerido' },
                { status: 400 }
            );
        }

        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cuit: body.cuit }),
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: `Error del webhook: ${response.status} ${response.statusText}` },
                { status: response.status }
            );
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('❌ Error en proxy ARCA:', error);
        return NextResponse.json(
            { error: 'Error interno del servidor' },
            { status: 500 }
        );
    }
}
