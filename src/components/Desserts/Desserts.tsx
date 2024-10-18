import { ProductsSwiper } from "../Swiper/Swiper"
import dessertsData from '@/json/desserts.json'

export const Desserts = () => {
    return (
        <>
            <ProductsSwiper DataArray={dessertsData} identification="desserts" />
        </>
    )
}