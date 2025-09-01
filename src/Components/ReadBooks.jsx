import { useEffect, useState } from "react";
import ReadBook from "./ReadBook";
import { loadDataLS } from "./Utilities/LocalStorage";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    // data from local storage
    const lSData = loadDataLS();
    if (!lSData.length) {
      setReadBooks([]);
      return;
    }
    const loadDataFromServer = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/booksData.json`;
      const response = await fetch(url);
      const data = await response.json();
      const readBooksList = lSData.map((id) => {
        return data.find((book) => book.bookId == id);
      });
      setReadBooks(readBooksList);
    };
    loadDataFromServer();
  }, []);
  return (
    <div>
      {readBooks.map((book) => (
        <ReadBook book={book} key={book.bookId} />
      ))}
    </div>
  );
};

export default ReadBooks;
