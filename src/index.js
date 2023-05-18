import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './Components/Form/Registration/Registration/Registration';
import Login from './Components/Form/LoginPage/LogIn/LoginPage';
import HomePage from './Components/HomePage/HomePage';
import { Redirect } from 'react-router-dom';
import  {Route } from 'react-router-dom'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import UserProfilePage from './Components/UserProfilePage/UserProfilePage';
import MiddleSectionMain from './Components/HomePageMiddleSection/MiddleSectionMain/MiddleSectionMain';
import TweetPage from './Components/TweetPage/TweetPage';






const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
  },
  {
    path: "/Registration",
    element: <Registration />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/ProfilePage/:id",
    element: <ProfilePage/>,
  },
 
  {
    path: "/UserProfilePage",
    element: <UserProfilePage />,
  },
  {
    path: "/TweetPage",
    element: <TweetPage />,
  },
 
  
]);

root.render(
  <RecoilRoot>
    
   <RouterProvider router={router} />

  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
