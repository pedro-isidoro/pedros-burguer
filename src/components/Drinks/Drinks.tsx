import { ProductsSwiper } from "../Swiper/Swiper"
import drinksData from '@/json/drinks.json'

export const Drinks = () => {
    return (
        <>
            <ProductsSwiper DataArray={drinksData} identification="drinks" backgroundName="refriImage"/>
        </>
    )
}