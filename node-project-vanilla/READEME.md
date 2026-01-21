# Modern Node Server

Goal: Serve an HTML file at root route, display simple text response at alternate "/about" route, and handle invalid routes with 404 response.

1. In `package.json`, include `"type": "module"` to ensure ES Modules are enabled
2. Import `http` and `fs` and be sure to use them with `import` syntax
3. Use `http` to create a vanilla (no JavaScript framework) HTTP server, and write a request handler function.
4. Ensure there are no callbacks, no CommonJS, no deprecated APIs, use Web-standard `Response`, maintain explicit control (as opposed to framework abstraction)
5. Handle routing to "/", "/about" and 404 response for all outer routes

## notes

- Node’s `http` server speaks “raw bytes + headers”, while `Response` is a high-level Web object — Node does not automatically connect the two.
- To run an HTTP server in modern Node using Web-style Response objects, you need exactly 5 things:
1. Create a server
2. Handle incoming requests
3. Create a Response object
4. Translate the Response → Node’s res
5. Listen on a port
- stringify the `Response` body because Node's `res.end()` only accepts strings or buffers (NOT objects)
- `Response` expects a body, not an object
```js
new Response("hello")          // ✅ string
new Response(Uint8Array)       // ✅ bytes
new Response(ReadableStream)   // ✅ stream
```
NOT `new Response({hello: "world"})` // ❌ objects are meaningless on the wire
- HTTP cannot transmit JavaScript objects — only bytes. so for JSON:
```js
JSON.stringify(data)
'content-type': 'application/json'
```
- why do we call `response.text()`? Response body is a stream, not a string! To send it through Nodes.
-  it becomes a ReadableStream internally
- to send it through Node's `res.end()`, we must consume the stream `await response.text()`
- `res.end()` needs raw data, so `.text()` is the simplest
- Node deliberately does NOT auto-wire `Response` -> `res` because Node supports multiple HTTP APIs, the Web API is optional, auto-magi would break low-level control. Frameworks do this instead

| Thing              | Where it exists     | What it does          |
| ------------------ | ------------------- | --------------------- |
| `JSON.stringify()` | JavaScript (global) | Turns object → string |
| `res.json()`       | Express / Fastify   | Convenience helper    |
| `Response.json()`  | Web Fetch API       | Creates a `Response`  |

```js
http.createServer((req, res) => { //res is actually http.serverResponse
  ...
});
```
- vanilla Node stays primitive on purpose - Node's HTTP TAPI predates JSON APIs
```js
JSON.stringify()   // JavaScript primitive
Response.json()   // Web standard (modern Node)
res.json()        // Framework-only (Express, Fastify)
```
- `Response.json()` is a static method on the Web Fetch API Response class.
- Web `Response` → body is a stream, Node `res.end()` → needs bytes/string (Express hides this)
```js
Response.json(data)     ← Web standard
↓
Web Response object
↓
response.text()         ← Web standard
↓
string
↓
res.end(...)             ← Node HTTP
```