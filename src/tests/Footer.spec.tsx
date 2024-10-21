import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '@/components/Footer/Footer'

describe('Footer - Should render elements', ()=>{
    it("Should render Alt Text Images", ()=>{
        render(<Footer />)
        expect(screen.getByAltText(/Logo da Pedro's Burguer/i)).toBeInTheDocument()
    })
    it("Should render instagram icon", ()=>{
        render(<Footer />)
        expect(screen.getByTestId(/instagram/i)).toBeInTheDocument()
    })
    it("Should render Facebook icon", ()=>{
        render(<Footer />)
        expect(screen.getByTestId(/facebook/i)).toBeInTheDocument()
    })
    it("Should render whatsapp icon", ()=>{
        render(<Footer />)
        expect(screen.getByTestId(/whatsapp/i)).toBeInTheDocument()
    })
    it("Should render Footer Title", ()=>{
        render(<Footer />)
        expect(screen.getByText(/Site desenvolvido com muito amor por/i)).toBeInTheDocument()
    })
    it("Should render Footer Subtitle", ()=>{
        render(<Footer />)
        expect(screen.getByText(/Todos os direitos reservados/i)).toBeInTheDocument()
    })
    it("Should render arrow up icon", ()=>{
        render(<Footer />)
        expect(screen.getByTestId(/arrowUp/i)).toBeInTheDocument()
    })
})