import { useProductStore } from "@/store/cart";
import { useState } from "react";

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
        `https://wa.me/${phone}?text=${message}%0ATotal do Pedido: ${total}%0AEndereço de entrega: ${addressValue}`,
        "_blank"
        );
    }
    //pegando o endereço
    const [ addressValue, setAddressValue ] = useState("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddressValue(e.target.value)
    }
    const handleValues = () => {
        if (products.length <= 0) {
            alert("Adicione um Produto ao carrinho, ANTES de finalizar um pedido!");
        } else if (addressValue === "" || products.length <= 0) {
            setReadyToSend(true);
        } else {
            setReadyToSend(false);
            messageToWhatsApp();
            location.reload();
        }
    }
    if(isOpen){
        return(
            <div className="absolute z-20 w-full h-screen bg-[#000000ce] flex justify-center items-center">
                <div className="w-[24rem] h-[28rem] md:w-[30rem] bg-white text-black flex flex-col justify-between items-center pt-4 rounded-xl">
                    <ul className="w-[70%] h-full flex flex-col justify-start items-center gap-2 overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#d73bc7d5] pr-1">
                        {products.map((product, index)=>(
                            <li key={index} className="w-full h-12 flex flex-col justify-center items-start border-t-2 border-t-black pt-2">
                                <h3>{product.title}</h3>
                                <div className="w-[80%] flex justify-between">
                                    <p>R$ <span className="text-[#d73bc7d5]">{product.price}</span></p>
                                    <p>Qtd: <span className="text-[#d73bc7d5]">{product.quantity}</span></p>
                                </div>
                            </li>
                        ))}    
                    </ul>
                    <div className="w-full text-center">
                        <p className="py-2">Total: <span className="text-[#d73bc7d5]">{total()}</span></p>
                        <div className="w-full py-2">
                            <input type="text" placeholder="Digite seu Endereço" className="w-[80%] border-2 p-1 rounded my-1 focus:outline-none" onChange={handleChange} />
                            {readyToSend ? (
                                <p id="address-warning" className="text-xs text-red-500 px-1">
                                Digite seu endereço completo
                                </p>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="w-full flex justify-between items-center px-4">
                            <p className="text-[#d73bc7d5] hover:cursor-pointer hover:text-white" onClick={()=>setModalClosed()}>Fechar</p>
                            <button className="h-12 text-[#d73bc7d5] hover:text-white" onClick={handleValues}>Enviar Pedido</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return null;
}