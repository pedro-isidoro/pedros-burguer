import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Home } from '@/components/Home/Home'

describe('Home - Should render elements', ()=>{
    it("Should render Top Text", ()=>{
        render(<Home />)
        expect(screen.getByText(/Amor na/i)).toBeInTheDocument()
        expect(screen.getByText(/primeira/i)).toBeInTheDocument()
        expect(screen.getByText(/mordida/i)).toBeInTheDocument()
    })
    it("Should render Bottom Text", ()=>{
        render(<Home />)
    expect(screen.getByText(/Saboroso/i)).toBeInTheDocument()
    expect(screen.getByText(/em cada/i)).toBeInTheDocument()
    expect(screen.getByText(/detalhe/i)).toBeInTheDocument()
    })
    it("Should render alt text images", ()=>{
        render(<Home />)
        expect(screen.getAllByAltText(/Hamburguer/i).length).toBeGreaterThanOrEqual(3)
    })
})