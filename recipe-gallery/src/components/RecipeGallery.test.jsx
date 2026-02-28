import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom";
import RecipeGallery from "./RecipeGallery";

test("renders recipe titles", () => {
  render(<RecipeGallery />);

  expect(screen.getByText("Spaghetti Carbonara")).toBeInTheDocument();
  expect(screen.getByText("Chicken Alfredo")).toBeInTheDocument();
});

test("renders 10 recipe cards", () => {
  render(<RecipeGallery />);

  const recipeCards = screen.getAllByTestId("recipe-card");

  expect(recipeCards).toHaveLength(10);
});