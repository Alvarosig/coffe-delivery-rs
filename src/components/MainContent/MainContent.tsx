import coffee from "../../assets/coffee.png";
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function MainContent() {
  return (
    <main className="flex justify-between gap-14 py-24 bg-gradient-to-l from-background to-[#D9D9D9]">
      <div className="max-w-[588px] flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="font-baloo text-5xl font-extrabold text-base-title leading-tight drop-shadow-[0_3px_1px_rgba(0,0,0,0.25)]">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="font-sans text-xl font-normal text-base-subtitle leading-tight">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="max-w-[567px]">
          <ul className="grid grid-cols-2 gap-y-5">
            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-yellow-dark">
              <ShoppingCart weight="fill" className="text-background"/>
              </div>
              Compra simples e segura
            </li>
            
            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-base-text">
              <Package weight="fill" className="text-background"/>
              </div>
              Embalagem mantém o café intacto
            </li>

            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-yellow-normal">
              <Timer weight="fill" className="text-background"/>
              </div>
              Entrega rápida e rastreada
            </li>

            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-purple-normal">
              <Coffee weight="fill" className="text-background"/>
              </div>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className=""
          src={coffee}
          alt="Copo de café com a logo coffee delivery"
        />
      </div>
    </main>
  );
}
