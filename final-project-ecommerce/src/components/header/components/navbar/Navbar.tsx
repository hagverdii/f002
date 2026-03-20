import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import IconButton from "../../../icon-button/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, toggleCart } from "../../../../store/cartSlice";
import { selectWishlistCount, toggleWishlistDrawer } from "../../../../store/wishlistSlice";
import { NavLink } from "react-router-dom";
import { selectAuth, logout } from "../../../../store/authSlice";

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

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
  { label: "About", to: "/about" },
  { label: "Sign Up", to: "/signup" },
  { label: "Log in", to: "/login" },
];

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    dispatch(logout());
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const dispatch = useDispatch();
  const cartCount = useSelector((state) => selectCartCount(state));
  const wishlistCount = useSelector((state) => selectWishlistCount(state));
  const { isAuthenticated, user } = useSelector(selectAuth);

  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search:", search);
  };

  return (
    <nav className='navbar'>
      <NavLink to='/' className='navbar-brand'>
        Exclusive
      </NavLink>

      <ul className='navbar-links'>
        {NAV_LINKS.map((link) => {
          if (isAuthenticated && (link.label === "Sign Up" || link.label === "Log in")) return;
          return (
            <li key={link.label}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => `navbar-link ${isActive ? "navbar-link--active" : ""}`}
              >
                {link.label}
              </NavLink>
            </li>
          );
        })}
      </ul>

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

        <IconButton
          icon={<WishlistIcon />}
          count={wishlistCount}
          ariaLabel='Wishlist'
          onClick={() => dispatch(toggleWishlistDrawer())}
        />
        <IconButton
          icon={<CartIcon />}
          count={cartCount}
          ariaLabel='Cart'
          onClick={() => dispatch(toggleCart())}
        />
        {isAuthenticated && (
          <div className='navbar-user' ref={dropdownRef}>
            <button
              className='navbar-user-btn'
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-haspopup='true'
              aria-expanded={isDropdownOpen}
            >
              <span style={{ fontSize: "1rem", marginRight: ".5rem" }}>{user?.name || "User"}</span>
              <span>☰</span>
            </button>

            {isDropdownOpen && (
              <div className='navbar-dropdown' role='menu'>
                <button className='navbar-dropdown-item' onClick={handleLogout} role='menuitem'>
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
