import hamburguersData from '@/json/hamburguers.json'
import { ProductsSwiper } from '@/components//Swiper/Swiper'

export const Burguers = () => {
    return (
        <>
            <ProductsSwiper DataArray={hamburguersData} identification="burguers" />
        </>
    )
}