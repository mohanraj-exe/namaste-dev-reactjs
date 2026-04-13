import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router-dom";
// import MOCK_DATA from "../mockData/restaurantCardData.json"; // replace this json file list of res cards
import "@testing-library/jest-dom";

// In case if we use 'fetch' API
// global.fetch = () => {
//     return Promise.resolve({
//         json: () => Promise.resolve(MOCK_DATA)
//     });
// }

it("Should search Res List for pizza text input", async () => {
  jest.useFakeTimers();

  // Rendering component
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>,
  );

  await act(async () => {
    jest.runAllTimers();
  });

  // screen should have no. of res cards
  const cardsBefore = screen.getAllByTestId("resCard");
  expect(cardsBefore.length).toBe(18);

  // Querying
  const searchBtn = screen.getByRole("button", { name: "Search" });
  // console.log(searchBtn);

  const searchInput = screen.getByTestId("searchInput");
  // console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  // Assertion
  // expect(searchBtn).toBeInTheDocument();
  // expect(searchInput).toBeInTheDocument();

  // screen should 3 res cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toEqual(3);
});

it("Should search Res List of rating above 4.5", async () => {
  jest.useFakeTimers();

  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  await act(async () => {
    jest.runAllTimers();
  });

  // Querying
  const beforeBtnClick = screen.getAllByTestId("resCard");
  
  // Assertion
  expect(beforeBtnClick.length).toBe(18);

  // Querying
  const topRatedBtn = screen.getByRole("button", { name: "Top Rated restaurants" });
  fireEvent.click(topRatedBtn);

  // Querying
  const afterBtnClick = screen.getAllByTestId("resCard");
  
  // Assertion
  expect(afterBtnClick.length).toBe(7);
});
