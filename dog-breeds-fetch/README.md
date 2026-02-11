# Dog Facts API

A simple Express.js API that serves dog facts from a local data file.
This project demonstrates how to handle query parameters and validate user input using Zod.

## Overview

The API exposes a single endpoint: `GET /facts`

- If no query parameter is provided, it returns all dog facts.
- If a number query parameter is provided, it returns that many facts.
- Invalid query parameters result in a 400 Bad Request.

This project is intentionally simple and designed to demonstrate:

- Express routing
- Query parameter handling
- Input validation with Zod
- Clean API response structure

## Endpoint

`GET /facts`

| Parameter | Type               | Description                                    |
| --------- | ------------------ | ---------------------------------------------- |
| `number`  | integer (positive) | Optional. Limits the number of facts returned. |

## Example Requests

Return all facts: `GET /facts`
Return 3 facts: `GET /facts?number=3`
Invalid request: `GET /facts?number=banana`
Response: 
```json
{
  "error": "Invalid query parameters"
}
```

## Installation

1. Clone the repository:
```shell
git clone <your-repo-url>
cd <project-folder>
```
2. Install dependencies: `npm install`
Running the Server

3. Start the development server: `npm start`
The server will run on: `http://localhost:3000`

## Project Structure

```bsh
project-root/
│
├── routes/
│   └── facts.js
├── data/
│   └── dogFacts.js
├── app.js
├── package.json
└── README.md
```

## Technologies Used

Express.js – Web framework
Zod – Runtime validation for query parameters
Node.js – Runtime environment

## Notes on Validation

The `number` query parameter is validated using Zod to ensure it is a *positive integer* when provided. If the parameter is omitted, the API returns all available dog facts as specified in the project requirements. If an invalid value is supplied (such as a non-numeric or negative value), the API responds with a `400 Bad Request`, providing clear feedback that the request was malformed. This approach keeps the endpoint simple and predictable while still implementing basic error handling in accordance with the assignment guidelines.