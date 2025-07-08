const extractFootnotes = (md) => {
    const footnotes = {};
    const regex = /^\[\^(.+?)\]:\s*([\s\S]+?)(?=\n\[\^|\n*$)/gm;
    let match;
    while ((match = regex.exec(md))) {
        footnotes[match[1]] = match[2].trim();
    }
    return footnotes;
};

// Split markdown into paragraphs (and ignore footnotes definitions)
const extractParagraphs = (md) => {
    // Remove footnotes definitions at the end first
    const withoutFootnotes = md.replace(/^\[\^.+?\]:[\s\S]+$/gm, "").trim();
    // Split on double newlines for paragraphs
    return withoutFootnotes.split(/\n\n+/);
};

// Find all footnote references in a paragraph
const findFootnoteReferences = (paragraph) => {
    return [...paragraph.matchAll(/\[\^(.+?)\]/g)].map((m) => m[1]);
};

// Replace footnote references with superscript links
const replaceFootnoteReferences = (paragraph) => {
    return paragraph.replace(/\[\^(.+?)\]/g, (_, id) => {
        return `<a href="#footnote-${id}" class="align-super text-xs text-blue-600 cursor-pointer">${id}</a>`;
    });
};

export {extractFootnotes, extractParagraphs, findFootnoteReferences, replaceFootnoteReferences}