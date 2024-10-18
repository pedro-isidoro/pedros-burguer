import { FaPlus, FaMinus, FaRegTrashAlt } from "react-icons/fa";

interface BurguerInfo {
    src: string,
    altImage: string,
    title: string,
    description: string,
    secondTitle: string,
    ingredients: string,
    price: number
}

export const CartProduct = ({info}: {info: BurguerInfo}) => {
    return (
        <>
            <div className="w-[60%] h-full flex items-center">
                <img src={info.src} alt={info.altImage} className="w-[6rem] h-[5.5rem] rounded-xl mb-2" />
            </div>
            <div className="w-[100%] h-full flex flex-col justify-center items-center gap-1">
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-sm text-center">{info.title}</h2>
                    <p className="text-center text-sm">R$ <span className="">{info.price}</span></p>
                </div>
                <div className="w-full px-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaPlus className="text-sm text-[#d73bc7d5] cursor-pointer hover:text-green-400"/>
                        <p>0</p>
                        <FaMinus className="text-sm text-[#d73bc7d5] cursor-pointer hover:text-red-600
                        hover:font-black"/>
                    </div>
                    <FaRegTrashAlt className="text-lg text-[#d73bc7d5] cursor-pointer hover:text-red-600 hover:font-black"/>
                </div>
            </div>
        </>
    )
}