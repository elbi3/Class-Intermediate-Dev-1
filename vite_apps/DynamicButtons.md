# Assignment: Dynamic Alert Buttons with Props

Objective
Extend the previous assignment: custom alert buttons React component to create a versatile toolbar with buttons that display different alert messages when clicked, demonstrating how to read and use props within event handlers.

 

Requirements:
Dynamic Button Creation:

Modify the Toolbar component to render a list of AlertButton components based on an array of button properties (e.g., [{ message: 'Downloading!', children: 'Download File' }, ...]).
Customizable Alert Messages:

Ensure each AlertButton can display a custom alert message when clicked, as defined in the button properties array.
Versatile Button Text:

Use the children prop to set the display text for each button dynamically.
Setup Instructions:
Use the provided code in your React application. If you don't have one set up, create a new one using Create React App:

npx create-react-app alert-buttons-assignment
cd alert-buttons-assignment
npm start
Implement the assignment requirements within the Toolbar component or create new components as necessary.
Tasks:
Define an array of button properties within the Toolbar component. Each item in the array should be an object containing message and children properties.

Use the array to dynamically render AlertButton components inside the Toolbar. Map over the array and pass each item's message and children to the AlertButton as props.

Ensure that clicking on each button displays an alert with the corresponding message.

Example Button Properties Array:
const buttons = [
  { message: 'Downloading!', children: 'Download File' },
  { message: 'Sharing!', children: 'Share Document' },
  // Add more button objects as needed
];
Enhanced Toolbar Component:
Implement the dynamic rendering of AlertButton components based on the buttons array. Use the .map() function to iterate over the array and render an AlertButton for each item.

 

## Submission
GitHub Repository: Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.

Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)