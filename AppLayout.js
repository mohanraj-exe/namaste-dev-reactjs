import { lazy, Suspense, useContext, useEffect, useState } from "react";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
import "./index.css";

import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import ShimmerUI from "./src/components/ShimmerUI";
import UserContext from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

// Lazy loading components
const Grocery = lazy(() => delayForGrocery(import("./src/components/Grocery")));
const About = lazy(() => import("./src/components/About"));

// For Demo purpose - Intentional delay.
const delayForGrocery = (promise) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(promise), 500);
  }).then(() => promise);
};

const AppLayout = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(loggedInUser);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app-layout">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerUI />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
