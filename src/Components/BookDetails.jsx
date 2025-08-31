import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const {
    author,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = book;

  console.log(book);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[48px] my-8">
      <div className="bg-[#f3f3f3] py-[73px] rounded-lg">
        <img className="h-[564px] my-auto mx-auto" src={image} alt="" />
      </div>

      <div style={{ fontFamily: "Work Sans, sans-serif" }}>
        <div>
          <h2 className="text-[30px] lg:text-[40px] font-bold">{bookName}</h2>
          <p className="my-4 text-[18px]">By : {author}</p>
          <div className="border-b-2 border-b-[#dcdcdc]"></div>
          <p className="my-4 text-[18px]">{category}</p>
          <div className="border-b-2 border-b-[#dcdcdc]"></div>
          <p className="my-4">
            <span className="text-[18px] font-bold">Review: </span> {review}
          </p>
          <div className="text-[18px] flex items-center gap-2">
            <h3 className="font-bold">Tag</h3>
            {tags.map((tag, idx) => (
              <li
                style={{ fontFamily: "Work Sans, sans-serif" }}
                className="bg-[#f4fcf3] rounded-full py-[7px] px-[16px] text-[#23be0a] inline-block "
                key={idx}
              >
                #{tag}
              </li>
            ))}
          </div>
          <div className="border-b-2 border-b-[#dcdcdc] my-5"></div>
        </div>
        <div className="flex gap-10">
          <div>
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div>
            <p className="font-bold">{totalPages}</p>
            <p className="font-bold">{publisher}</p>
            <p className="font-bold">{yearOfPublishing}</p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-5">
          <button className="border-2 border-[#b8b8b8] rounded-lg px-[22px] py-[8px] font-bold">
            Read
          </button>
          <button className="border-2 bg-[#50b1c9] border-[#50b1c9] rounded-lg px-[22px] py-[8px] font-bold text-white">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
