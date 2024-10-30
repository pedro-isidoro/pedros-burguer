export const Address = () => {
    return (
        <section className="h-[34rem] flex flex-col justify-center items-center gap-4 text-black dark:text-white py-4" id="address">
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl font-bold text-[#FFCC00]">Endereço</h2>
                <p>Rua Javascript 44<br/>Bairro HTMLCSS</p>
            </div>
            <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.1490941752!2d-46.92564466464388!3d-23.68206209703726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1730287761319!5m2!1spt-BR!2sbr" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-[22rem] h-[20rem] sm:w-[26rem] md:w-[30rem] lg:w-[34rem]" />
        </section>
    )
}