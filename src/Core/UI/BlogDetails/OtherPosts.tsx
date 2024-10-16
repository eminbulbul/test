import Link from "next/link";
import React from "react";
interface Blog {
  id: number;
  image: {
    src: string;
  };
  title: string;
  author: {
    id: number;
    name: string;
    image: {
      src: string;
    };
    bio: string;
  };
  postedAt: string;
  views: number;
  content: string;
  slug: string;
  path: string;
}

interface OtherPostsProps {
  blogs: Blog;
}
const OtherPosts: React.FC<OtherPostsProps> = ({ blogs }) => {
  return (
    <Link href={blogs?.path}>
      <div className="flex items-center my-4">
        <img
          className="rounded-md w-1/3"
          src={blogs?.image.src}
          alt={blogs?.title}
        />
        <div className="w-2/3 ml-3">
          <p className="underline">{blogs?.title}</p>
          <small>{blogs?.postedAt}</small>
        </div>
      </div>
    </Link>
  );
};

export default OtherPosts;
