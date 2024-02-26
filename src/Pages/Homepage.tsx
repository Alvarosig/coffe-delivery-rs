import { CoffeeItems } from "../components/CoffeItems/CoffeeItems"
import { Footer } from "../components/Footer/Footer"
import { MainContent } from "../components/MainContent/MainContent"

export function Homepage() {
  return (
    <div className="m-auto">
      <MainContent />
      <div className="max-w-[1440px] px-40 m-auto">
        <CoffeeItems />
      </div>
      <Footer />
    </div>
  )
}
