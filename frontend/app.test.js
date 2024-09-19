import { render, screen } from "@testing-library/react";
import StoreInfo from "../components/javans_components/store_information/StoreInfo";

test("renders Store Information page", () => {
  render(<StoreInfo />);
  const linkElement = screen.getByText(/Store Information/i);
  expect(linkElement).toBeInTheDocument();
});
