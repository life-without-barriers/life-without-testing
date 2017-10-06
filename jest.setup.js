let ok = true
try {
  window.React = require('react')
  const { configure } = require('enzyme')
  const Adapter = require('enzyme-adapter-react-16')

  configure({ adapter: new Adapter() })
} catch (e) {
  console.warn('Doesn\'t look like this is a React app, or there are some missing/misconfigured packages.\n\nSkipping React setup...')
  ok = false
}

if (ok) {
  console.log('Bootstrapping React tests...')
}
