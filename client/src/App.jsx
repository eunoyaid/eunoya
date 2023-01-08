import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import FooterSection from "./components/Footer/FooterSection";
import Navbar from "./components/Navbar/NavbarEunoya";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

// membuat layout
const Layout = () =>{
  return(
    <div className="app ">
      <Navbar/>
      <Outlet/>
      <FooterSection/>
    </div>
  )
}

// membuat menu navigasi
const router = createBrowserRouter([
 {
  path:'/',
  element:<Layout/>,
  children:[
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/products/:id",
      element: <Products/>,
    },
    {
      path: "/product/:id",
      element: <Product/>,
    },
    {
      path: "/blogs/:id",
      element: <Blogs/>,
    },
  ]

 }
]);

// fungsi utama
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
