import React from "react";
import Breadcrumb from "@/UI/Breadcrumb";
import AuthorDetails from "./AuthorDetails";

interface BlogData {
  id: number;
  image: { src: string };
  title: string;
  author: { id: number; name: string; image: { src: string }; bio: string };
  postedAt: string;
  views: number;
  content: string;
  slug: string;
  path: string;
}

interface BlogDetailProps {
  blogData?: BlogData; // Make blogData optional
}

const BlogDetail: React.FC<BlogDetailProps> = ({ blogData }) => {
  if (!blogData) {
    return <div>Blog not found</div>;
  }
  return (
    <div className="container my-10">
      <Breadcrumb
        pages={[{ path: "/", label: "Ana Sayfa" }]}
        currentPage={blogData?.title}
      />
      <div className="grid grid-cols-3 gap-12">
        <div className="col-[1/3]">
          <img
            className="my-10 w-full rounded-lg"
            src={blogData.image?.src}
            alt={blogData.title}
          />
          <p>{blogData?.content}</p>
        </div>
        <div className="col-[3/-1] my-10"><AuthorDetails/></div>
      </div>
    </div>
  );
};

export default BlogDetail;
