import { html } from 'lit-html'
import Heading from './components/Heading.js'

export default function App ({ name } = { name: 'World' }) {
  return html`<main id="app-root">
    ${Heading(name)}
  </main>`
}
