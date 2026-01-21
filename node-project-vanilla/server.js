import http from "node:http";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";


const port = 3000 || process.env.PORT;

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// request handler function (receives request):
const server = http.createServer(async (req, res) => {
    let response;
    try {
        // routing
        if(req.method === "GET" && req.url === "/") {
            const html = await readFile(
                path.join(__dirname, "home.html"),
                "utf8"
            );

            response = new Response(html, {
                headers: { "content-type": "text/html" }
            });

        } else if (req.method === "GET" && req.url === "/about"){
            response = new Response(
                "<h1>About</h1><p>This is the about page.</p>",
                { headers: { "content-type": "text/html"} }
            );
        } else {
            // 404
            response = new Response( "404 Not Found", {
                status: 404,
                headers: { "content-type": "text/plain" }
            });
        }

    } catch(err) {
        console.log("err: ", err);
        response = new Response("500 Server Error", { status: 500 });
    }

  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(await response.text());
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${3000}`);
});

