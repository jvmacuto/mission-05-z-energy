//test app.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("check if My App is in the document", () => {
  render(<App />);
  const linkElement = screen.getByText(/My App/i);
  expect(linkElement).toBeInTheDocument();
});
