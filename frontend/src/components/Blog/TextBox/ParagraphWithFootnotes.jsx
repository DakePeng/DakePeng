import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import {findFootnoteReferences, replaceFootnoteReferences} from '@utils/Blog/markdown.js'
import FootnotesDisplay from './FootnotesDisplay.jsx';
import CodeBlock from './CodeBlock.jsx';
import CustomLink from './CustomLink.jsx';
import { CustomList, CustomListItem } from './CustomList.jsx';
import { CustomH1, CustomH2, CustomH3, CustomH4, CustomH5 } from './Headings.jsx';
import CustomBlockquote from './CustomBlockquote.jsx';

const CustomParagraph = ({ node, ...props }) => (
  <p className="leading-relaxed" {...props} />
);

const markdownComponents = {
  code: CodeBlock,
  a: CustomLink,
  ul: CustomList,
  li: CustomListItem,
  h1: CustomH1,
  h2: CustomH2,
  h3: CustomH3,
  h4: CustomH4,
  h5: CustomH5,
  blockquote: CustomBlockquote,
  p: CustomParagraph,
};

const ParagraphWithFootnotes = ({ paragraph, footnotes, index }) => {
  const footnoteRefs = findFootnoteReferences(paragraph);
  const paragraphWithSup = replaceFootnoteReferences(paragraph);
  
  return (
    <div key={index} className="mb-8">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={markdownComponents}
      >
        {paragraphWithSup}
      </ReactMarkdown>
      <FootnotesDisplay footnoteRefs={footnoteRefs} footnotes={footnotes} />
    </div>
  );
};

export default ParagraphWithFootnotes;