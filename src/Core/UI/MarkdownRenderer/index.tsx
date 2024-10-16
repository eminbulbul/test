import { marked } from "marked";
import clsx from "clsx";

type TProps = {
  content?: any;
  className?: string;
};

const MarkdownRenderer = ({ content }: any) => {
  const renderer = new marked.Renderer();
  const linkRenderer = renderer.link;
  renderer.link = (href, linkTitle, text) => {
    const html = linkRenderer.call(renderer, href, linkTitle, text);
    return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
  };
  const markdownData = {
    content: "",
    className: "entry-content mb-[54px]",
  };
  return (
    <div
      className={clsx(
        "prose text-base max-w-none prose-strong:font-bold md:prose-h3:text-3xl first:prose-img:mt-0 prose-blockquote:border-l-primary md:prose-blockquote:mt-[50px] md:prose-blockquote:mb-11 md:prose-blockquote:ml-12 prose-blockquote:text-lg prose-blockquote:leading-relaxed prose-blockquote:not-italic",
        markdownData.className
      )}
    >
      {content}
    </div>
  );
};

export default MarkdownRenderer;
