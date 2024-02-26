import { CoffeeItems } from "./components/CoffeItems/CoffeeItems";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";

export function App() {
  return (
    <div className="m-auto">
      <div className="max-w-[1440px] px-40 m-auto">
        <Header />
      </div>
      <MainContent />
      <div className="max-w-[1440px] px-40 m-auto">
        <CoffeeItems/>
      </div>
      <Footer />
    </div>
  )
}