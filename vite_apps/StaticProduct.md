# Assignment: Creating a Static Product List in React

Objective:
Build a static product list display using React, focusing on rendering a list from a provided dataset without involving state management.

Assignment Details:
setup Vite project

Create a ProductList component that will be responsible for rendering the list of products.
Product Data:

Define a constant array named products in the ProductList component or in a separate data file. Each element in the array should represent a product and can be an object with properties like id, name, description, and price.
Example product object: { id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200 }.
Rendering the List:

Use the map() function to iterate over the products array and return a JSX structure for each product. This could be a simple div or a more complex structure like a card that displays the product's name, description, and price.
Ensure each product element in the list has a unique key prop, ideally using the product's id.
Styling: (Optional)

Apply CSS to style the list and product items. You can use inline styles, CSS stylesheets, or CSS-in-JS libraries like styled-components to make your list visually appealing.
Aim for a clean and organized layout, where each product's information is easy to read and distinguish from others.


## Submission
Complete source code for the ProductList component and any other components or utilities you create.
A README file that includes:
Instructions on how to view the product list (i.e., how to run your React application).
A brief description of the layout and styling choices you made.

Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)