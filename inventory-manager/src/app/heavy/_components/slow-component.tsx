"use client";

import { useState, useEffect } from 'react';

// Simulate a very computationally intensive component that slows initial page load interactivity
const performHeavyComputation = (iterations: number) => {
    const startTime = performance.now()

    let result = 0;
    for (let i = 0; i < iterations; i++) {
        // Intentionally complex calculation to consume CPU
        result += Math.sqrt(
            Math.pow(Math.sin(i), 2) +
            Math.pow(Math.cos(i), 2) *
            Math.tan(i) /
            (Math.log(i + 1) + 1)
        );
    }

    const endTime = performance.now()

    return endTime - startTime;
};

// This component will be statically imported, causing slow initial page load
export default function SlowComponent() {
    const [computationResult, setComputationResult] = useState<number | null>(null);

    useEffect(() => {
        // Perform heavy computation during initial render
        const result = performHeavyComputation(5_000_000);
        setComputationResult(result);
    }, []);

    return (
        <div className="p-4 border rounded bg-red-100">
            <h2 className="text-xl font-bold mb-4">Hidas dynaamisesti ladattu komponentti</h2>
            <div className="text-red-600">
                {computationResult !== null ? (
                    <p>Laskenta valmis. Kesto (ms): {computationResult.toFixed(2)}</p>
                ) : (
                    <p>Lasketaan... (Tämä blokkaa käyttäjäsyötteen latauksen yhteydessä)</p>
                )}
            </div>
        </div>
    );
}