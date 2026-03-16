# Event Propagation Assignment

## Description

This project demonstrates **event propagation (bubbling)** in a React application. It contains a nested UI structure with an outer container and an inner button, each with its own click handler. The inner button uses `event.stopPropagation()` to prevent the click event from bubbling up to the outer container, ensuring that only the intended handler runs.

## How to Run the Project

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm run dev
```

3. Open the local development URL shown in the terminal (usually `http://localhost:5173`) in your browser.
