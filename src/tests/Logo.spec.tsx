import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Logo } from '@/components/Logo/Logo'

describe('Logo - Should render elements and status', ()=>{
    const originalDate = global.Date;
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
        global.Date = originalDate;
    });
    it('Should render logoImage', ()=>{
        render(<Logo />)
        const image = screen.getByAltText('Logo Image')
        expect(image).toBeInTheDocument()
    })
    it('Should render Logo Text', ()=>{
        render(<Logo />)
        expect(screen.getByText(/Seg à Dom/i)).toBeInTheDocument()
    })
    it('Should show restaurant is open between 17:00 and 23:30', () => {
        const mockDate = new Date(2024, 9, 19, 18); // Mockando 18h (18:00)
        global.Date = vi.fn(() => mockDate) as unknown as DateConstructor;

        render(<Logo />)
        expect(screen.getByText(/Seg à Dom - 17h às 23:30/i)).toBeInTheDocument()
        expect(screen.getByText(/Seg à Dom/i).parentElement).toHaveClass('bg-[#45A710]')
    })

    it('Should show restaurant is closed outside working hours', () => {
        const mockDate = new Date(2024, 9, 19, 15); // Mockando 15h (15:00)
        global.Date = vi.fn(() => mockDate) as unknown as DateConstructor;

        render(<Logo />)
        expect(screen.getByText(/Seg à Dom - 17h às 23:30/i)).toBeInTheDocument()
        expect(screen.getByText(/Seg à Dom/i).parentElement).toHaveClass('bg-red-600')
    })
})