import { useEffect, useState } from "react";
import NoSelectedData from "./NoSelectedData";
import ReadBook from "./ReadBook";
import { loadDataLS } from "./Utilities/LocalStorage";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const [sort, setSort] = useState("Sort By");
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

  const sortedByRatings = () => {
    setSort("Ratings");
    const newReadingList = [...readBooks];
    newReadingList.sort(
      (firstBook, SecondBook) => SecondBook.rating - firstBook.rating
    );
    setReadBooks(newReadingList);
  };
  const sortedByNumberOfPages = () => {
    setSort("Number of Pages");
    const newReadingList = [...readBooks];
    newReadingList.sort(
      (firstBook, secondBook) => firstBook.totalPages - secondBook.totalPages
    );
    setReadBooks(newReadingList);
  };
  const sortedByPublishedYear = () => {
    setSort("Published Year");
    const newReadingList = [...readBooks];
    newReadingList.sort(
      (firstBook, secondBook) =>
        firstBook.yearOfPublishing - secondBook.yearOfPublishing
    );
    setReadBooks(newReadingList);
  };
  return (
    <>
      <div className="my-5 w-fit mx-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {sort}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={sortedByRatings}>
              <a>Ratings</a>
            </li>
            <li onClick={sortedByNumberOfPages}>
              <a>Number of Pages</a>
            </li>
            <li onClick={sortedByPublishedYear}>
              <a>Publisher Yer</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        {readBooks.length ? (
          <div>
            {readBooks.map((book) => (
              <ReadBook book={book} key={book.bookId} />
            ))}
          </div>
        ) : (
          <NoSelectedData />
        )}
      </div>
    </>
  );
};

export default ReadBooks;
