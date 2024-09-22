import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/Layout";
import { BlogPageWrapper } from "../../components/BlogAreas/BlogPageWrapper";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5; // Change this value to set how many blogs per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://endeavours.pythonanywhere.com/api/blogs/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  // Get current blogs for the page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout breadcrumb={"Blog"} title={"Latest Blog"}>
      <BlogPageWrapper>
        <div className="blog-post-wrap">
          <div className="row">
            {currentBlogs.map((blog) => {
              let dateString = blog.created_at;
              let date = new Date(dateString);
              const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
              const day = date.getDate();
              const month = months[date.getMonth()];
              const formattedDate = `${day}, ${month}`;

              return (
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
                      <p className="truncate-text">{blog.content}</p>
                      <div className="blog-meta">
                        <ul className="list-wrap">
                          <li>
                            <Link to={`/blog-details/${blog.id}`}>
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
              );
            })}
          </div>

          {/* pagination */}
          <div className="pagination-wrap mt-30">
            <nav aria-label="Page navigation example">
              <ul className="pagination list-wrap">
                <li className="page-item" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                  <a className="page-link" href="#" aria-disabled={currentPage === 1}>
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(index + 1)}>
                      {index + 1}
                    </a>
                  </li>
                ))}
                <li className="page-item" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                  <a className="page-link" href="#" aria-disabled={currentPage === totalPages}>
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
