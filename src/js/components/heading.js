export default function heading ({ name }) {
  const greet = n => `Hello, ${n}!`
  const el = document.createElement('h1')
  el.textContent = greet(name)
  return el
}
