import React, { useState } from "react";
import "./navbar.css";
import IconButton from "../../../icon-button/IconButton";

// --- SVG Icons ---
const SearchIcon = () => (
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
    <circle cx='11' cy='11' r='8' />
    <line x1='21' y1='21' x2='16.65' y2='16.65' />
  </svg>
);

const WishlistIcon = () => (
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
    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
  </svg>
);

const CartIcon = () => (
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
    <circle cx='9' cy='21' r='1' />
    <circle cx='20' cy='21' r='1' />
    <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
  </svg>
);

// --- Nav links config ---
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Sign Up", href: "/signup" },
];

interface NavbarProps {
  wishlistCount?: number;
  cartCount?: number;
}

const Navbar: React.FC<NavbarProps> = ({ wishlistCount = 0, cartCount = 0 }) => {
  const [search, setSearch] = useState("");
  const [activeLink, setActiveLink] = useState("Home");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // hook up to your search logic
    console.log("Search:", search);
  };

  return (
    <nav className='navbar'>
      {/* Brand */}
      <a href='/' className='navbar-brand'>
        Exclusive
      </a>

      {/* Nav Links */}
      <ul className='navbar-links'>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`navbar-link ${activeLink === link.label ? "navbar-link--active" : ""}`}
              onClick={() => setActiveLink(link.label)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right Side: Search + Icons */}
      <div className='navbar-right'>
        <form className='navbar-search' onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='What are you looking for?'
            className='navbar-search-input'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='navbar-search-btn' aria-label='Search'>
            <SearchIcon />
          </button>
        </form>

        {/* Reusable IconButton — badge shows when count > 0 */}
        <IconButton
          icon={<WishlistIcon />}
          count={wishlistCount}
          ariaLabel='Wishlist'
          onClick={() => console.log("Wishlist clicked")}
        />
        <IconButton
          icon={<CartIcon />}
          count={cartCount}
          ariaLabel='Cart'
          onClick={() => console.log("Cart clicked")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
