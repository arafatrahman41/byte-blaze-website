import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Bookmarks from './pages/Bookmarks.jsx';
import MainLayouts from './layouts/MainLayouts.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs/>
      },
      {
        path: '/bookmarks',
        element: <Bookmarks/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    {/* <App /> */}
  </>,
)
