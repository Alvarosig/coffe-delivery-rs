import { ProductsList } from "./ProductsList/ProductsList"

export function CoffeeItems() {
  return (
    <div className="flex flex-col mt-8 gap-y-[54px]">
      <h2 className="font-baloo font-extrabold text-base-subtitle text-[32px] ">
        Nossos cafés
      </h2>
      <div className="flex flex-wrap gap-x-8 gap-y-10 items-center justify-start">
        <ProductsList />
      </div>
    </div>
  )
}
