import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { getSingleBookById } from "./api/googleBook";

const BookDetails = ({ match, history }) => {
  const BookId = match.params.id;
  const [book, setBook] = useState({});

  useEffect(async () => {
    await getSingleBookById(BookId, setBook);
  }, []);

  console.log(book);
  return (
    <div className="book-result">
      <Header title="BookDetails" />

      <div className="ui grid" style={{ marginLeft: "5%" }}>
        <div className="five wide column">
          {book.imageLinks == undefined ? (
            <img
              src="https://picsum.photos/id/1040/200/300"
              style={{ height: "512px", marginRight: "212px" }}
            />
          ) : (
            <img
              src={book.imageLinks.thumbnail}
              style={{ height: "512px", marginRight: "112px" }}
            />
          )}
        </div>
        <div className="ten wide column">
          
          <h3 className="ui header">
            <div className="content">
              {book.title}
              <div class="sub header">{book.subtitle}</div>
            </div>
          </h3>
          {book.authors == "" ? (
            ""
          ) : (
            <div style={{ display: "inline-flex", marginBottom: "12px" }}>
              <i className="user icon"></i>
              <div className="ui content">
                <h4>Author(s):</h4>
                {book.authors}
              </div>
            </div>
          )}
          {book.description == undefined ? (
            ""
          ) : (
            <div style={{ display: "inline-flex", marginBottom: "12px" }}>
              <h4>Description:</h4>
              <p>{book.description}</p>
            </div>
          )}
          {book.language == undefined ? (
            ""
          ) : (
            <div style={{ marginBottom: "12px" }}>
              <h4>
                Language: <div className="ui large label">{book.language}</div>
              </h4>
            </div>
          )}
          {book.publishedDate == undefined ? (
            ""
          ) : (
            <div style={{ display: "inline-flex", marginBottom: "12px" }}>
              <i class="calendar  icon"></i>
              <div className="ui content">
                <h4>Published Date: {book.publishedDate}</h4>
                <b>Publisher:</b>
                {book.publisher}
              </div>
            </div>
          )}

          <div style={{ marginTop: "12%" }}>
            <button
              className="ui primary button"
              onClick={() => history.goBack()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
