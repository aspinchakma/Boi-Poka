import { Bounce, toast } from "react-toastify";

const loadDataLS = () => {
  const data = localStorage.getItem("readlist");
  if (!data) {
    return [];
  }
  const arrayData = JSON.parse(data);
  return arrayData;
};

const addToLS = (id) => {
  const data = loadDataLS();
  const isInclude = data.includes(id);

  if (!isInclude) {
    data.push(id);
    toast.success("Successfull Added !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } else {
    toast.error("Already Added !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  // add to local storage
  localStorage.setItem("readlist", JSON.stringify(data));
};

// wish list

const loadWishList = () => {
  const wishlist = localStorage.getItem("wish-list");
  if (wishlist) {
    const wishlistArray = JSON.parse(wishlist);
    return wishlistArray;
  } else {
    return [];
  }
};

const addWishListLS = (id) => {
  const wishList = loadWishList();

  if (wishList.includes(id)) {
    toast.error("Already Added !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  } else {
    wishList.push(id);
    localStorage.setItem("wish-list", JSON.stringify(wishList));
    toast.success("Successfull Added !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }
};

export { addToLS, addWishListLS, loadDataLS, loadWishList };
