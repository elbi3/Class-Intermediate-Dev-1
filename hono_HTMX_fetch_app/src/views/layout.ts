export const layout = (content: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zen Fox</title>
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  <link rel="stylesheet" href="/public/styles.css" />
</head>
<body>
  <div class="container">
    <h1>Zen Fox 🦊</h1>
    ${content}
  </div>
</body>
</html>
`
