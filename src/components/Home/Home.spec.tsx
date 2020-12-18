import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home display the create event form", () => {
  it("renders a create event title", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Create your Event"
    );
  });
  it("has a Button next", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("button")).toHaveTextContent("NEXT");
  });
  it("renders three h4 subtitles", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(screen.getByRole("heading", { level: 4 })).toHaveLength(3);
  });
});

// describe('Home display the input for add title', ()=> {
//   it('renders an input', () => {
//     render(<Home/>)
//     expect(screen.getByRole('form')).to
//   })
// })

// describe('Test Button', () => {
//   it('')
// }
