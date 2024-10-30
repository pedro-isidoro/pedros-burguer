import { useState } from "react";
import { useProductStore } from "@/store/cart";
import { warningNotify, loadingNotify } from "@/components/sooner/Sooner"

interface props{
    isOpen: boolean,
    setModalClosed: () => void
}
export const Modal = ({ isOpen, setModalClosed } : props) => {
    const { products, total } = useProductStore()
    const [readyToSend, setReadyToSend] = useState(false);
    
    //Enviar para a API do whatsapp
    function messageToWhatsApp () {
        const cartItemsToSend = products
        .map((product) => {
            return `${product.quantity} x ${product.title} | `;
        })
        .join("");
        console.log(cartItemsToSend);
        const message = encodeURIComponent(cartItemsToSend)
        const phone = "5511970601261"

        window.open(
        `https://wa.me/${phone}?text=${message}%0ATotal do Pedido: ${total()}%0AEndereço de entrega: ${addressValue}`,
        "_blank"
        );
    }
    //pegando o endereço
    const [ addressValue, setAddressValue ] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressValue(e.target.value)
    }
    const handleValues = () => {
        if (products.length === 0) {
            warningNotify("Adicione um Produto ao carrinho antes de finalizar o pedido!");
            return;
        }

        if (!addressValue) {
            setReadyToSend(true);
            warningNotify("Insira um endereço de entrega!");
            return;
        }

        setReadyToSend(false);
        loadingNotify();
        setTimeout(() => {
            messageToWhatsApp();
        }, 3500);
    };
    if(isOpen){
        return(
            <div className="bg-black/70 w-full h-full fixed top-0 left-0 z-30 items-center justify-center flex">
                <div className="bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]">
                    <h2 className="text-center font-bold text-2xl mb-2">Meu Carrinho</h2>
                    <ul className="w-full max-h-[17rem] grid grid-cols-1 items-center gap-2 md:gap-5 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#d73bc7d5] pr-1">
                        {products.map((product, index)=>(
                            <li key={index} className="w-full h-12 flex flex-col justify-center items-start border-l-2 border-l-black px-2">
                                <h3 className="font-bold text-lg">{product.title}</h3>
                                <div className="w-[100%] flex justify-between font-bold text-lg">
                                    <p>R$ <span className="text-[#d73bc7d5]">{product.price}</span></p>
                                    <p>Qtd: <span className="text-[#d73bc7d5]">{product.quantity}</span></p>
                                </div>
                            </li>
                        ))}    
                    </ul>
                    <div className="w-full text-center">
                        <p className="py-2 font-bold text-lg">Total: <span className="text-[#d73bc7d5]">{total()}</span></p>
                        <div className="w-full py-2 flex flex-col items-start font-bold text-lg">
                            <p className="mt-4 font-bold text-lg">Endereço de Entrega:</p>
                            <input type="text" placeholder="Digite seu Endereço" className="w-full border-2 p-1 rounded my-1 focus:outline-none" onChange={handleChange} />
                            {readyToSend ? (
                                <p id="address-warning" className="text-xs text-red-500 px-1">
                                Digite seu endereço completo
                                </p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="flex items-center justify-between mt-5 w-full font-bold text-lg">
                            <p className="text-[#d73bc7d5] hover:cursor-pointer hover:text-black" onClick={()=>setModalClosed()}>Fechar</p>
                            <button className="h-12 text-[#d73bc7d5] hover:text-black" onClick={handleValues}>Enviar Pedido!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}