import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Drinks } from '@/components/Drinks/Drinks'

describe('Drinks - Should render elements', ()=>{
    it("Should render Alt Text Images", ()=>{
        render(<Drinks />)
        expect(screen.getAllByAltText(/drink/i).length).toBeGreaterThanOrEqual(3)
    })
    it("Should render Drink title", async () => {
        render(<Drinks />)
        const title = await screen.findByText(/Refrigerante Coca-Cola/i) // Modificado para suportar acentos
        expect(title).toBeInTheDocument()
    })
    it("Should render Drink paragraph", ()=>{
        render(<Drinks />)
        const firstSlide = document.querySelector('[aria-label="1 / 4"]') // Seletor para o primeiro slide
        expect(firstSlide).toHaveTextContent(/Uma Bebida enlatada e/i)
    })
    it("Should render Drink price paragraph", ()=>{
        render(<Drinks />)
        const firstSlide = document.querySelector('[aria-label="1 / 4"]')
        expect(firstSlide).toHaveTextContent("R$")
    })
    it("Should render add to cart button", ()=>{
        render(<Drinks />)
        const firstSlide = document.querySelector('[aria-label="1 / 4"]')
        expect(firstSlide).toHaveTextContent(/add to cart/i)
    })
})