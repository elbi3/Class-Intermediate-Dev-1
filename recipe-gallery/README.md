# 🍽️ Recipe Gallery App

A simple React application that renders a gallery of recipe cards.
Each recipe displays a title, ingredients list, and image.

This project was built as part of a React fundamentals assignment to practice:

- Component composition
- Mapping arrays into components
- Props
- Asset management
- Basic unit testing with Vitest

## 🚀 Features

- Renders 10 recipe cards dynamically from an array
- Demonstrates reusable Recipe components
- Uses images stored in `public/pictures`
- Includes a basic unit test suite using Vitest and React Testing Library

# 🧩 Component Architecture

The RecipeGallery component maps over an array of recipe objects:

```js
recipes.map((recipe) => (
  <Recipe key={recipe.id} {...recipe} />
))
```
Each Recipe component receives props and renders Title, Image, Ingredient list
This demonstrates React’s core pattern: Data → map() → reusable components

## 🧪 Testing Setup

This project uses:
- Vitest (test runner)
- React Testing Library (component rendering + querying)
- jsdom (browser simulation)

### Why jsdom Is Needed

Vitest runs in Node.js, not in a browser.
Node does not provide `window`, `document`, or DOM APIs like `querySelector`
However, React Testing Library renders components into a DOM.
To solve this, we use: `environment: "jsdom"`--->
`jsdom` is a JavaScript implementation of the browser DOM that runs inside Node.
It provides a simulated browser environment so React components can render during testing.
The execution flow looks like this:

```shell
Vitest (test runner)
   ↓
Node.js
   ↓
jsdom (fake browser DOM)
   ↓
React Testing Library
   ↓
Your React Components
```
This allows us to test UI behavior without launching a real browser.

### Example Test

The test suite verifies that all 10 recipes render:
```js
test("renders 10 recipe cards", () => {
  render(<RecipeGallery />);
  const recipeCards = screen.getAllByTestId("recipe-card");
  expect(recipeCards).toHaveLength(10);
});
```
This ensures that the component renders correctly, the correct number of items are displayed, and the mapping logic works as expected.

## 🛠️ Running the Project

Install dependencies: `npm install`
Run development server: `npm run dev`
Run tests: `npm run vitest`

## 📚 Concepts Demonstrated

- React functional components
- Props and component composition
- Array .map() rendering
- Asset importing in Vite
- Unit testing React components
- Simulated DOM environments (jsdom)

## 🎯 Learning Goals

This project reinforces:
- How React renders dynamic data
- How bundlers handle static assets
- How frontend testing works without a browser
- The role of a test runner vs. a DOM environment