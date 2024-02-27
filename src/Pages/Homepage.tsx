import { CoffeeItems } from "../components/CoffeItems/CoffeeItems"
import { Footer } from "../components/Footer/Footer"
import { MainContent } from "../components/MainContent/MainContent"

export function Homepage() {
  return (
    <>
      <div className="w-full bg-gradient-to-bl from-background to-[#D9D9D9]">
        <MainContent />
      </div>
      <div className="max-w-[1440px] px-40 m-auto max-[1025px]:px-20 max-[425px]:px-3">
        <CoffeeItems />
      </div>
      <Footer />
    </>
  )
}
