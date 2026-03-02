import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import ProductCard from "../../components/product-card/ProductCard";
import { PRODUCTS } from "../../data/products";

interface SlideData {
  id: number;
  brand: string;
  tagline: string;
  headline: string;
  cta: string;
  image: string;
  bg: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    brand: "🍎  iPhone 14 Series",
    tagline: "",
    headline: "Up to 10%\noff Voucher",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=600&q=80",
    bg: "#0d0d0d",
  },
  {
    id: 2,
    brand: "🎮  Gaming Gear",
    tagline: "",
    headline: "Level Up\nYour Setup",
    cta: "Explore",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&q=80",
    bg: "#0a1628",
  },
  {
    id: 3,
    brand: "👟  Sneaker Drop",
    tagline: "",
    headline: "New Season\nNew Kicks",
    cta: "Buy Now",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    bg: "#1a0a00",
  },
  {
    id: 4,
    brand: "🎧  Audio",
    tagline: "",
    headline: "Sound That\nMoves You",
    cta: "Shop Now",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
    bg: "#0d0020",
  },
  {
    id: 5,
    brand: "💻  Laptops",
    tagline: "",
    headline: "Work Smarter\nNot Harder",
    cta: "View Deals",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
    bg: "#001a0d",
  },
];

const CATEGORIES = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

const FLASH_PRODUCTS = PRODUCTS.slice(0, 12).map((product) => ({
  id: product.id,
  name: product.name,
  image: product.images[0],
  price: product.price,
  originalPrice: product.originalPrice,
  discount: product.discount,
  rating: product.rating,
  reviewCount: product.reviewCount,
}));

const useCountdown = (targetSeconds: number) => {
  const [seconds, setSeconds] = useState(targetSeconds);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds % 86400) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return { days, hours, minutes, secs };
};

const ArrowRight = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='9 18 15 12 9 6' />
  </svg>
);
const ArrowLeft = () => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='15 18 9 12 15 6' />
  </svg>
);

const HomePage: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, secs } = useCountdown(3 * 86400 + 23 * 3600 + 19 * 60 + 56);

  const scrollProducts = (dir: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;
    const amount = 280;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const slide = SLIDES[activeSlide];

  return (
    <div className='home'>
      <div className='home-hero'>
        <aside className='home-sidebar'>
          {CATEGORIES.map((cat, i) => (
            <a key={i} href='#' className='home-sidebar-link'>
              {cat}
              {(cat === "Woman's Fashion" || cat === "Men's Fashion") && (
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <polyline points='9 18 15 12 9 6' />
                </svg>
              )}
            </a>
          ))}
        </aside>

        <div className='home-slider' style={{ backgroundColor: slide.bg }}>
          <div className='home-slider-content'>
            <p className='home-slide-brand'>{slide.brand}</p>
            <h2 className='home-slide-headline'>
              {slide.headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <a href='#' className='home-slide-cta'>
              {slide.cta}
              <svg
                width='18'
                height='18'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='5' y1='12' x2='19' y2='12' />
                <polyline points='12 5 19 12 12 19' />
              </svg>
            </a>
          </div>
          <div className='home-slider-image-wrap'>
            <img src={slide.image} alt={slide.brand} className='home-slider-image' />
          </div>

          <div className='home-slider-dots'>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`home-slider-dot ${i === activeSlide ? "active" : ""}`}
                onClick={() => setActiveSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <section className='home-flash-sales'>
        <div className='home-section-label'>
          <span className='home-section-label-bar' />
          <span className='home-section-label-text'>Today's</span>
        </div>

        <div className='home-flash-header'>
          <h2 className='home-flash-title'>Flash Sales</h2>

          <div className='home-countdown'>
            {[
              { label: "Days", value: days },
              { label: "Hours", value: hours },
              { label: "Minutes", value: minutes },
              { label: "Seconds", value: secs },
            ].map((item, i) => (
              <React.Fragment key={item.label}>
                <div className='home-countdown-unit'>
                  <span className='home-countdown-label'>{item.label}</span>
                  <span className='home-countdown-value'>{String(item.value).padStart(2, "0")}</span>
                </div>
                {i < 3 && <span className='home-countdown-sep'>:</span>}
              </React.Fragment>
            ))}
          </div>

          <div className='home-carousel-arrows'>
            <button className='home-arrow-btn' onClick={() => scrollProducts("left")} aria-label='Previous'>
              <ArrowLeft />
            </button>
            <button className='home-arrow-btn' onClick={() => scrollProducts("right")} aria-label='Next'>
              <ArrowRight />
            </button>
          </div>
        </div>

        <div className='home-product-carousel' ref={carouselRef}>
          {FLASH_PRODUCTS.map((product) => (
            <div className='home-product-carousel-item' key={product.id}>
              <ProductCard {...product} onQuickView={(id) => console.log("Quick view:", id)} />
            </div>
          ))}
        </div>

        <div className='home-view-all-wrap'>
          <Link to='/products' className='home-view-all-btn'>
            View All Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
