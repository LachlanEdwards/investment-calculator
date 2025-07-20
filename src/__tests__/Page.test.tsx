import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import {describe, expect, it} from "@jest/globals";

describe('Page', () => {
    it('renders a heading', () => {
        render(<Page />)

        const h3 = screen.getByRole('heading', { level: 3 })
        const h5 = screen.getByRole('heading', { level: 5 })

        expect(h3).toBeInTheDocument()
        expect(h5).toBeInTheDocument()
    })
})
