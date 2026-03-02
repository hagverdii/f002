import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.css";
import { PRODUCTS } from "../../data/products";

const ROUTE_LABELS: Record<string, string> = {
  about: "About",
  contact: "Contact",
  login: "Login",
  signup: "Sign Up",
  products: "Products",
  checkout: "Checkout",
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const items = useMemo(() => {
    const crumbs: { label: string; to?: string }[] = [{ label: "Home", to: "/" }];
    if (segments.length === 0) return crumbs;

    segments.forEach((segment, index) => {
      if (segment === "products" && segments[index + 1]) {
        crumbs.push({ label: ROUTE_LABELS.products, to: "/products" });
        return;
      }

      if (segments[index - 1] === "products") {
        const product = PRODUCTS.find((item) => item.id === Number(segment));
        crumbs.push({ label: product?.name ?? `Product ${segment}` });
        return;
      }

      const label = ROUTE_LABELS[segment] ?? segment.replace(/-/g, " ");
      crumbs.push({ label, to: `/${segments.slice(0, index + 1).join("/")}` });
    });

    return crumbs;
  }, [segments.join("|")]);

  return (
    <nav className='breadcrumbs' aria-label='Breadcrumb'>
      <div className='breadcrumbs-inner'>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <div key={`${item.label}-${index}`} className='breadcrumbs-item'>
              {item.to && !isLast ? (
                <Link to={item.to} className='breadcrumbs-link'>
                  {item.label}
                </Link>
              ) : (
                <span className={`breadcrumbs-current ${isLast ? "is-last" : ""}`}>{item.label}</span>
              )}
              {!isLast && <span className='breadcrumbs-sep'>/</span>}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
