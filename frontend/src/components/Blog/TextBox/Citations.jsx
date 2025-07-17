import React from 'react';
import { CustomH2 } from "./Headings.jsx";

export default function Citations({ citations, footnotes }) {
    if (citations.length === 0) return null;

    return (
        <div className="mt-16 pt-8 border-t">
            <CustomH2>References</CustomH2>
            <div className="space-y-2">
                {citations.map(citation => (
                    <div key={citation} id={`citation-${citation}`} className="pl-8 -indent-8">
                        <sup className="align-super text-xs text-blue-600">{citation}</sup> {footnotes[`(${citation})`]}
                    </div>
                ))}
            </div>
        </div>
    );
}
