import React, { useMemo } from "react";
import {extractFootnotes, extractParagraphs} from '@utils/Blog/markdown.js'
import ParagraphWithFootnotes from './ParagraphWithFootnotes.jsx';

export default function BlogPostTextBox({ markdown }) {
    const footnotes = useMemo(() => extractFootnotes(markdown), [markdown]);
    const paragraphs = useMemo(() => extractParagraphs(markdown), [markdown]);

    return (
    <div className="prose prose-indigo dark:prose-invert mx-auto px-6 py-12">
        {paragraphs.map((paragraph, index) => (
        <ParagraphWithFootnotes
            key={index}
            paragraph={paragraph}
            footnotes={footnotes}
            index={index}
        />
        ))}
    </div>
    );
}