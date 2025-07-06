import React from "react";

const sampleMd = `
# Welcome to My Blog

This is a sample blog post written in **Markdown** format.

---

## Introduction

Markdown is a lightweight markup language with plain-text-formatting syntax. It’s great for writing blog posts!

### Features

- Easy to write and read
- Supports **bold**, *italic*, and other styles
- Code blocks:

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
console.log(greet("World"));
\`\`\`

### Blockquote

> This is a blockquote example to highlight something important.

### Links

Check out [Tailwind CSS](https://tailwindcss.com) for styling your site.

---

Thanks for reading!
`;

import ReactMarkdown from "react-markdown";

export default function BlogPost({ markdown }) {
  return (
    <div className="prose prose-indigo dark:prose-invert max-w-3xl mx-auto px-6 py-12">
      <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

// Default props
BlogPost.defaultProps = {
  markdown: sampleMd,
};
