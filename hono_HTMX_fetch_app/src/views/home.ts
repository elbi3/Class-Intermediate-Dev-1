export const homePage = () => `
<button 
  hx-get="/zen-fox"
  hx-indicator="#loading"
  hx-target="#result"
  hx-swap="innerHTML">
  Get Zen Wisdom + Fox 🦊
</button>

<div id="loading" style="margin-top: 1rem; display:none;">
  Loading wisdom...
</div>

<div id="result"></div>
`
