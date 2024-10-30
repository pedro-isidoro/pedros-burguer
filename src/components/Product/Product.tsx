import { useProductStore } from "@/store/cart"
import { notify } from "@/components/sooner/Sooner"

interface BurguerInfo {
    id: number | string,
    src: string,
    altImage: string,
    title: string,
    description: string,
    secondTitle: string,
    ingredients: string,
    price: number,
    quantity: number
}

export const Product = ({info}: {info: BurguerInfo}) => {
    
    const { addProduct } = useProductStore()
    return (
        <>
            <img src={info.src} alt={info.altImage} className="w-[24rem] h-[20rem] rounded-xl mb-2" />
            <div className="w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%] flex flex-col gap-3 items-center lg:items-end text-black dark:text-white">
                <h2 className="uppercase font-bold text-2xl text-[#FFAE00] text-center">{info.title}</h2>
                <p>{info.description}</p>
                <h3 className="text-xl font-semibold text-[#FFAE00] text-center">{info.secondTitle}</h3>
                <p>{info.ingredients}</p>
                <p className="text-center">R$ <span className="text-3xl text-[#FFAE00]">{info.price}</span></p>
                <button className="w-44 h-8 bg-[#FFAE00] rounded-lg text-[#000] font-extrabold hover:bg-[#d73bc793]" onClick={()=>{addProduct(info); notify()}}>ADD to Cart</button>
            </div>
        </>
    )
}