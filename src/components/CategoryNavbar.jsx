import { Link, useNavigate } from "react-router-dom";
import "./CategoryNavbar.css";
import Logo from "../assets/logo.png";

export default function CategoryNavbar({
  activeCategoryName = "Products",
  searchQuery = "",
  onSearchChange,
  cartCount = 0,
}) {
  const navigate = useNavigate();

  return (
    <header className="cat-page-nav-wrapper">
      <nav className="cat-page-navbar">
        {/* Left: Brand Logo & Back Button */}
        <div className="cat-page-nav-left">
          <Link to="/" className="cat-page-logo-link">
            <img src={Logo} alt="Furniture Studio" className="cat-page-logo" />
          </Link>

          <button
            type="button"
            className="cat-back-home-btn"
            onClick={() => navigate("/")}
            title="Back to Home Page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Center: Search Bar */}
        <div className="cat-page-search-container">
          <svg
            className="cat-search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            className="cat-search-input"
            placeholder={`Search items in ${activeCategoryName}...`}
            value={searchQuery}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
          {searchQuery && (
            <button
              type="button"
              className="cat-search-clear"
              onClick={() => onSearchChange && onSearchChange("")}
            >
              &times;
            </button>
          )}
        </div>

        {/* Right: Quick Links, Account & Cart */}
        <div className="cat-page-nav-right">
          <Link to="/" className="cat-nav-link">
            Home
          </Link>
          <Link to="/products" className="cat-nav-link active">
            All Products
          </Link>

          <div className="cat-nav-actions">
            {/* User Profile */}
            <button
              type="button"
              className="cat-icon-btn"
              title="User Account"
              aria-label="User Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#054547"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </button>

            {/* Shopping Cart */}
            <button
              type="button"
              className="cat-icon-btn cat-cart-btn"
              title="Shopping Cart"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#054547"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              {cartCount > 0 && <span className="cat-cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
