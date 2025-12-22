import React, { useContext, useState } from "react";
import "./mainPage.scss";
import ShopItem from "../../components/ShopItem/ShopItem";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import { ItemsContext } from "../../context/ItemsContext";

const MainPage = () => {
  const [filterCategories, setFilterCategories] = useState(["Hamısı", "Elektronika", "Təhsil"]);
  const [activeCategory, setActiveCategory] = useState(filterCategories[0] || "");

  const { shopItemsList, setShopItemsList } = useContext(ItemsContext);

  const { cartItemsList } = useContext(CartContext);

  return (
    <main>
      <div className='filters-row'>
        <a href='#'>Kateqoriyalar</a>
        {filterCategories.map((category) => (
          <button
            key={category}
            className={`${category === activeCategory ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='container'>
        <div className='left-part'>
          <div className='items-cart'>
            <div className='items-cart-header'>
              <h3>Səbət</h3>{" "}
              {cartItemsList.length > 0 && (
                <span>{cartItemsList.reduce((sum, item) => sum + item.count, 0)}</span>
              )}
            </div>
            {cartItemsList.length > 0 ? (
              <div>
                {cartItemsList.map((item) => (
                  <CartItem
                    key={item.id + item.price}
                    id={item.id}
                    title={item.title}
                    count={item.count}
                    price={item.price}
                  />
                ))}
                <button className='add-button'>Sifarişi tanamla</button>
              </div>
            ) : (
              <div className='items-cart-empty'>Məhsul yoxdur</div>
            )}
          </div>
        </div>
        <div className='right-part'>
          <h3>Elektronika</h3>
          <p>3 məhsul mövcuddur</p>
          <div className='shop-items-list'>
            {shopItemsList.map(
              (item) =>
                (item.category === activeCategory || activeCategory === "Hamısı") && (
                  <ShopItem
                    id={item.id}
                    key={item.title + item.price}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    image={item.image}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
