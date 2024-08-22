import React from "react";

const BlogSectionComponent = () => {
  const blogs = [
    {
      id: 1,
      title: "Latest News Are On Top All Times",
      content:
        "I got my first premium designer bag when I was in middle school. It was something I wished for, pined for, dreamed...",
      Image: "assets/blogImg1.webp",
    },
    {
      id: 2,
      title: "The most useful things for you",
      content:
        "What Is Your Favorite Non-Premium Designer Bag? I got my first premium designer bag when I was in middle school. It was... ",
      Image: "assets/blogImg2.webp",
    },
    {
      id: 3,
      title: "Do you really understand yourself",
      content:
        "I got my first premium designer bag when I was in middle school. It was something I wished for, pined for, dreamed...",
      Image: "assets/blogImg3.jpg",
    },
  ];
  return (
    <div className="my-20">
      <div className="mb-12 flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-semibold uppercase tracking-wider">
          Our Blogs
        </h1>
        <hr className="w-20 border border-orange-500" />
      </div>
      <div className="grid grid-cols-3 px-5">
        {blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <BlogCard
                title={blog.title}
                content={blog.content}
                src={blog.Image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSectionComponent;

const BlogCard = ({ title, content, src }) => {
  return (
    <div className="px-4">
      <div className="h-[374px]">
        <img className="h-full w-full object-cover" src={src} alt={src} />
      </div>
      <div className="flex flex-col items-center justify-center gap-1 pt-5">
        <span className="text-lg font-semibold uppercase text-gray-600">
          News
        </span>
        <h3 className="px-5 text-center text-2xl font-semibold transition-colors duration-300 ease-in-out hover:text-orange-600">
          {title}
        </h3>
        <hr className="my-2 w-16 border border-orange-500" />
        <p className="line-clamp-3 w-[350px] overflow-hidden text-ellipsis text-center text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
};
