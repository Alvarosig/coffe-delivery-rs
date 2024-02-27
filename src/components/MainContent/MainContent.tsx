import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';

import coffee from '../../assets/coffee.png';

export function MainContent() {
  return (
    <main className="max-w-[1440px] m-auto flex justify-between gap-14 px-40 py-24 max-md:px-20 max-md:py-16 max-sm:px-10 max-sm:py-8">
      <div className="max-w-[588px] flex flex-col gap-16 max-md:gap-12">
        <div className="flex flex-col gap-4">
          <h1 className="font-baloo text-5xl font-extrabold text-base-title leading-tight drop-shadow-[0_3px_1px_rgba(0,0,0,0.25)] max-md:text-3xl">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="font-sans text-xl font-normal text-base-subtitle leading-tight max-md:text-lg">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </div>
        <div className="max-w-[567px] w-full">
          <ul className="flex flex-row flex-wrap gap-x-10 gap-y-5">
            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-yellow-dark">
                <ShoppingCart weight="fill" className="text-background" />
              </div>
              Compra simples e segura
            </li>

            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-base-text">
                <Package weight="fill" className="text-background" />
              </div>
              Embalagem mantém o café intacto
            </li>

            <li className="flex gap-3 items-center text-base-text text-base leading-tight">
              <div className="p-2 rounded-full bg-yellow-normal">
                <Timer weight="fill" className="text-background" />
              </div>
              Entrega rápida e rastreada
            </li>

            <li className="flex gap-3 items-center text-base-text text-base leading-tight -ml-[6px] max-lg:ml-0">
              <div className="p-2 rounded-full bg-purple-normal">
                <Coffee weight="fill" className="text-background" />
              </div>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
      </div>
      <div className="max-lg:hidden">
        <img src={coffee} alt="Copo de café com a logo coffee delivery" />
      </div>
    </main>
  )
}
