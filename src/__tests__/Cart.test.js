import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import RestaurantMenu from "../components/RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCK_RESTAURANT_MENU from "../mockData/restaurantMenuData.json";

import "@testing-library/jest-dom";
import Cart from "../components/Cart";

// Mock API call
jest.mock("../utils/useRestaurantMenu", () => () => ({
  resTitle: "Amma Mess Chettinadu Unavagam",
  groupedMenu: MOCK_RESTAURANT_MENU,
}));

// Method 1:

// it("Should load Restaurant Menu component", async () => {
//   jest.useFakeTimers();

//   render(
//     <MemoryRouter initialEntries={["/restaurants/637952"]}>
//       <Routes>
//         <Route
//           path="/restaurants/:resId"
//           element={
//             <Provider store={appStore}>
//               <RestaurantMenu />
//             </Provider>
//           }
//         />
//       </Routes>
//     </MemoryRouter>,
//   );

//   // #1
//   const shimmer = screen.getAllByTestId("shimmer-container-test");
//   console.log(shimmer.length);

//   expect(shimmer.length).toBeGreaterThan(0);

//   await act(async () => {
//     jest.runAllTimers();
//   });

//   // #2
//   // const heading = screen.getAllByTestId("restaurantName");
//   // console.log(heading.length);

//   // expect(heading.length).toBeGreaterThan(0);

//   // #3
//   const heading = await screen.findByRole("heading", {
//     name: "Amma Mess Chettinadu Unavagam",
//   });
//   // console.log(heading);
//   expect(heading).toBeInTheDocument();

//   const accordionHeader = screen.getByText("Breakfast");
//   fireEvent.click(accordionHeader);

//   expect(screen.getAllByTestId("foodItems").length).toBe(11);
// });

// Method 2:

it("Should load Restaurant Menu", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <RestaurantMenu />
      </BrowserRouter>
    </Provider>,
  );

  // #1
  // const shimmer = screen.getAllByTestId("shimmer-container-test");
  // console.log(shimmer.length);

  // expect(shimmer.length).toBeGreaterThan(0);

  // #2
  // const heading = screen.getAllByTestId("restaurantName");
  // console.log(heading.length);

  // expect(heading.length).toBeGreaterThan(0);

  // #3
  const heading = screen.getByRole("heading", {
    name: "Amma Mess Chettinadu Unavagam",
  });
  // console.log(heading);
  expect(heading).toBeInTheDocument();

  const accordionHeader = screen.getByText("Breakfast (11)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);
});

it("Should open Restaurant Menu 'Accordion' and have Breakfast food items of 11", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <RestaurantMenu />
      </BrowserRouter>
    </Provider>,
  );

  const accordionHeader = screen.getByText("Breakfast (11)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);
});

it("Should have cart count is 0, before adding items to the cart", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <RestaurantMenu />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
});

it("Should click 'Add +' button from the Breakfast 'Accordion' ", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <RestaurantMenu />
      </BrowserRouter>
    </Provider>,
  );

  const accordionHeader = screen.getByText("Breakfast (11)");
  fireEvent.click(accordionHeader);

  // expect(screen.getAllByTestId("foodItems").length).toBe(11);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // console.log(addBtns.length);

  expect(addBtns.length).toBe(11);
});

it("Should cart count increase", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <RestaurantMenu />
      </BrowserRouter>
    </Provider>,
  );

  const cartCount = screen.getByText("Cart (0)");
  expect(cartCount).toBeInTheDocument();

  const openAccordion = screen.getByText("Breakfast (11)");
  fireEvent.click(openAccordion);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // console.log(addBtns);

  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[10]);

  const cartIncrease = screen.getByText("Cart (3)");
  expect(cartIncrease).toBeInTheDocument();
});

it("Should cart have 'Onion roast' food item in the cart list", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        {/* <RestaurantMenu /> */}
        <Cart />
      </BrowserRouter>
    </Provider>,
  );

  // const addBtns = screen.getAllByRole("button", { name: "Add +" });
  // console.log(addBtns.length);

  // fireEvent.click(addBtns[0]);

  const cartCount = screen.getByText("Cart (3)");
  expect(cartCount).toBeInTheDocument();

  const foodItem = screen.getByText("Onion Roast");
  expect(foodItem).toBeInTheDocument();
});

it("Should cart have cleared", () => {
  render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <Cart />
      </BrowserRouter>
    </Provider>,
  );

  const cartCount = screen.getByText("Cart (3)");
  expect(cartCount).toBeInTheDocument();

  const clearCartBtn = screen.getByRole("button", { name: "Clear cart" });
  fireEvent.click(clearCartBtn);

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();
});
