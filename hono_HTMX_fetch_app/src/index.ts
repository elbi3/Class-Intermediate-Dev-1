import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { layout } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { resultPartial } from "./views/partials.js";
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono();

app.use('/public/*', serveStatic({ root: './' }))

app.get("/", (c) => {
    return c.html(layout(homePage()));
});

app.get("/zen-fox", async (c) => {
    const [quoteRes, foxRes] = await Promise.all([
        fetch("https://zenquotes.io/api/random"),
        fetch("https://randomfox.ca/floof/")
    ]);

    const quoteData = await quoteRes.json();
    const foxData = await foxRes.json();

    const quote = quoteData[0];

    return c.html(`
    <div class="card">
        <blockquote>
        "${quote.q}"
        </blockquote>
        <div class="author">— ${quote.a}</div>

        <img 
        src="${foxData.image}" 
        alt="Random fox"
        class="fox-img"
        />

        <div style="margin-top: 1.5rem;">
        <button 
            hx-get="/zen-fox"
            hx-target="#result"
            hx-swap="innerHTML">
            Get Another 🦊
        </button>
        </div>
    </div>
    `)
});

app.post('/process', async (c) => {
  const body = await c.req.parseBody()
  const message = body.message as string

  // Simple processing logic
  // (replace with const res = await fetch(...) and const data = await res.json()
  const reversed = message.split('').reverse().join('')
  const upper = message.toUpperCase()

  return c.html(resultPartial(message, upper, reversed));
})

serve(app)