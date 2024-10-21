import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Address } from '@/components/Address/Address'

describe('Address - Should render elements', ()=>{
    it("Should render Title", ()=>{
        render(<Address />)
        expect(screen.getByText(/Endereço/i)).toBeInTheDocument()
    })
    it("Should render paragraph 1", ()=>{
        render(<Address />)
        expect(screen.getByText(/Rua Javascript/i)).toBeInTheDocument()
    })
    it("Should render paragraph 2", ()=>{
        render(<Address />)
        expect(screen.getByText(/Bairro HTMLCSS/i)).toBeInTheDocument()
    })
    it("Should render Alt Text Images", ()=>{
        render(<Address />)
        expect(screen.getByAltText(/map/i)).toBeInTheDocument()
    })
})