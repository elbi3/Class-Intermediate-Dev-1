# Assignment: Nested Button Clicks

Create a React component that consists of nested buttons. 
The inner button click should trigger its event handler without triggering the event handler of the outer button, demonstrating the stopping of event propagation.
---
## Requirements:

### Nested Buttons:

- Design a component with two buttons, one nested inside the other.

### Event Handlers:

- Attach separate click event handlers to both the inner and outer buttons.

### Stopping Propagation:

- Ensure that clicking the inner button only triggers its handler and does not propagate to the outer button's handler.

### - Feedback:

Display feedback messages to indicate which button's handler is triggered.


## Setup Instructions:
If you haven't already, create a new React application using Create React App: 
```shell
npx create-react-app event-propagation-assignment`
cd event-propagation-assignment
npm start
``` 
- Create a new file NestedButtons.js in the src directory
- Import and use the NestedButtons component in your App.js
 

## Tasks:
- Implement the handleInnerClick function in NestedButtons.js to stop the click event from propagating to the outer button when the inner button is clicked.
- Test the application by clicking both the inner and outer buttons. Verify that clicking the inner button does not trigger the outer button's event handler.
---

## Submission
GitHub Repository: Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.

Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:
Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)

Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)