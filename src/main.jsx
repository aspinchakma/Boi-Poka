import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import ListedBooks from "./Components/ListedBooks.jsx";
import NotFound from "./Components/NotFound.jsx";
import PageToRead from "./Components/PageToRead.jsx";
import Root from "./Components/Root.jsx";
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
      },
      {
        path: "/pagetoread",
        element: <PageToRead />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
