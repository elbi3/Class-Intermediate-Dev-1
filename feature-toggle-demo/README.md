# 🚦 Feature Toggle Demo

This project demonstrates conditional rendering in React using props instead of state.
The FeatureToggle component accepts `isEnabled` (boolean) and `featureName` (string) as props.
Based on the value of `isEnabled`, the component dynamically renders either the feature name or a disabled message.
Styling is applied through dynamically generated class names to visually distinguish enabled and disabled features.
The component is reusable and can represent any feature by passing different prop values.
This assignment reinforces understanding of props-driven UI behavior and basic conditional rendering in React. 


## 🛠️ Running the Project

Install dependencies: `npm install`
Run development server: `npm run dev`
Run tests: `npm run vitest`