import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Shop, AboutUs, Blog, ContactUs } from './pages';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/shop',
      element: <Shop/>
    },
    {
      path: '/aboutus',
      element: <AboutUs/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: '/contact',
      element: <ContactUs/>
    },

  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
