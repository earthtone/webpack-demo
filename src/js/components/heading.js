import React from 'react'
import PropTypes from 'prop-typs'

function Heading ({ name }) {
  return <h1>Hello, {name}!</h1>
}

Heading.propTypes = {
  name: PropTypes.string
}

export default Heading
