import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders start a call link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/start a call/i)
  expect(linkElement).toBeInTheDocument()
})
