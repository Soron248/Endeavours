import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const BlogCommentForm = ({ blog }) => {
  const { id } = useParams(); // Get blog ID from the URL params

  // State to hold form data
  const [formData, setFormData] = useState({
    comment_message: '',
    customer_name: '',
    customer_email: ''
  });

  useEffect(() => {
    
  }, [formData])
  

  // State to handle success or error messages
  const [statusMessage, setStatusMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const postData = {
      blog: id, // Pass blog ID dynamically
      comment_message: formData.comment_message,
      customer_name: formData.customer_name,
      customer_email: formData.customer_email
    };

    try {
      const response = await fetch('https://endeavours.pythonanywhere.com/api/blogs/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit comment');
      }

      setStatusMessage('Comment submitted successfully!');
      setFormData({ comment_message: '', customer_name: '', customer_email: '' }); // Clear the form
    } catch (error) {
      setStatusMessage('Error: ' + error.message);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="comment-respond">
      <h3 className="comment-reply-title">Post a comment</h3>
      <form className="comment-form" onSubmit={handleSubmit}>
        <p className="comment-notes">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="form-grp">
          <textarea
            name="comment_message"
            value={formData.comment_message}
            onChange={handleInputChange}
            placeholder="Comment"
            required
          ></textarea>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-grp">
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleInputChange}
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-grp">
              <input
                type="email"
                name="customer_email"
                value={formData.customer_email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit Post
        </button>
        {/* Status message */}
        {statusMessage && <p>{statusMessage}</p>}
      </form>
    </div>
  );
};
