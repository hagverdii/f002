import React, { useMemo, useState } from "react";
import "./productsPage.css";
import { PRODUCTS } from "../../data/products";
import ProductCard from "../../components/product-card/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  // ✅ Get categories from data
  const categories = useMemo(() => {
    const unique = Array.from(new Set(PRODUCTS.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  // ✅ Safe category from URL
  const rawCategory = searchParams.get("category");
  const category = categories.includes(rawCategory || "") ? rawCategory! : "All";

  // ✅ Filtering logic
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const matchesCategory = category === "All" || product.category === category;

      const matchesQuery =
        normalized.length === 0 ||
        product.name.toLowerCase().includes(normalized) ||
        product.category.toLowerCase().includes(normalized);

      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className='products-page'>
      <div className='products-page-header'>
        <div>
          <h1 className='products-page-title'>All Products</h1>
          <p className='products-page-subtitle'>{filtered.length} items</p>
        </div>

        <div className='products-page-controls'>
          <input
            className='products-page-search'
            type='search'
            placeholder='Search by product or category'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <select
            className='products-page-select'
            value={category}
            onChange={(e) => {
              const value = e.target.value;

              setSearchParams((prev) => {
                if (value === "All") {
                  prev.delete("category");
                } else {
                  prev.set("category", value);
                }
                return prev;
              });
            }}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='products-page-grid'>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.images[0]}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rating={product.rating}
            reviewCount={product.reviewCount}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className='products-page-empty'>
          <h2>No products found</h2>
          <p>Try a different search or category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
