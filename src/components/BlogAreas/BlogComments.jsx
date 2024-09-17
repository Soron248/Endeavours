import React from "react";
import { COMMENT01, COMMENT02 } from "../../lib/assets";

export const BlogComments = ({comments}) => {
  
  return (
    <div className="comments-wrap">
      <h3 className="comments-wrap-title">{comments.length} Comments</h3>
      <div className="latest-comments">
        <ul className="list-wrap">
          <li>
            {comments && comments.map((c,i)=>{
              let dateString = c.created_at;

              // Convert to a JavaScript Date object
              let date = new Date(dateString);
              
              // Define an array of month names
              const months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
              
              // Get the day and month from the date object
              const day = date.getDate();
              const month = months[date.getMonth()];
              const year = date.getFullYear(); 
              return (
                <div className="comments-box" key={i}>
              {/* <div className="comments-avatar">
                <img src={COMMENT01} alt="img" />
              </div> */}
              <div className="comments-text">
                <div className="avatar-name">
                  <h6 className="name">{c.customer.name}</h6>
                  <span className="date">{month} {day}, {year}</span>
                </div>
                <p>
                  {c.comment_message}
                </p>
                {/* <a href="#" className="reply-btn">
                  Reply
                </a> */}
              </div>
            </div>
              )
            })}
            {/* <ul className="children">
              <li>
                <div className="comments-box">
                  <div className="comments-avatar">
                    <img src={COMMENT02} alt="img" />
                  </div>
                  <div className="comments-text">
                    <div className="avatar-name">
                      <h6 className="name">Parker Willy</h6>
                      <span className="date">December 28, 2023</span>
                    </div>
                    <p>
                      Finanappreciate your trust greatly Our clients choose
                      dentace ducts because know we are the best area
                      Awaitingare really.
                    </p>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                </div>
              </li>
            </ul> */}
          </li>
        </ul>
      </div>
    </div>
  );
};
