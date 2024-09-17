import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { BlogPageWrapper } from "../../components/BlogAreas/BlogPageWrapper";
import { BLOG_PAGE_LIST } from "../../mocks/blogs";
import { Link } from "react-router-dom";

const BlogPage = () => {
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
    <Layout breadcrumb={"Blog"} title={"Latest Blog"}>
      <BlogPageWrapper>
        <div className="blog-post-wrap">
          {/* list */}
          <div className="row">
            {blogs.map((blog) => {
              let dateString = blog.created_at;

              // Convert to a JavaScript Date object
              let date = new Date(dateString);
              
              // Define an array of month names
              const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
              
              // Get the day and month from the date object
              const day = date.getDate();
              const month = months[date.getMonth()]; // getMonth() returns a zero-based index
              
              // Format the date as "14, Sept."
              const formattedDate = `${day}, ${month}`;
              return(
                <div key={blog.id} className="col-md-6">
                <div className="blog-post-item-two">
                  <div className="blog-post-thumb-two">
                    <Link to={`/blog-details/${blog.id}`}>
                      <img src={blog.featured_images[0].blog_image} alt="" />
                    </Link>

                    <Link to={`/blog-details/${blog.id}`} className="tag tag-two">
                      {blog.categories[0].name}
                    </Link>
                  </div>

                  <div className="blog-post-content-two">
                    <h2 className="title">
                      <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
                    </h2>
                    <p>{blog.content}</p>

                    <div className="blog-meta">
                      <ul className="list-wrap">
                        <li>
                          <Link to={`/blog-details/${blog.id}`}>
                            {/* <img src={blog.authorSrc} alt="" /> */}
                            {blog.created_by}
                          </Link>
                        </li>
                        <li>
                          <i className="far fa-calendar"></i>
                          {formattedDate}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>

          {/* pagination */}
          <div className="pagination-wrap mt-30">
            <nav aria-label="Page navigation example">
              <ul className="pagination list-wrap">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item next-page">
                  <a className="page-link" href="#">
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </BlogPageWrapper>
    </Layout>
  );
};

export default BlogPage;
