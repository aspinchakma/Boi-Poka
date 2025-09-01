import { NavLink, Outlet } from "react-router-dom";
import "./ListedBooks.css";

const ListedBooks = () => {
  return (
    <div>
      <h2>Books</h2>
      <div className="listedBookContainer my-5 flex">
        <NavLink end to={`/listedBooks`}>
          Read Books
        </NavLink>
        <NavLink to={`/listedBooks/wishlistBooks`}>Wishlist Books</NavLink>
        <div className="border-b-2 border-b-[#b8b8b8] flex-1"></div>
      </div>
      <Outlet />
    </div>
  );
};

export default ListedBooks;
