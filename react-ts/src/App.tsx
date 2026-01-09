import "./App.css";
import ShopItemCard from "./components/ShopItemCard/ShopItemCard";

function App() {
  return (
    <>
      <ShopItemCard
        imageSrc='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'
        category='Headphones'
        title='Polaroid Camera With Instant Print'
        colors={["#000000", "#ffffff", "#ff0000"]}
        rating={4.7}
        price={199.99}
      />
    </>
  );
}

export default App;
