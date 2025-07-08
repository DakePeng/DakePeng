import BlogPostTextBox from './BlogPostTextBox/BlogPostTextBox.jsx'

export default function BlogPost({ markdown }) {
    return (
      <BlogPostTextBox markdown = {markdown}/>
    );
}

export const sampleMd = `
# Understanding React Footnotes

React is a popular JavaScript library for building user interfaces.[^1] It allows developers to create reusable UI components that can manage their own state.

## Why use React?

React's component-based architecture makes it easier to reason about your app [^@blogpostcitation].

\`\`\`js
// Example React component
function HelloWorld() {
  return <h1>Hello, world!</h1>;
}
\`\`\`

You can learn more about React on the [official website](https://reactjs.org).

Some concepts in React, like hooks, help you manage side effects and state in functional components.

## Footnotes Explained

Footnotes are a way to provide additional context without cluttering the main text.

Here is a repeated footnote reference.[^1]

---

[^1]: React was created by Jordan Walke at Facebook.
[^@blogpostcitation]: abfsjafik
`;

BlogPost.defaultProps = {
  markdown: sampleMd,
};
