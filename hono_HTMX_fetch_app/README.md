# 🦊 Zen Fox – A Minimal API Integration App
Overview

Zen Fox is a small web application that integrates with two public third-party APIs to display a random Zen quote alongside a random fox image.

This project demonstrates:
- Server-side API aggregation
- Dynamic UI updates using HTMX
- API response handling and transformation
- Basic caching to prevent excessive API calls
- Clean separation of layout, partial views, and route logic

---

<img width="909" height="918" alt="Screenshot 2026-02-11 152039" src="https://github.com/user-attachments/assets/b603ed49-fcfd-4d87-8e0e-87ccc850b74b" />


## APIs Used

1. Zen Quotes API
- Endpoint: https://zenquotes.io/api/random
- Provides random inspirational quotes.

2. Random Fox API
- Endpoint: https://randomfox.ca/floof/
- Provides a random fox image URL.

Both APIs are public and do not require authentication.

## Application Concept

The goal of this application is to create a minimal, calming experience that combines inspiration (Zen quotes) with a playful visual element (random fox images).

Instead of calling APIs directly from the browser, the application:

- Sends a request to the Hono server.
- The server fetches data from both APIs.
- The server combines and formats the data into an HTML fragment.
- HTMX dynamically updates the page without reloading.

This architecture keeps API logic on the server and simplifies the frontend.

## Tech Stack

- Backend: Hono (Node.js)
- Frontend Interaction: HTMX
- Styling: Static CSS
- Language: TypeScript


## Project Structure
```css
src/
  index.ts
  views/
    layout.ts
public/
  styles.css
```

- index.ts – Defines routes and handles API aggregation.
- layout.ts – Base HTML layout.
- styles.css – Minimal static styling.
- HTMX handles dynamic updates without a frontend framework.

## How to Run Locally
1. Clone the repository
```shell
git clone <your-repo-url>
cd <repo-name>
```
2. Install dependencies with `npm install`

3. Start the development server: `npm run dev`


The app will run at:

http://localhost:3000

## Error Handling

The application:
- Checks for failed API responses.
- Handles invalid JSON responses gracefully.
- Uses a simple in-memory cache to reduce repeated API calls and avoid rate limits.
- Displays fallback messaging if API data is unavailable.

Caching Strategy

To avoid excessive API calls and potential rate limits:
- The server stores the most recent API response in memory.
- Cached responses are reused for 60 seconds.
- After the TTL expires, fresh data is fetched.

This ensures:
- Better performance
- Fewer external requests
- More stable demo behavior

## Test Cases

### ✅ Normal Cases

Clicking “Get Zen Wisdom + Fox” displays a quote and fox image.
Clicking “Get Another” fetches new data.
Rapid repeated clicks within 60 seconds return cached data without errors.

### ⚠️ Edge Cases

Zen Quotes API returns an unexpected response.
Random Fox API fails to respond.
External API returns malformed JSON.

In these cases, the application handles errors gracefully and avoids crashing.

## Challenges Encountered

- Configuring TypeScript with ES Modules for Hono.
- Handling nested project structure during setup.
- Combining two separate APIs into a unified server-rendered response.
- Implementing server-side caching to avoid rate limiting.

## On HTMX

Mental Model Comparison:

Traditional SPA (React):
- Browser fetches JSON
- JavaScript builds UI
- Client manages state


Hono + HTMX:
- Browser asks server for HTML
- Server builds UI
- HTMX swaps it in

“Server owns the UI. HTMX just swaps fragments.”
