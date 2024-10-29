import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { Product } from "@/components/Product/Product";
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { A11y } from 'swiper/modules';
import 'swiper/css';

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return <FaCircleArrowRight id='rightArrow' onClick={() => swiper.slideNext()} className='absolute right-2 text-3xl text-[#FFAE00] z-[2] mt-[4rem] lg:mt-0 cursor-pointer hover:text-[#D73BC7]' />;
};
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return <FaCircleArrowLeft id='leftArrow' onClick={() => swiper.slidePrev()} className='absolute left-2 text-3xl text-[#FFAE00] z-[2] mt-[4rem] lg:mt-0 cursor-pointer hover:text-[#D73BC7]' />
};

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

const backgroundClasses: { [key: string]: string } = {
    fireImage: 'lg:bg-fireImage',
    refriImage: 'lg:bg-refriImage',
    dessertImage: 'lg:bg-dessertImage',
};

export const ProductsSwiper = ({DataArray, identification, backgroundName}: {DataArray: BurguerInfo[], identification: string, backgroundName:string}) => {
    const validBackground = backgroundClasses[backgroundName] || '';
    // console.log("ValidBackground: ", validBackground)
    return (
        <section className={`h-[43rem] lg:h-[30rem] flex justify-center items-center text-white lg:bg-cover lg:bg-center ${validBackground} lg:my-[2.5rem]`} id={identification}>
            <Swiper
            modules={[ A11y]} loop slidesPerView={1}className='flex justify-center items-center relative'>
                <SwiperButtonPrev />
                {DataArray.length > 0 ? (
                    DataArray.map((product, index) => (
                        <SwiperSlide key={index} className='flex flex-col lg:flex-row justify-evenly items-center text-justify gap-4 px-2rem'>
                            <Product info={product} />
                        </SwiperSlide>
                    ))
                ) : (
                    <li className='text-center text-[#FFAE00]'>
                        <p>Carregando as informações...</p>
                    </li>
                )}
                <SwiperButtonNext />
            </Swiper>
        </section>
    )
}