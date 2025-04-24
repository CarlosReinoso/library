import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WebsiteBy from "../WebsiteBy";

describe("WebsiteBy", () => {
  it("renders the component with correct text", () => {
    render(<WebsiteBy />);

    // Check if the text is present
    expect(screen.getByText(/Website by/i)).toBeInTheDocument();
    expect(screen.getByText(/Carlos Reinoso/i)).toBeInTheDocument();
  });

  it("contains a link with correct href", () => {
    render(<WebsiteBy />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://carlosreinoso.co.uk/web-dev");
  });

  it("has the correct styling classes", () => {
    render(<WebsiteBy />);

    // Check for the main container classes
    const container = screen.getByText(/Website by/i).closest("div");
    expect(container?.parentElement).toHaveClass("bg-primary", "py-6");
  });
});
