import { useCart } from "../../../context/CartContext"
import ProductItem from "./ProductItem"

export function ProductsList() {
  const { products } = useCart()

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-10 mb-14 max-lg:justify-center">
      {products.map((product) => {
        return (
          <ProductItem key={product.id} product={product}/>
        )
      })}
    </div>
  )
}
