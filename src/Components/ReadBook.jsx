import { BiFileBlank } from "react-icons/bi";
import { CiLocationOn, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const ReadBook = ({ book }) => {
  const {
    image,
    bookName,
    category,
    publisher,
    rating,
    tags,
    yearOfPublishing,
    author,
    totalPages,
    bookId,
  } = book;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-5 border-2 border-[#dcdcdc] p-5 rounded-lg ">
      <div className="bg-[#f3f3f3] rounded-lg flex justify-center items-center py-[29px] lg:py-0">
        <img className="lg:h-[172px] h-[320px]" src={image} alt="" />
      </div>
      <div className="lg:col-span-3">
        <h3 className="text-2xl font-bold mb-3">{bookName}</h3>
        <div style={{ fontFamily: "Work Sans, sans-serif" }}>
          <p>By: {author}</p>
          <ul className="flex gap-2 my-3 lg:items-center text-base lg:flex-row flex-col ">
            <span className="font-bold">Tags: </span>
            {tags.map((tag, idx) => (
              <li
                style={{ fontFamily: "Work Sans, sans-serif" }}
                className="bg-[#f4fcf3] rounded-full py-[7px] px-[16px] text-[#23be0a] inline-block w-fit"
                key={idx}
              >
                #{tag}
              </li>
            ))}
            <li className="flex items-center">
              <CiLocationOn className="mr-1" />
              Year of Publishing: {yearOfPublishing}
            </li>
          </ul>
          <div>
            <div className="flex lg:flex-row gap-5 flex-col">
              <p className="flex gap-2 items-center text-[#717171]">
                <CiUser className="text-[24px]" /> Publisher: {publisher}
              </p>
              <p className="flex gap-2 items-center text-[#717171]">
                <BiFileBlank className="text-[24px]" /> Page: {totalPages}
              </p>
            </div>
            <div className="border-b-2 border-b-[#dcdcdc] my-4"></div>
            <div className="flex gap-2 lg:items-center flex-col lg:flex-row">
              <p className="bg-[#e1eeff] px-[16px] py-[8px] rounded-full text-[#328eff] ">
                Category: {category}
              </p>
              <p className="bg-[#fff3e1] px-[16px] py-[8px] rounded-full text-[#ffac33] ">
                Rating: {rating}
              </p>
              <NavLink
                to={`/books/${bookId}`}
                className="py-2 px-5 bg-[#23be0a] rounded-full text-white mx-auto lg:mx-0"
              >
                View Details
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
