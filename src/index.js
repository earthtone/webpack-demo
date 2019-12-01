import app from './js/app.js'
import './styles.css'

window.onload = function () {
  document.body.appendChild(app({ name: 'Fred' }))
}
