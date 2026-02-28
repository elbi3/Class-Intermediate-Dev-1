# Assignment: Creating a Feature Toggle Component in React

Overview 

In this assignment, you will develop a simple "Feature Toggle" component in React that demonstrates conditional  rendering based on props passed to the component, avoiding the use of state management. This will help you understand  how to control the display of elements in a React component based on external conditions. Please note: while this  assignment can be completed using Vite or Expo, the instructions below are specifically tailored for Vite. 

Objective 

Understand and implement conditional rendering based on props. 
Create a reusable "Feature Toggle" component that can be used to enable or disable features in an application. 
Assignment Tasks 

## Setup Your React Environment 
Open your terminal and run: `npm create vite@latest feature-toggle-demo -- --template react` 

## Create the FeatureToggle Component 
In the src directory, create a new file named `FeatureToggle.jsx` 
Define a functional component FeatureToggle that accepts props. 
Implement Conditional Rendering Based on Props 
The FeatureToggle component should accept two props: isEnabled (a boolean) and featureName (a  string). 
The component should render the featureName if isEnabled is true. If isEnabled is false, the  component should render: "Feature [featureName] is disabled". 
Use the FeatureToggle Component in App.jsx 
In App.jsx, import the FeatureToggle component. 
Render the FeatureToggle component multiple times with different isEnabled and featureName props to simulate different features being enabled or disabled.

## Relevant Study Material
W3Schools: React Props TutorialLinks to an external site. 
https://www.w3schools.com/react/react_props.asp
W3Schools: React Conditional RenderingLinks to an external site.
https://www.w3schools.com/react/react_conditional_rendering.asp

VIDEO:
https://www.youtube.com/watch?v=aoLYYqjIQQw
React Events and If ConditionsLinks to an external site.

This video provides a practical walkthrough of conditional rendering and event handling in React, aligning with the "Feature Toggle" assignment requirements.


## Submission
GitHub Repository: Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.

Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)