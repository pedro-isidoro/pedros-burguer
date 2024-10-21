import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Burguers } from '@/components/Burguers/Burguers'

describe('Burguers - Should render elements', ()=>{
    it("Should render Alt Text Images", ()=>{
        render(<Burguers />)
        expect(screen.getAllByAltText(/Burguer/i).length).toBeGreaterThanOrEqual(3)
    })
    it("Should render burguer title", async () => {
        render(<Burguers />)
        const title = await screen.findByText(/Hamb[úu]rguer da casa/i) // Modificado para suportar acentos
        expect(title).toBeInTheDocument()
    })
    it("Should render burguer paragraph", ()=>{
        render(<Burguers />)
        const firstSlide = document.querySelector('[aria-label="1 / 6"]') // Seletor para o primeiro slide
        expect(firstSlide).toHaveTextContent(/Um lanche desenvolvido pelo dono/i)
    })
    it("Should render burguer ingredients title", ()=>{
        render(<Burguers />)
        const firstSlide = document.querySelector('[aria-label="1 / 6"]')
        expect(firstSlide).toHaveTextContent(/Ingredientes/i)
    })
    it("Should render burguer ingredients paragraph", ()=>{
        render(<Burguers />)
        const firstSlide = document.querySelector('[aria-label="1 / 6"]')
        expect(firstSlide).toHaveTextContent(/Pão Brioche, Maionese Verde, alface, tomate, queijo mussarela, blend de carne, bacon e geleia de bacon./i)
    })
    it("Should render burguer price paragraph", ()=>{
        render(<Burguers />)
        const firstSlide = document.querySelector('[aria-label="1 / 6"]')
        expect(firstSlide).toHaveTextContent("R$")
    })
    it("Should render add to cart button", ()=>{
        render(<Burguers />)
        const firstSlide = document.querySelector('[aria-label="1 / 6"]')
        expect(firstSlide).toHaveTextContent(/add to cart/i)
    })
})