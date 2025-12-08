import "./productCard.css";

export default function ProductCard({ name, price, discountPrice, isStock, imageUrl }) {
  return (
    <div className='product-card'>
      <img src={imageUrl} alt={name} />

      <h3>{name}</h3>

      {discountPrice ? (
        <p>
          <span style={{ textDecoration: "line-through", color: "gray", marginRight: "10px" }}>
            {price} $
          </span>
          <span style={{ color: "red", fontWeight: "bold" }}>{discountPrice} $</span>
        </p>
      ) : (
        <p>{price} $</p>
      )}

      {isStock ? (
        <button className='add-btn'>Səbətə at</button>
      ) : (
        <button className='disabled-btn' disabled>
          Stokda yoxdur
        </button>
      )}
    </div>
  );
}
