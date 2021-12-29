import { render } from '@testing-library/react'
import { App } from './App'

test('App renders', () => {
  const { container } = render(<App />)

  const heading = container.querySelector('h1')
  expect(heading.innerHTML).toEqual('Hello World')
})
