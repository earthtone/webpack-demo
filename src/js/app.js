import React from 'react'
import Heading from './components/Heading.js'

export default function App ({ name } = { name: 'World' }) {
  return (
    <main id="root">
      <Heading name={name}/>
    </main>
  )
}
