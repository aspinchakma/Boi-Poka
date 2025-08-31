const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-[60p] bg-[#f3f3f3] lg:px-[110px] px-[20px] py-[40px] lg:py-[60px]">
      <div className=" lg:col-span-2">
        <h1 className="lg:text-[56px] text-[40px] font-bold ">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button
          style={{ fontFamily: "Work Sans, sans-serif" }}
          className="bg-[#23be0a] font-bold rounded text-white px-[24px] py-[15px] cursor-pointer mt-4"
        >
          View The List
        </button>
      </div>
      <img
        className="mx-auto lg:ml-auto w-[318px] lg:w-auto"
        src="https://i.ibb.co.com/Kc2LpynZ/book-Banner.png"
        alt=""
      />
    </div>
  );
};

export default Home;
