import { render, screen } from "@testing-library/react";
import ContactUs from "../components/ContactUs";
import "@testing-library/jest-dom";

// To group multiple test cases under one name.
describe("Contact us page test cases", () => {

  // can use 'it' or 'test' 
  it("should load contact us component", () => {
    render(<ContactUs />); // renders contact component to the JS dom. 

    // Querying
    // const heading = screen.getAllByRole("heading");
    const heading = screen.getByRole("heading");
    // screen is an object that has access to the rendered DOM.

    // Assertion
    expect(heading).toBeInTheDocument(1);
  });

  test("should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByRole("button");
    // const button = screen.getByText("Random");
    // const button = screen.getByPlaceholderText("Enter your name...");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("should load two input boxes on the contact us component", () => {
    render(<ContactUs />);

    const textboxes = screen.getAllByRole("textbox");
    console.log(textboxes); // It is a 'React' element/React fiber/Virtual DOM object
    // console.log(textboxes.length); // 2
    
    expect(textboxes.length).toBe(3);
  });
});
