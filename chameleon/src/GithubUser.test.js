import React from 'react'
import { render, screen, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import GithubUser from './GithubUser'
import mockResponse from './__mocks__/Github-response.json'

jest.spyOn(global, "fetch").mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse)
  })
})

test("Renders the GitHub username", async () => {
  render(<GithubUser />)
  const element = await waitForElement(() => screen.getByText(/Tim/))
  expect(element).toBeInTheDocument()
})