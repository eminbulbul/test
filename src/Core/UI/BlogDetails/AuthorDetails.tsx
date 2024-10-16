import React from "react";
import SocialShare from "../SocialShare";
import OtherPosts from "./OtherPosts";
import BlogData from "@/Core/blogdata.json";
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
const AuthorDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="mb-8">Yazar Hakkında</h4>
      <img
        className="rounded-full w-1/2 h-1/2 mb-5"
        src="/img/ogretmen05.jpg"
        alt="ogretmen"
      />
      <p>Kadir Yolcu</p>
      <small className="my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </small>
      <div className="my-2">
        <SocialShare title={"Blog Yazısını Paylaş"} />
      </div>
      <div className="flex flex-col items-center mt-3">
        <h4>Diğer Blog Yazıları</h4>
        {BlogData.blogs.slice(0, 5).map((blog: Blog) => (
          <OtherPosts key={blog.id} blogs={blog} />
        ))}
      </div>
    </div>
  );
};

export default AuthorDetails;
