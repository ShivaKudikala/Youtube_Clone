import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Login from "./components/Login.jsx";
import Register from './components/Register.jsx';
import ChannelPage from './components/ChannelPage.jsx';
import VideoList from './components/VideoList.jsx';

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Default component on the root route
        element: <VideoList />
      },
      {
        path: "channelPage",
        element: <ChannelPage />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoutes} />
  </StrictMode>
);
