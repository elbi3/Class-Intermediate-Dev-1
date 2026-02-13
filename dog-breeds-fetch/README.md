# Dog Breeds Fetch Application

## Overview

This project is a full-stack Express.js application that retrieves and displays data from the Dog API.

The application demonstrates:
- Server-side fetching using the Fetch API
- JSON parsing and response handling
- Error handling for API failures
- Dynamic route parameters
- Server-side rendering using EJS templates
- Modular Express application architecture

The application allows users to:
- View a list of dog breeds
- Click a breed to view detailed information
- Fetch and display dog facts
- Fetch and display dog groups

## Architecture

The application follows a modular Express structure:

```shell
dog-breeds-fetch/
│
├── app.js
├── package.json
├── README.md
│
├── bin/
│   └── www.js
│
├── routes/
│   └── dogs.js
│
├── views/
│   ├── layout.ejs
│   ├── breeds.ejs
│   ├── breed-details.ejs
│   └── error.ejs
│
└── public/
```

## Key Components

`app.js` – Configures middleware, view engine, and route mounting
`bin/www.js` – Server entry point
`routes/dogs.js` – Handles API proxying and route logic
`views/` – EJS templates for server-side rendering

## Features
### Part 1: Basic Fetch Request

- Uses the Fetch API on the server to send a GET request to:
` https://dogapi.dog/api/v2/breeds`
- Parses the response as JSON
- Logs breed data to the server console
- Renders breed names in an HTML list

### Part 2: Handling Responses

- Checks response.ok before processing data
- Throws errors for failed requests
- Uses Express error middleware
- Displays an error page if the API is unavailable

### Part 3: Detailed Breed Information

- Implements dynamic routing using: `/breeds/:id`
- Fetches breed details using the selected breed ID
- Displays:
    - Breed name
    - Description
    - Life span
    - Additional attributes (when available)

### Part 4: Interactive Breed Selection

- Renders each breed as a clickable link
- Clicking a breed navigates to: `/breeds/{id}`
- Displays structured detail information using EJS templates

### Part 5: Dog Facts and Groups

Fetches dog facts using: `/facts`
Fetches dog group information using: `/groups`
Displays results in structured HTML format

## Error Handling

The application includes:
Validation of external API responses (response.ok)
Graceful error handling using Express middleware
User-facing error page rendering
Handling of invalid breed IDs
Handling of network or API outages

## Installation

1. Clone the repository:
```shell
git clone <your-repo-url>
cd dog-breeds-fetch
```
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open in browser: `http://localhost:3000/breeds`

## Technologies Used

Node.js
Express.js
EJS (Embedded JavaScript Templates)
Fetch API (server-side)
ES Modules

## Educational Objectives

This project demonstrates:

Separation of concerns in Express applications
Modular route handling
Server-side rendering with template engines
REST-style routing with dynamic parameters
Integration with third-party APIs
Robust error handling strategies

## Future Improvements

Client-side interactivity using React
API response caching
Pagination for large breed lists
Styling enhancements
Deployment configuration