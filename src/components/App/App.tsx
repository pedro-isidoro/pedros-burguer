import { Header } from '@/components/Header/Header.tsx'
import { Logo } from '@/components/Logo/Logo'
import { Home } from '@/components/Home/Home.tsx'
import { Burguers } from '@/components/Burguers/Burguers.tsx'
import { Drinks } from '@/components/Drinks/Drinks.tsx'
import { Desserts } from '@/components/Desserts/Desserts.tsx'
import { Address } from '@/components/Address/Address.tsx'
import { Footer } from '@/components/Footer/Footer.tsx'
import { Toaster } from 'sonner'

export const App = () => {
  return (
    <main className="h-full w-full relative bg-[#F2F4F3] dark:bg-[#000]">
      <Toaster
        position="top-right"
        expand={false}
        richColors
        className="flex justify-end"
      />
      <Header />
      <main>
        <Logo />
        <Home />
        <Burguers />
        <Drinks />
        <Desserts />
        <Address />
      </main>
      <Footer />
    </main>
  )
}