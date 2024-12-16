import { ProductCard } from "../molecules/ProductCard/ProductCard";

const products = [
  {
    name : "Red Velvet Cake",
    price : "15.95€"
  },
  {
    name : "Vanilla Cupcake",
    price : "5.95€"
  }
]

export function ProductRow({title}) {
  return <>
  <div className="product-row">
    <h3>{title}</h3>
    <div>
      {products.map((product, i) => <ProductCard product={product} key={i} />)}
    </div>
  </div>
  </>;
}