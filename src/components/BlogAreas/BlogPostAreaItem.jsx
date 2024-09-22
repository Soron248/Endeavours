import React from "react";
import { Link } from "react-router-dom";

export const BlogPostAreaItem = ({ blog }) => {
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
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to={`/blog-details/${blog.id}`}>
          <img src={blog.featured_images[0].blog_image} alt="" />
        </Link>

        <span className="date">
          <strong>{day}</strong>{month}
        </span>
      </div>

      <div className="blog-post-content">
        <Link to={`/blog-details/${blog.id}`} className="tag">
          {blog.categories[0].name}
        </Link>

        <h2 className="title">
          <Link to={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h2>

        <p className="truncate-text">{blog.content}</p>

        <Link to={`/blog-details/${blog.id}`} className="link-btn">
          Read More <i className="flaticon-right-arrow"></i>
        </Link>
      </div>
    </div>
  );
};
