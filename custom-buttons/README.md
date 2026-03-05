# Alert Button Toolbar

## Project Description

This is a simple React application demonstrating component composition, props, state management, and event handling.

The app consists of a Toolbar containing multiple AlertButton components. Each button displays an emoji icon and label, tracks its click count, and opens a Modal displaying a custom message and the icon when clicked.

The project showcases:
- Passing props (`message`, `children`, `icon`) from parent to child components
- Handling events (`onClick`) and state updates in functional components
- Conditional rendering of a Modal based on state

## Running the Project

## ▶️ How to Run the Project
1️⃣ Clone the repository: git clone <repo-url>

2️⃣ Install dependencies
`npm install`

3️⃣ Start the development server
`npm run dev`

4️⃣ Open in browser
Vite will output a local URL, typically:
http://localhost:5173


## Props Handling

### AlertButton Props

 | Prop        | Type                                                | Description                                                                                                |
| ----------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `message`   | `string`                                            | The text message displayed in the modal when the button is clicked                                         |
| `children`  | `React.ReactNode`                                   | The visible label of the button                                                                            |
| `icon`      | `React.ReactNode` (optional)                        | The emoji or JSX icon displayed inside the button and passed to the modal                                  |
| `onTrigger` | `(message: string, icon?: React.ReactNode) => void` | Callback function invoked when the button is clicked, passing the message and icon to the parent component |


### Toolbar Props

| Prop        | Type                                                | Description                                                                                |
| ----------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `onTrigger` | `(message: string, icon?: React.ReactNode) => void` | Passed to each `AlertButton` to handle opening the modal with the correct message and icon |


### Modal Props

| Prop      | Type                         | Description                          |
| --------- | ---------------------------- | ------------------------------------ |
| `message` | `string`                     | The message displayed in the modal   |
| `icon`    | `React.ReactNode` (optional) | Icon displayed alongside the message |
| `onClose` | `() => void`                 | Callback function to close the modal |


This setup allows each AlertButton to maintain its own click count, while the App component manages modal visibility and content, demonstrating proper props drilling and state management in React.