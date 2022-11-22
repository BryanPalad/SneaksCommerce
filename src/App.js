import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/shop',
      element: 'Shop'
    },
    {
      path: '/aboutus',
      element: 'About Us'
    },
    {
      path: '/blog',
      element: 'Blog'
    },
    {
      path: '/contact',
      element: 'ContactUs'
    },

  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
