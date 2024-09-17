import React, { useEffect, useState } from "react";
import { BLOGS_LIST_TWO } from "../../mocks/blogs";
import { BlogPostAreaItem } from "./BlogPostAreaItem";

export const BlogPostArea = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data when component mounts
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://endeavours.pythonanywhere.com/api/blogs/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // console.log(data)
        setBlogs(data);  // Store the response array in state
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []); 
  
  return (
    <section className="blog-post-area">
      <div className="blog-bg"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-60 tg-heading-subheading animation-style2">
              <span className="sub-title tg-element-title">News & Blogs</span>
              <h2 className="title tg-element-title">
                Read Our Latest Updates
              </h2>
              <p>
                Ever find yourself staring at your computer screen a good
                consulting <br />
                slogan to come to mind? Oftentimes.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blogs && blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 col-sm-10">
              <BlogPostAreaItem blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
