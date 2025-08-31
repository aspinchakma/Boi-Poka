import { useEffect, useState } from "react";
import Book from "./Book";
import BooksSkeleton from "./BooksSkeleton";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const url = `https://aspinchakma.github.io/api-for-practice/booksData.json`;
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <h3 className="text-5xl font-bold text-center">Books</h3>

      {books.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-9">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      ) : (
        <BooksSkeleton />
      )}
    </div>
  );
};

export default Books;
