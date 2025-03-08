"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

import dynamic from "next/dynamic";

const Form = dynamic(() => import("./form"));

export default function CollapsibleForm() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="w-full flex flex-col gap-4">
            {showMore && <Form />}
            <Button className="text-white" onClick={() => setShowMore(!showMore)}>
                Avaa lomake
            </Button>
        </div>
    );
}