import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/homepage/homepage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "list", element: <ListPage /> },
      { path: ":id", element: <SinglePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
