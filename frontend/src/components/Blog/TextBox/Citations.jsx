import React from 'react';
import { CustomH2 } from "./Headings.jsx";

export default function Citations({ citations }) {
    if (citations.size === 0) return null;

    return (
        <div className="mt-16 pt-8 border-t">
            <CustomH2>References</CustomH2>
            <div className="space-y-2">
                {Array.from(citations.entries()).map(([key, text]) => (
                    <div key={key} id={`citation-${key}`} className="pl-8 -indent-8">
                        <div className="align-super text-xs text-blue-600">({key}):</div>{text}
                    </div>
                ))}
            </div>
        </div>
    );
}
