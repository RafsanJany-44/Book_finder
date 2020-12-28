import axios from "axios";

const googleBooks = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTitle = (
  searchTitle,
  setBooks,
  startIndex,
  setTotalPage,
  orderBy
) => {
  googleBooks
    .get("/volumes/", {
      params: {
        q: searchTitle,
        startIndex: startIndex,
        maxResults: 20,
        orderBy: orderBy,
      },
    })
    .then((response) => {
      setBooks(response.data.items);
      setTotalPage(Math.ceil(response.data.totalItems / 20));
    })
    .catch((error) => console.log(error));
};

const getSingleBookById = (BookId, setBook) => {
  const BookDetailsUrl = "/volumes/" + BookId;
  googleBooks
    .get(BookDetailsUrl)
    .then((response) => {
      setBook(response.data.volumeInfo);
    })
    .catch((error) => console.log(error));
};

export { getBooksByTitle, getSingleBookById };
