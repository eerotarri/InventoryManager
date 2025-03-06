"use client";

import { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button';

// Simulate a heavy component that might be resource-intensive
const SlowComponent = dynamic(() => import("./slow-component"), {
    ssr: false,
    loading: () => <p>Ladataan raskasta komponenttia...</p>,
});

export default function CollapsibleWrapper() {
    const [showHeavyComponents, setShowHeavyComponents] = useState(false);

    return (
        <div className="flex flex-col gap-2 p-4">
            {showHeavyComponents && <SlowComponent />}
            <Button className="text-white" onClick={() => setShowHeavyComponents(!showHeavyComponents)}>Näytä raskas komponentti</Button>
        </div>
    );
}