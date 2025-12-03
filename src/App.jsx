
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
// import Navbar from './Componnets/Navbar'
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path:"/Home",
      element:<><Home/></>,
    },
    {
        path:"/Menu",
      element:<><Menu/></>
      
    },
     {
        path:"/About",
      element:<><About/></>
    },

    {
        path:"/Contact",
      element:<><Contact/></>
    },
  ]);

  return (
    <>

    
    <RouterProvider router={router}/>
    </>
  )
}

export default App
