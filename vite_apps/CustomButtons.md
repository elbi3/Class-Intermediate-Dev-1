# Assignment: Custom Alert Buttons in React

Objective:
Create a React application with a Toolbar component that contains multiple AlertButton components. Each button should display a unique alert message when clicked, demonstrating the use of props and event handlers in React.

 

Requirements:
Component Structure:

Implement an AlertButton component that takes message and children as props.
Develop a Toolbar component that renders multiple AlertButton components.
Props and Event Handling:

The AlertButton component should display an alert with the provided message prop when clicked.
Use the children prop to set the button's display text.
Dynamic Behavior:

Ensure that each AlertButton in the Toolbar displays a different message in the alert when clicked, based on its message prop.
Setup Instructions:
Create a new React application using Create React App, if not already set up:

bashCopy code
npx create-react-app alert-button-toolbar cd alert-button-toolbar npm start
Implement the AlertButton and Toolbar components in either separate files or within the App.js file, based on your preference.

Tasks:
Create the AlertButton Component:

This component should accept message and children as props.
Attach an onClick event handler to the button that triggers an alert displaying the message prop content.
The button's visible text should be set to the children prop content.
Build the Toolbar Component:

Render at least two AlertButton components with different message and children props.
You can choose any messages and button texts that you like for demonstration.
Testing:
Ensure that clicking each button in the toolbar triggers an alert with the correct message corresponding to the button clicked.
 

## Submission
GitHub Repository: Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.

Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)