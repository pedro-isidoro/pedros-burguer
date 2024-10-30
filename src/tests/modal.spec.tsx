import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Modal } from '@/components/Modal/Modal';
import { useProductStore } from '@/store/cart';

// Mock da store
vi.mock('@/store/cart', () => ({
    useProductStore: vi.fn(),
}));

describe('Modal - Should render elements and status', () => {
    beforeEach(() => {
        (useProductStore as unknown as jest.Mock).mockReturnValue({
            products: [{ title: 'Hambúrguer', price: 20.00, quantity: 1 }],
            total: () => 'R$ 20,00',
        });
    });

    it('Should render header and elements', () => {
        const setModalClosed = vi.fn(); // Função mock para fechar o modal
        render(<Modal isOpen={true} setModalClosed={setModalClosed} />);
        const header = screen.getByText('Meu Carrinho');
        expect(header).toBeInTheDocument();
    });

    it('Should display products in the cart', () => {
        const setModalClosed = vi.fn();
        render(<Modal isOpen={true} setModalClosed={setModalClosed} />);

        const productList = screen.getByRole('list');
        expect(productList).toBeInTheDocument();
        expect(screen.getByText('Hambúrguer')).toBeInTheDocument();
    });

    it('Should update address input value', () => {
        const setModalClosed = vi.fn();
        render(<Modal isOpen={true} setModalClosed={setModalClosed} />);
        const addressInput = screen.getByPlaceholderText('Digite seu Endereço');
        fireEvent.change(addressInput, { target: { value: 'Rua Exemplo, 123' } });
        expect(addressInput).toHaveValue('Rua Exemplo, 123');
    });

    it('Should call setModalClosed when closing the modal', () => {
        const setModalClosed = vi.fn();
        render(<Modal isOpen={true} setModalClosed={setModalClosed} />);
        const closeButton = screen.getByText('Fechar');
        fireEvent.click(closeButton);
        expect(setModalClosed).toHaveBeenCalled();
    });
});
