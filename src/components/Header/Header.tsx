import { useState } from "react";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { MenuAsider } from "./MenuAside";
import { CartProductsAside } from "./CartProductsAside";

export const Header = () => {
  const [openMenu, SetOpenMenu] = useState(false)
  const [openCart, SetOpenCart] = useState(false)
  return (
    <header className="w-full h-[2.5rem] bg-[#cbcecc] dark:bg-[#0D0C0C] fixed top-0 left-0 z-[2]">
      <section className="w-full h-full flex justify-between py-2 px-4 relative">
        <div className="hidden lg:flex h-full dark:text-[#FFCC00] text-center gap-8">
          <a href="#home" className="hover:text-[#d73bc7d5] rounded-xl flex items-center justify-center">Home</a>
          <a href="#burguers" className="hover:text-[#d73bc7d5] rounded-xl flex items-center justify-center">Hambúrguers</a>
          <a href="#drinks" className="hover:text-[#d73bc7d5] rounded-xl flex items-center justify-center">Bebidas</a>
          <a href="#desserts" className="hover:text-[#d73bc7d5] rounded-xl flex items-center justify-center">Sobremesas</a>
          <a href="#address" className="hover:text-[#d73bc7d5] rounded-xl flex items-center justify-center">Endereço</a>
          <a href="#contact" className="hover:text-[#d73bc7d5] rounded-xl flex items-center justify-center">Contatos</a>
        </div>
        <MdOutlineRestaurantMenu className="lg:hidden text-2xl cursor-pointer dark:text-[#FFCC00] hover:text-[#D73BC7]" onClick={() => SetOpenMenu(true)} />
          {openMenu ? (
              <MenuAsider closeModal={()=>SetOpenMenu(false)} />
            ) : (<></>)}
        <IoCart className="text-2xl cursor-pointer dark:text-[#FFCC00] hover:text-[#D73BC7]" onClick={() => SetOpenCart(true)} />
          {openCart ? (
              <CartProductsAside closeModal={()=>SetOpenCart(false)} />
            ) : (<></>)}
      </section>
    </header>
  )
}