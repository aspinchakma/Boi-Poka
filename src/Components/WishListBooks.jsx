import { useEffect, useState } from "react";
import ReadBook from "./ReadBook";
import { loadWishList } from "./Utilities/LocalStorage";

const WishListBooks = () => {
  const [wishlistBooks, setWishlistBooks] = useState([]);
  useEffect(() => {
    const wishList = loadWishList();
    if (!wishList.length) {
      setWishlistBooks([]);
      return;
    }
    const loadData = async () => {
      const url = `https://aspinchakma.github.io/api-for-practice/booksData.json`;
      const res = await fetch(url);
      const data = await res.json();
      const wishListBooks = wishList.map((id) => {
        return data.find((book) => book.bookId == id);
      });
      setWishlistBooks(wishListBooks);
    };

    loadData();
  }, []);
  return (
    <div>
      <h3>This is wish list books</h3>
      <div>
        {wishlistBooks.map((book) => (
          <ReadBook book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default WishListBooks;
