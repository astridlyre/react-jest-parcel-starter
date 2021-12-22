import { render, cleanup } from '@testing-library/react'
import App from './App'

describe('App', () => {
  afterEach(cleanup)

  it('renders', () => {
    const { container } = render(<App />)

    const heading = container.querySelector('h1')
    expect(heading.innerHTML).toEqual('Hello World')
  })
})
