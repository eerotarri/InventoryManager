"use client";

import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import dynamic from 'next/dynamic'

// Simulate a heavy component that might be resource-intensive
const SlowComponent = dynamic(() => import("./slow-component"), {
    ssr: false,
    loading: () => <p>Ladataan raskasta komponenttia...</p>,
});

export default function CollapsibleWrapper() {
    const [showHeavyComponents, setShowHeavyComponents] = useState(false);

    return (
        <div className="p-4">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger
                        onClick={() => setShowHeavyComponents(!showHeavyComponents)}
                    >
                        Näytä suorituskykyä kuormittavat komponentit
                    </AccordionTrigger>
                    <AccordionContent>
                        {showHeavyComponents && (
                            <div className="space-y-4">
                                <SlowComponent />
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}