import React, { useState } from "react";
import "./style.css";

// Card component with "Read More" functionality
function Card(props) {
  const [isReadMore, setIsReadMore] = useState(false);

  // Toggle the "Read More" state
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const MAX_LENGTH = 100; // Maximum length for truncated text

  return (
    <div className="card" id="pCard" >
      <img src={props.picture} className="card-img-top" alt={props.title} />
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
        {/* Truncate text if it exceeds MAX_LENGTH */}
        <p className="card-text">
          {isReadMore || props.body.length <= MAX_LENGTH
            ? props.body
            : `${props.body.substring(0, MAX_LENGTH)}...`}
        </p>

        {/* "Read More / Read Less" Button */}
        {props.body.length > MAX_LENGTH && (
          <button
            onClick={toggleReadMore}
            className="read-more-btn"
          >
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Link Section */}
      <div className="card-body">
        <a href={props.link} className="card-link" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Card;
