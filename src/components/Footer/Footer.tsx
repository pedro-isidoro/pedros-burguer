import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

export const Footer = () => {
    return (
        <footer className="h-[16rem] flex flex-col justify-evenly items-center bg-[#cbcecc] dark:bg-[#0D0C0C] relative text-black dark:text-white " id="contact">
            <div className="w-[80%] sm:w-[40%] lg:w-[30%] flex flex-row justify-around items-center">
                <img src="images/burguer-logo.webp" className="w-[6rem] h-[6rem]" alt="Logo da Pedro's Burguer" />
                <ul className="flex gap-4">
                    <li className="text-3xl text-[#F19EDC] cursor-pointer hover:opacity-35"><a href="https://www.instagram.com/pedrol.isidoro/" target="_blank"><FaInstagram data-testid="instagram" /></a></li>
                    <li className="text-3xl text-[#094EE4] cursor-pointer hover:opacity-35"><a href="#" target="_blank"><FaFacebookF data-testid="facebook" /></a></li>
                    <li className="text-3xl text-[#45A710] cursor-pointer hover:opacity-35"><a href="#" target="_blank"><FaWhatsapp data-testid="whatsapp" /></a></li>
                </ul>
            </div>
            <div className="flex flex-col items-start">
                <p>Site desenvolvido com muito amor por <a href="https://portfolio-2024-ashy-alpha.vercel.app" target="_blank" className="text-[#977e0b] hover:text-[#D73BC7]">Pedro Isidoro</a></p>
                <p>Todos os direitos reservados</p>
            </div>
            <a onClick={() => scrollTo({ top: 0, behavior: 'smooth'})} className="cursor-pointer arrow absolute text-3xl right-1 bottom-4 hover:text-[#D73BC7] animate-ownFloat"><BsArrowUp data-testid="arrowUp" /></a>
        </footer>
    )
}