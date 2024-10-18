export const Address = () => {
    return (
        <section className="h-[34rem] flex flex-col justify-center items-center gap-4 text-black dark:text-white pt-4" id="address">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-[#FFCC00]">Endereço</h2>
                <p>Rua Javascript 44<br/>Bairro HTMLCSS</p>
            </div>
            <img src="images/hamburguers.jpg" className="w-[22rem] sm:w-[26rem] md:w-[30rem] lg:w-[34rem]" alt="" />
        </section>
    )
}