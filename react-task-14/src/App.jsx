import ProductCard from "./components/ProductCard/ProductCard";

const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 2500,
    discountPrice: 2400,
    isStock: true,
    imageUrl: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    id: 2,
    name: "PlayStation 5",
    price: 1200,
    discountPrice: null,
    isStock: false,
    imageUrl: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
  {
    id: 3,
    name: "Logitech Mouse",
    price: 100,
    discountPrice: 80,
    isStock: true,
    imageUrl: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
  },
];

export default function App() {
  return (
    <div className='product-container'>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          discountPrice={product.discountPrice}
          isStock={product.isStock}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}
