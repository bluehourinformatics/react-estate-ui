import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/homepage/homepage";
import ListPage from "./routes/listPage/listPage";
import { Layout, RequireAuth } from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/register";
import Login from "./routes/loginPage/login";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      { path: "/list", element: <ListPage /> },
      { path: "/:id", element: <SinglePage /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <RequireAuth />,
    children: [
      {
        path: "profile",
        element: <ProfilePage />,
        // loader: profilePageLoader,
      },
      {
        path: "profile/update",
        element: <ProfileUpdatePage />,
      },
      // {
      //   path: "/add",
      //   element: <NewPostPage />,
      // },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
