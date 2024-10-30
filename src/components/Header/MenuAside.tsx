import { FaX } from "react-icons/fa6";
interface MenuAsiderProps {
  closeModal: () => void;
}
export const MenuAsider = ({closeModal}:MenuAsiderProps) => {
    return (
        <aside className="h-[19rem] w-[10rem] bg-black dark:bg-[#FFCC00] roun flex flex-col items-start justify-center absolute right-0 top-0 py-2 px-4 pb-2 gap-[0.5rem] rounded-es-lg z-[5] text-white dark:text-black">
            <FaX data-testid="fax" className="text-2xl hover:text-[#d73bc7d5] mb-2 cursor-pointer" onClick={closeModal}/>
            <a href="#home" className="w-32 h-8 hover:bg-[#d73bc7d5] rounded-xl flex items-center justify-center">Home</a>
            <a href="#burguers" className="w-32 h-8 hover:bg-[#d73bc7d5] rounded-xl flex items-center justify-center">Hambúrguers</a>
            <a href="#drinks" className="w-32 h-8 hover:bg-[#d73bc7d5] rounded-xl flex items-center justify-center">Bebidas</a>
            <a href="#desserts" className="w-32 h-8 hover:bg-[#d73bc7d5] rounded-xl flex items-center justify-center">Sobremesas</a>
            <a href="#address" className="w-32 h-8 hover:bg-[#d73bc7d5] rounded-xl flex items-center justify-center">Endereço</a>
            <a href="#contact" className="w-32 h-8 hover:bg-[#d73bc7d5] rounded-xl flex items-center justify-center">Contatos</a>
        </aside>
    )
}