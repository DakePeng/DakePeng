import React, { useMemo } from "react";
import {
    extractFootnotes,
    extractParagraphs,
    extractCitations
} from '@utils/Blog/markdown.js'
import ParagraphWithFootnotes from './ParagraphWithFootnotes.jsx';
import Citations from './Citations.jsx';

export default function BlogPostTextBox({ markdown }) {
    const footnotes = useMemo(() => extractFootnotes(markdown), [markdown]);
    const paragraphs = useMemo(() => extractParagraphs(markdown), [markdown]);
    const citations = useMemo(() => extractCitations(markdown), [markdown]);
    return (
        <div className="prose prose-indigo dark:prose-invert max-w-3xl mx-auto px-6 py-12">
            {paragraphs.map((paragraph, index) => (
                <ParagraphWithFootnotes
                    key={index}
                    paragraph={paragraph}
                    footnotes={footnotes}
                    index={index}
                />
            ))}
            <Citations citations={citations} />
        </div>
    );
}