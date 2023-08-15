import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("app has title element", () => {
  render(<App />);
  const titles = screen.getAllByText("The Schoep Project");
  expect(titles).toHaveLength(2);
});
