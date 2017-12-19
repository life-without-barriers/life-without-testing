require('babel-polyfill')
let ok = true
try {
  window.React = require('react')
} catch (e) {
  console.warn('Doesn\'t look like this is a React app, or there are some missing/misconfigured packages.\n\nSkipping React setup...')
  ok = false
}

if (ok) {
  console.log('Bootstrapped React tests!')
}
