import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
// import UserContext from "../utils/userContext";
import "@testing-library/jest-dom";

// it("Should renders the logo with correct alt text", () => {
//   render(<Provider store={appStore}>
//       <BrowserRouter>
//         <Header />
//       </BrowserRouter>
//     </Provider>,);

//   const logo = screen.getByAltText(/logo/);
//   console.log(logo);
    
//   expect(logo).toBeInTheDocument();
// });

it("Should render Header component with a login button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  // Querying
  // const loginButton = screen.getByRole("button");
  // const loginButton = screen.getByText("Login");
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should have cart item is 0", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const cartItems = screen.getByText("Cart (0)");
  expect(cartItems).toBeInTheDocument();
});

it("Should have Header component with a cart item ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const cartItems = screen.getByText(/Car/);
  expect(cartItems).toBeInTheDocument();
});

it("Should have Header component with a cart item ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const cartItems = screen.getByText(/Car/);
  expect(cartItems).toBeInTheDocument();
});

it("Should change 'Login' button to 'Logout' button", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>,
  );

  const logInButton = screen.getByRole("button", { name: "Login" });
  
  fireEvent.click(logInButton);
  
  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});
