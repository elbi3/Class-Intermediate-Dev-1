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
