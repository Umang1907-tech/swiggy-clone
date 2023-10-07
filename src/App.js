import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Restaurantmenu from "./components/Restaurantmenu";
import Profile from "./components/Profileclass";
import Instamart from "./components/Instamart";
import Usercontext from "./utils/Usercontext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Carousel from "./components/Carousel";
const About = lazy(() => import("./components/About"));

const Applayout = () => {
  const [loginuser, setLoginuser] = useState({
    name: "Umang Nikhare",
    email: "unikhare99@gmail.com",
  });
  return (
    <Provider store={store}>
      <Usercontext.Provider
        value={{
          user: loginuser,
          setUser: setLoginuser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </Usercontext.Provider>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [{ path: "profile", element: <Profile /> }],
      },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurants/:resid", element: <Restaurantmenu /> },
      { path: "/collections/:resid", element: <Carousel /> },
      { path: "/instamart", element: <Instamart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
