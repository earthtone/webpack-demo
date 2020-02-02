import React from 'react'
import PropTypes from 'prop-types'
import Heading from './components/Heading.js'

function App ({ name } = { name: 'World' }) {
  return (
    <main id="root">
      <Heading name={name}/>
    </main>
  )
}

App.propTypes = {
  name: PropTypes.string
}

export default App
