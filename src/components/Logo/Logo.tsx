export const Logo = () => {
    const checkRestaurantOpen = () => {
    const date = new Date();
    const hour = date.getHours()
    const status = hour >= 17 && hour <= 23.30
    return status;
  }
    return (
        <section className="w-full h-[12rem] flex flex-col justify-center items-center text-white bg-logoImage bg-cover bg-center gap-4 mt-[2.5rem]">
            <img src="images/burguer-logo.webp" alt="Logo Image" className="w-32 h-32 rounded-full shadow-lg" />
            {checkRestaurantOpen() ? (
                <div className="w-52 h-6 flex flex-col justify-center items-center rounded-xl bg-[#45A710]">
                    <h3 className="text-sm">Seg à Dom - 17h às 23:30</h3>
                </div>
            ) : (
                <div className="w-52 h-6 flex flex-col justify-center items-center rounded-xl bg-red-600">
                    <h3 className="text-sm">Seg à Dom - 17h às 23:30</h3>
                </div>
            )}
        </section>
    )
}