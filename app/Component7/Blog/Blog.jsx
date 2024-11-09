import blogThumb from "../../../public/images/mobile-app-blog-img1.jpg";
import blogThumb2 from "../../../public/images/mobile-app-blog-img2.jpg";
import blogThumb3 from "../../../public/images/mobile-app-blog-img3.jpg";
import BlogCard from "./BlogCard";
import { GoArrowRight, GoDotFill } from "react-icons/go";

const blogData = [
  {
    id: 1,
    blogThumb: blogThumb,
    blogDateIcon: <GoDotFill />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <GoDotFill />,
    blogTag: "Marketing",
    blogUrl: "/blog_details",
    blogTitle: "Seamlessly utilize bleeding manufactureds",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 2,
    blogThumb: blogThumb2,
    blogDateIcon: <GoDotFill />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <GoDotFill />,
    blogTag: "Marketing",
    blogUrl: "/blog_details",
    blogTitle: "Monotonically scale viral step superior networks",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
  {
    id: 3,
    blogThumb: blogThumb3,
    blogDateIcon: <GoDotFill />,
    blogDate: "24 Mar, 2024",
    blogTagIcon: <GoDotFill />,
    blogTag: "Marketing",
    blogUrl: "/blog_details",
    blogTitle: "Competently extend resource leveling method",
    blogBtn: "Read More",
    blogBtnIcon: <GoArrowRight />,
  },
];

const Blog = () => {
  return (
    <section className="py-28">
      <div className="Container">
        <div className="text-center">
          <h5 className="font-Rajdhani font-semibold bg-white bg-opacity-20 inline-block px-7 py-[6px] rounded-full border text-PrimaryColor-0 text-lg mb-5">
            Letest Blog
          </h5>
          <h1 className="font-Rajdhani font-bold text-xl leading-7 sm:text-[36px] sm:leading-[44px] md:text-[42px] md:leading-[50px] lg:text-[34px] lg:leading-[40px] xl:text-[38px] xl:leading-[46px] 2xl:text-[42px] 2xl:leading-[50px] text-HeadingColor-0 mb-4">
            Latest insights from our blog post
            <br /> and get our updates
          </h1>
        </div>
        <div className="mt-[54px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {blogData.map(
              ({
                id,
                blogThumb,
                blogDateIcon,
                blogDate,
                blogTagIcon,
                blogTag,
                blogUrl,
                blogTitle,
                blogBtn,
                blogBtnIcon,
              }) => {
                return (
                  <div key={id}>
                    <BlogCard
                      blogThumb={blogThumb}
                      blogDateIcon={blogDateIcon}
                      blogDate={blogDate}
                      blogTagIcon={blogTagIcon}
                      blogTag={blogTag}
                      blogUrl={blogUrl}
                      blogTitle={blogTitle}
                      blogBtn={blogBtn}
                      blogBtnIcon={blogBtnIcon}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
