import { CoffeeItems } from "./components/CoffeItems/CoffeeItems";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";

export function App() {
  return (
    <div className="max-w-[1440px] px-40 m-auto flex-col">
      <Header />
      <MainContent />
      <CoffeeItems />
    </div>
  );
}
