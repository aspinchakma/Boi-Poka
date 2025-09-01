import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const { author, bookName, image, category, rating, tags, bookId } = book;
  return (
    <NavLink to={`/books/${bookId}`}>
      <div className="border-1 border-[#dcdcdc] rounded-lg p-6 flex flex-col">
        <div className="bg-[#f3f3f3] py-[32px] rounded-lg">
          <img className="w-[134px] h-[192px]  mx-auto" src={image} alt="" />
        </div>
        <ul className="flex gap-2 mt-5">
          {tags.map((tag, idx) => (
            <li
              style={{ fontFamily: "Work Sans, sans-serif" }}
              className="bg-[#f4fcf3] rounded-full py-[7px] px-[16px] text-[#23be0a] inline-block"
              key={idx}
            >
              #{tag}
            </li>
          ))}
        </ul>
        <h3 className="text-2xl font-bold my-3 flex-1">{bookName}</h3>
        <p style={{ fontFamily: "Work Sans, sans-serif" }}>By:{author}</p>
        <div className="h-[1px] border-t-2 border-dashed border-[#e6e6e6] my-3"></div>
        <div
          style={{ fontFamily: "Work Sans, sans-serif" }}
          className="flex items-center justify-between mb-2"
        >
          <h3>{category}</h3>
          <div className="flex gap-2 items-center">
            <p>{rating}</p>
            <CiStar className="text-[20px] cursor-pointer" />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;
