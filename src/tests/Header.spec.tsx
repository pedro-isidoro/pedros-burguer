import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { userEvent } from '../../vitest-setup'
import { Header } from '@/components/Header/Header'

describe('Header - Should render your elements', ()=>{
    it('Should render forkIcon from menu', ()=>{
        render(<Header />)
        const menuIcon = screen.getByTestId('nav-icon')
        expect(menuIcon).toBeInTheDocument()
    })
    it('Should render cartIcon from menu', ()=>{
        render(<Header />)
        const menuIcon = screen.getByTestId('cart-icon')
        expect(menuIcon).toBeInTheDocument()
    })
    describe("Menu Aside - Nav Elements", () => {
        it("Should render close icon", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            const closeMenuIcon = screen.getByTestId('fax')
            expect(closeMenuIcon).toBeInTheDocument()
            })
        })
        it("Should render Home button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Home/i)).toBeInTheDocument()
            })
        })
        it("Should render Hamburguers button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Hambúrguers/i)).toBeInTheDocument()
            })
        })
        it("Should render Bebidas button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Bebidas/i)).toBeInTheDocument()
            })
        })
        it("Should render Sobremesas button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Sobremesas/i)).toBeInTheDocument()
            })
        })
        it("Should render Endereco button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Endereço/i)).toBeInTheDocument()
            })
        })
        it("Should render Contatos button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('nav-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Contatos/i)).toBeInTheDocument()
            })
        })
    })
    describe("Menu Aside - Shouldnt render Nav Elements", () => {
        it("Shouldnt render close icon", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByTestId('fax')).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Home button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Hamburguers button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Hambúrguers/i)).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Bebidas button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Bebidas/i)).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Sobremesas button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Sobremesas/i)).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Endereco button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Endereço/i)).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Contatos button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('nav-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Contatos/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('fax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Contatos/i)).not.toBeInTheDocument();
            });
        })
    })
    describe("Cart Aside - Cart Elements", () => {
        it("Should render close icon", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('cart-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            const closeMenuIcon = screen.getByTestId('secondFax')
            expect(closeMenuIcon).toBeInTheDocument()
            })
        })
        it("Should render Total Text", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('cart-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Total/i)).toBeInTheDocument()
            })
        })
        it("Should render R$ Text", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('cart-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
                const prices = screen.getAllByText(/R\$/i);
                expect(prices.length).toBeGreaterThan(0);
            })
        })
        it("Should render Finalizar button", async()=>{
            render(<Header />)
            const menuIcon = screen.getByTestId('cart-icon')
            await userEvent.click(menuIcon)
            await waitFor(() => {
            expect(screen.getByText(/Finalizar/i)).toBeInTheDocument()
            })
        })
    })
    describe("Cart Aside - Shouldnt render Cart Elements", () => {
        it("Shouldnt render close icon", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('cart-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Finalizar/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('secondFax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByTestId('fax')).not.toBeInTheDocument();
            });
        })
        it("Shouldnt render Total Text", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('cart-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Finalizar/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('secondFax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Total/i)).not.toBeInTheDocument();
            });
        })
        it("Should render R$ Text", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('cart-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Finalizar/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('secondFax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText("R$")).not.toBeInTheDocument();
            });
        })
        it("Should render Finalizar button", async()=>{
            render(<Header />);
            const menuIcon = screen.getByTestId('cart-icon');
            await userEvent.click(menuIcon);
            await waitFor(() => {
                expect(screen.getByText(/Finalizar/i)).toBeInTheDocument();
            });

            const closeIcon = screen.getByTestId('secondFax');
            await userEvent.click(closeIcon);
            await waitFor(() => {
                expect(screen.queryByText(/Finalizar/i)).not.toBeInTheDocument();
            });
        })
    })
})