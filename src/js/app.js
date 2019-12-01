import heading from './components/heading.js'

export default function app ({ name } = { name: 'World' }) {
  const root = document.createElement('main')
  root.id = 'app-root'
  root.appendChild(heading({ name }))

  return root
}
