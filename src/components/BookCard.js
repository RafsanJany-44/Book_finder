import React from "react";
import { Link } from "react-router-dom";
import "../BookCard.css";

const BookCard = (props) => {
  const BookDetailsUrl='/book/'+props.data.id
  const details = props.data.volumeInfo;
  let imageUrl = "https://picsum.photos/id/1040/200/300";
  if (
    details.imageLinks != undefined &&
    details.imageLinks.thumbnail != undefined
  ) {
    imageUrl = details.imageLinks.thumbnail;
  }
  let author = " ";
  if (details.authors != null) {
    author = details.authors.join(", ");
  }
  const category = details.categories;
  let description = "";
  if (details.description != undefined && details.description.length > 200) {
    description = details.description.substring(0, 200) + " ... ";
  }

  return (
    <div className="column">
      <div className="ui fluid card book-card">
        <Link to={BookDetailsUrl} className="image">
          <img src={imageUrl} style={{ height: "500px", marginRight: "200px" }} />
        </Link>
        <div className="content">
          <h3>{details.title}</h3>
          <div className="description">
            <div>
              Author(s):<h4>{author}</h4>
            </div>
            <div>
              Category:<h4>{category}</h4>
            </div>
          </div>
        </div>
        <div className="extra content">
          {details.averageRating != null ? (
            <i className="large star icon" style={{ color: "#FFDF00" }}></i>
          ) : (
            <i className="large star icon"></i>
          )}
          {details.averageRating}
        </div>
        <div className="book-menu">
          <h3>Overview:</h3>
          <p>{description}</p>
          <Link to={BookDetailsUrl} >see more </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
