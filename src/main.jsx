import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookDetails from "./Components/BookDetails.jsx";
import Home from "./Components/Home.jsx";
import ListedBooks from "./Components/ListedBooks.jsx";
import NotFound from "./Components/NotFound.jsx";
import PageToRead from "./Components/PageToRead.jsx";
import ReadBooks from "./Components/ReadBooks.jsx";
import Root from "./Components/Root.jsx";
import WishListBooks from "./Components/WishListBooks.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
        children: [
          {
            path: "/listedBooks",
            element: <ReadBooks />,
          },
          {
            path: "/listedBooks/wishlistBooks",
            element: <WishListBooks />,
          },
        ],
      },
      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
      {
        path: "/books/:bookId",
        loader: async ({ params }) => {
          const url = `https://aspinchakma.github.io/api-for-practice/booksData.json`;
          const response = await fetch(url);
          const data = await response.json();
          const id = params.bookId;
          const result = data.find((book) => book.bookId == id);
          return result;
        },
        element: <BookDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
