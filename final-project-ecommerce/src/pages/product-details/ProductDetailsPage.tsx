import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./productDetailsPage.css";
import { PRODUCTS } from "../../data/products";
import { addToCart } from "../../store/cartSlice";
import { toggleWishlist, selectIsWishlisted } from "../../store/wishlistSlice";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill={filled ? "#FFAD33" : "none"} stroke='#FFAD33'>
    <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
  </svg>
);

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();
  const product = useMemo(() => PRODUCTS.find((item) => item.id === Number(id)), [id]);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const dispatch = useDispatch();
  const wishlisted = useSelector(selectIsWishlisted(Number(id)));

  if (!product) {
    return (
      <div className='product-details'>
        <div className='product-details-empty'>
          <h1>Product not found</h1>
          <p>We couldn't find the product you're looking for.</p>
          <Link to='/' className='product-details-back'>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const fallbackImage = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80";
  const images = product.images.length > 0 ? product.images : [fallbackImage];
  const image = images[activeImage] || images[0];

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name, image: image, price: product.price }));
  };

  const handleWishlist = () => {
    dispatch(
      toggleWishlist({
        id: product.id,
        name: product.name,
        image: image,
        price: product.price,
        originalPrice: product.originalPrice,
        discount: product.discount,
        rating: product.rating,
        reviewCount: product.reviewCount,
      }),
    );
  };

  return (
    <div className='product-details'>
      <div className='product-details-grid'>
        <div className='product-details-gallery'>
          <div className='product-details-thumbs'>
            {images.map((img, index) => (
              <button
                key={`${img}-${index}`}
                className={`product-details-thumb ${index === activeImage ? "active" : ""}`}
                onClick={() => setActiveImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className='product-details-main'>
            <img src={image} alt={product.name} />
          </div>
        </div>

        <div className='product-details-info'>
          <h1 className='product-details-title'>{product.name}</h1>
          <div className='product-details-meta'>
            <div className='product-details-rating'>
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < Math.round(product.rating)} />
              ))}
              <span className='product-details-review'>({product.reviewCount} Reviews)</span>
            </div>
            <span className='product-details-stock'>In Stock</span>
          </div>

          <div className='product-details-pricing'>
            <span className='product-details-price'>${product.price}</span>
            {product.originalPrice && (
              <span className='product-details-original'>${product.originalPrice}</span>
            )}
            {product.discount && <span className='product-details-discount'>-{product.discount}%</span>}
          </div>

          <p className='product-details-desc'>{product.description}</p>

          <div className='product-details-divider' />

          <div className='product-details-options'>
            <div className='product-details-option'>
              <span className='product-details-option-label'>Colours:</span>
              <div className='product-details-color-row'>
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    className={`product-details-color ${index === selectedColor ? "selected" : ""}`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(index)}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className='product-details-option'>
              <span className='product-details-option-label'>Size:</span>
              <div className='product-details-size-row'>
                {product.sizes.map((size, index) => (
                  <button
                    key={size}
                    className={`product-details-size ${index === selectedSize ? "selected" : ""}`}
                    onClick={() => setSelectedSize(index)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='product-details-actions'>
            <button className='product-details-add' onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button
              className={`product-details-wishlist ${wishlisted ? "active" : ""}`}
              onClick={handleWishlist}
            >
              {wishlisted ? "Wishlisted" : "Add to Wishlist"}
            </button>
          </div>

          <div className='product-details-perks'>
            <div className='product-details-perk'>
              <strong>Free Delivery</strong>
              <span>Enter your postal code for delivery availability.</span>
            </div>
            <div className='product-details-perk'>
              <strong>Return Delivery</strong>
              <span>Free 30-day returns for unopened items.</span>
            </div>
          </div>

          <div className='product-details-feature'>
            <h3>Highlights</h3>
            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
