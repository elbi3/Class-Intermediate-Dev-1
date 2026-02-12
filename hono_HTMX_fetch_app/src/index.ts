import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { layout } from "./views/layout.js";
import { homePage } from "./views/home.js";
import { resultPartial, renderCard } from "./views/partials.js";
import { serveStatic } from '@hono/node-server/serve-static';
// simple cache implementation:
type CacheData = {
  quote: any
  fox: any
  timestamp: number
}

let cache: CacheData | null = null
const CACHE_TTL = 10 * 1000 // 10 seconds
// ---
const app = new Hono();

app.use('/public/*', serveStatic({ root: './' }))

app.get("/", (c) => {
    return c.html(layout(homePage()));
});

app.get("/zen-fox", async (c) => {
    const now = Date.now();
  // ✅ If cache exists AND is still valid
    if (cache && now - cache.timestamp < CACHE_TTL) {
        console.log(`🟢 Serving from cache: ${now - cache.timestamp}`)
        const quote = cache.quote;
        const fox = cache.fox;
        return c.html(renderCard(cache.quote, cache.fox));
    }
  // ❌ Otherwise fetch fresh data
    console.log('🔵 Fetching fresh data from APIs')
    const [quoteRes, foxRes] = await Promise.all([
        fetch("https://zenquotes.io/api/random"),
        fetch("https://randomfox.ca/floof/")
    ]);

    const quoteData = await quoteRes.json();
    const foxData = await foxRes.json();

    const quote = quoteData[0];
  // 🔐 Store in cache
    cache = {
        quote,
        fox: foxData,
        timestamp: now
    }

    return c.html(renderCard(quote, foxData))
});

//TEST ROUTE:
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