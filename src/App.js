//import { Children } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Navbar from './components/navbar/Navbar';
import HomePage from './routes/homepage/HomePage';
import {Layout, RequireAuth} from './routes/layout/Layout';
//import List from './components/list/List';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import NewPostPage from './routes/newPostPage/NewPost';
import ProfilePage from './routes/profile/ProfilePage';
import ProfileUpdatePage from './routes/profileUpdatePage/ProfileUpadatePage';
import { favoritePageLoader, listPageLoader, profilePageLoader, singlePageLoader } from './lib/loader';
import FavoritesPage from './routes/favorites/FavoritesPage';

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[{
        path:"/",
        element:<HomePage/>,

      }
    ,
  {
    path:"/list",
    element:<ListPage/>,
    loader: listPageLoader,
  },
  {
    path: "/:id",
    element: <SinglePage />,
    loader: singlePageLoader,
  
  },
  {
    path:"/favorites",
    element: <FavoritesPage/>,
    loader: favoritePageLoader,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>
  },
],
},
{
  path: "/",
  element: <RequireAuth/>,
   children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
}
  ])
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
