export const Home = () => {
    return (
        <section className="w-full h-100vh flex flex-col justify-center items-center text-black dark:text-white text-center text-2xl uppercase relative font-extrabold" id="home">
            <p className="h-20 absolute top-3">Amor na<br/>primeira<br /><span className="text-[#D73BC7]">mordida</span></p>
            <div className="flex justify-center items-center gap-8 overflow-x-hidden">
                <img src="/images/burguers/first-burguer.webp" alt="Hamburguer Home Image" className="w-[20rem] h-[18rem] mt-[4.7rem] mb-[4.8rem]" />
                <img src="/images/burguers/first-burguer.webp" alt="Hamburguer Home Image" className="w-[24rem] h-[22rem] mt-[4.7rem] mb-[4.8rem]" />
                <img src="/images/burguers/first-burguer.webp" alt="Hamburguer Home Image" className="w-[20rem] h-[18rem] mt-[4.7rem] mb-[4.8rem]" />
            </div>
            <p className="h-20 absolute bottom-7"><span className="text-[#FFCC00]">Saboroso</span><br/>em cada<br/>detalhe!</p>
        </section>
    )
}