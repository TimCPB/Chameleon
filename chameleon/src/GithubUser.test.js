import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

import GithubUser from './GithubUser'

test("Renders the component", () => {
  render(<GithubUser />)
  const element = screen.getByText(/Hello, world!/)
  expect(element).toBeInTheDocument()
})