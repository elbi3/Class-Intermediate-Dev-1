export const resultPartial = (
  message: string,
  upper: string,
  reversed: string
) => `
  <div style="padding: 1rem; border: 1px solid #ccc;">
    <p><strong>Original:</strong> ${message}</p>
    <p><strong>Uppercase:</strong> ${upper}</p>
    <p><strong>Reversed:</strong> ${reversed}</p>
  </div>
`

export function renderCard(quote: any, fox: any) {
  return `
    <div class="card">
      <blockquote>
        "${quote.q}"
      </blockquote>
      <div class="author">— ${quote.a}</div>

      <img 
        src="${fox.image}" 
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
  `
}
