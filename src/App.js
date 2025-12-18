//import { Children } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import Navbar from './components/navbar/Navbar';
import HomePage from './routes/homepage/HomePage';
import Layout from './routes/layout/Layout';
//import List from './components/list/List';
import ListPage from './routes/listPage/ListPage';
import SinglePage from './routes/singlePage/SinglePage';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import NewPostPage from './routes/newPostPage/NewPost';
import ProfilePage from './routes/profile/ProfilePage';

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
    element:<ListPage/>
  },
  {
    path: "/:id",
    element: <SinglePage />,
    
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/newPost",
    element:<NewPostPage/>
  },
  {
    path:"/profile",
    element:<ProfilePage/>
  }

]    }
  ])
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
