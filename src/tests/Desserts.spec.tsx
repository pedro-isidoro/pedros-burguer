import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Desserts } from '@/components/Desserts/Desserts'

describe('Desserts - Should render elements', ()=>{
    it("Should render Alt Text Images", ()=>{
        render(<Desserts />)
        expect(screen.getAllByAltText(/dessert/i).length).toBeGreaterThanOrEqual(3)
    })
    it("Should render Dessert title", async () => {
        render(<Desserts />)
        const title = await screen.findByText(/Sobremesa da Casa/i) // Modificado para suportar acentos
        expect(title).toBeInTheDocument()
    })
    it("Should render Dessert paragraph", ()=>{
        render(<Desserts />)
        const firstSlide = document.querySelector('[aria-label="1 / 4"]') // Seletor para o primeiro slide
        expect(firstSlide).toHaveTextContent(/Versão exclusiva da Banoffee/i)
    })
    it("Should render Dessert price paragraph", ()=>{
        render(<Desserts />)
        const firstSlide = document.querySelector('[aria-label="1 / 4"]')
        expect(firstSlide).toHaveTextContent("R$")
    })
    it("Should render add to cart button", ()=>{
        render(<Desserts />)
        const firstSlide = document.querySelector('[aria-label="1 / 4"]')
        expect(firstSlide).toHaveTextContent(/add to cart/i)
    })
})