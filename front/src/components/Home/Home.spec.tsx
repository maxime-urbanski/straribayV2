import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home display the create event form", () => {
  it("renders a create event title", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
      "Create your Event"
    );
  });
  it("has a Button next", () => {
    render(<Home />);
    expect(screen.getByRole("button")).toHaveTextContent("NEXT");
  });
  it("renders three h4 subtitles", () => {
    render(<Home />);
    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(3);
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
