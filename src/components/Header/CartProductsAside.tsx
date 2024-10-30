// import hamburguersData from '@/json/hamburguers.json'
import { FaX } from "react-icons/fa6";
import { CartProduct } from '@/components/Product/CartProduct';
import { useProductStore } from '@/store/cart';
import { infoNotify } from "@/components/sooner/Sooner";
interface MenuAsiderProps {
  closeModal: () => void;
  openFinalModal: () => void;
}
export const CartProductsAside = ({closeModal, openFinalModal}: MenuAsiderProps) => {
    const { products, total } = useProductStore()
    function OpenFinalModal(){
        if(products.length <= 0){
            infoNotify()
        }else{
            openFinalModal()
        }
    }
    return (
        <aside className="h-screen w-[22rem] bg-black dark:bg-[#FFCC00] roun flex flex-col items-end absolute left-0 top-0 py-2 px-4 gap-[0.5rem] text-white dark:text-black">
            <FaX data-testid="secondFax" className="text-2xl hover:text-[#d73bc7d5] cursor-pointer mb-1" onClick={closeModal}/>
                <div id="products-info-section relative" className=" h-full w-full">
                <ul className="h-[90%] flex flex-col items-center overflow-y-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#d73bc7d5] gap-2">
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <li key={index} className='w-full h-24 flex items-center px-1 border-t-[0.1rem] dark:border-t-black pt-4'>
                                <CartProduct info={product} />
                            </li>
                        ))
                    ):(<li><p className="font-extrabold text-center">Nenhum produto adicionado ainda!!</p></li>)}
                </ul>
                <div className="w-full h-14 flex justify-around items-center text-sm text-black dark:text-white absolute bottom-0 right-0 bg-[#cbcecc] dark:bg-[#0D0C0C]">
                    <h4 className="font-bold">Total:<span className="font-extrabold text-xl text-[#d73bc7d5] ml-[0.3rem]">{total()}</span></h4>
                    <button className="w-24 h-7 bg-[#d73bc7d5] rounded-xl font-semibold text-base cursor-pointer hover:opacity-75" onClick={() => OpenFinalModal()}>Finalizar</button>
                </div>
                </div>
            </aside>
    )
}