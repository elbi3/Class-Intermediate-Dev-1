# Assignment: Building a Recipe Gallery in React

Objective: 

Develop a Recipe Gallery using React to display a curated list of recipes, focusing on rendering static data. This  assignment emphasizes understanding list rendering in React without involving state management or interactivity. Note:  This assignment can be completed using Vite or Expo, but the instructions below are specifically tailored for Vite. 
---

Assignment Details: 

`npm create vite@latest recipe-gallery -- --template react`

Create a `RecipeGallery.jsx` component that will be responsible for rendering the gallery of recipes.
Recipe Data: 
Inside the RecipeGallery component or in a separate data file, define a constant array named recipes.  Each element in the array should represent a recipe and can be an object with properties like id, title,  ingredients, and image (URL to an image). 
Example recipe object: { id: 1, title: "Spaghetti Carbonara", ingredients:  ["Pasta", "Eggs", "Cheese", "Bacon"], image:  
"https://example.com/carbonara.jpg" }. 

Rendering the Gallery: 
Use the map() function to iterate over the recipes array and return a JSX structure for each recipe. Consider  using a card layout to display each recipe's title, a list of ingredients, and an image. 
Ensure each recipe card in the gallery has a unique key prop, ideally using the recipe's id. 
Styling: (Optional) 
Apply CSS to style the gallery and recipe cards. You can use inline styles, CSS stylesheets (e.g., App.css), or  CSS-in-JS libraries like styled-components to make your gallery visually appealing. 
Ensure the layout is responsive and looks good on different screen sizes. Consider using CSS Grid or Flexbox for  the layout.
---

## Relevant Study Material
W3Schools: React Lists and KeysLinks to an external site.
https://www.w3schools.com/react/react_lists.asp

Links to an external site.W3Schools: JavaScript Array .map() MethodLinks to an external site.
https://www.w3schools.com/jsref/jsref_map.asp


## Submission
GitHub Repository: Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.

Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)