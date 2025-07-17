import BlogPostTextBox from './TextBox/TextBox.jsx'

export default function BlogPost({ markdown }) {
    return (
      <BlogPostTextBox markdown = {markdown}/>
    );
}

BlogPost.defaultProps = {
  markdown: sampleMd,
};
