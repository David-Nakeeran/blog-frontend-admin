import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Error from "./components/Error";
import Login from "./pages/Login";
import Home, {loader as homeLoader} from "./pages/Home";
import PostDetail, {loader as postDetailLoader} from "./pages/PostDetail";
import PostList, {loader as postListLoader} from "./pages/PostList";
import PostEdit, {loader as postEditLoader} from "./pages/PostEdit";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <Error />, 
          loader: homeLoader
        },
        {path: 'login', element: <Login />},
        {path: 'admin', element: <AdminLayout />,
          children: [
            {index: true, element: <AdminDashboard />},
            {index: true, element: <PostList />, loader: postListLoader},
            {index: true, element: <PostDetail />, loader: postDetailLoader},
            {index: true, element: <PostEdit />, loader: postEditLoader}

          ]
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
