import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import mockData from "../mockData/restaurantCardData.json";
import "@testing-library/jest-dom";

it("Should Restaurant card component with props Data", () => {
  render(<RestaurantCard {...mockData} />);

  const rating = screen.getByRole("heading", { name: /Rating: 4.5/i });
  expect(rating).toBeInTheDocument();
});

// assignment
it("Should Restaurant card component with promoted label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log(RestaurantCardPromoted);
 
  render(<RestaurantCardPromoted {...mockData}/>);

  const title = screen.getByRole("heading", { name: "Promoted" });
  expect(title).toBeInTheDocument();
});
