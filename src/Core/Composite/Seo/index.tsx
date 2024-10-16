import { useEffect, useState } from "react";
import { NextSeo, NextSeoProps, ArticleJsonLd, CourseJsonLd } from "next-seo";

interface SeoProps extends NextSeoProps {
  template?: string;
  jsonLdType?: "article" | "course";
  article?: {
    publishedTime: string;
    modifiedTime: string;
    authors: string[];
    tags: string[];
  };
  image?: string;
  instructor?: {
    name: string;
    path: string;
  };
  title?: any;
  description?: any;
  openGraph?: any;
}

const PageSeo = ({
  title,
  description,
  template,
  openGraph,
  jsonLdType,
  article,
  image,
  instructor,
}: SeoProps) => {
  const [href, setHref] = useState("");
  useEffect(() => {
    setHref(window.location.href);
  }, []);

  const articleMeta = jsonLdType === "article" && {
    type: "article",
    ...article,
    images: [
      {
        url: image as string,
        width: 800,
        height: 600,
        alt: title,
      },
      {
        url: image as string,
        width: 900,
        height: 800,
        alt: title,
      },
    ],
  };
  const seoData = {
    name: "Link Kurs",
    titleTemplate: "Online Eğitim Platformu",
    description: "Online Eğitim ve Öğrenme Platformu",
  };
  return (
    <>
      <NextSeo
        title={title}
        titleTemplate={
          template ? `${title as string} - ${template}` : seoData.titleTemplate
        }
        description={description}
        openGraph={{
          url: href,
          title,
          description,
          ...openGraph,
          ...articleMeta,
        }}
      />
      {jsonLdType === "article" && article && (
        <ArticleJsonLd
          type="Blog"
          url={href}
          title={title as string}
          images={[image as string]}
          datePublished={article.publishedTime}
          dateModified={article.modifiedTime}
          authorName={article.authors[0]}
          description={description as string}
        />
      )}
      {jsonLdType === "course" && instructor && (
        <CourseJsonLd
          courseName={title as string}
          description="Introductory CS course laying out the basics."
          provider={{
            name: instructor.name,
            url: href,
          }}
        />
      )}
    </>
  );
};

export default PageSeo;
