import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import HeroImage from "../assets/images.png";
import Logo from "../assets/logo.png";
import Category from "../components/Category";
import Popular from "../components/Popular";
import Specialpackage from "../components/Specialpackage";
import OurCreation from "../components/OurCreation";
import Benifits from "../components/Benifits";
import Testimonials from "../components/Testimonials";
import NewsletterFooter from "../components/NewsletterFooter";


export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbarcontainer">
        <div className="NavbarNavigator container px-3 px-md-4 justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand p-0 m-0" to="/">
            <img className="logo" src={Logo} alt="Logo" />
          </Link>

          {/* Right side icons & Mobile Hamburger Button */}
          <div className="d-flex align-items-center gap-2 gap-sm-3 order-lg-3">
            <div className="d-flex gap-2 gap-sm-3 gap-lg-4 icons-container">
              <button
                type="button"
                className="btn p-0 border-0 bg-transparent nav-icon-btn"
                onClick={() => navigate("/products")}
                title="Search products"
                aria-label="Search products"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="rgb(7, 72, 74)"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>

              <button
                type="button"
                className="btn p-0 border-0 bg-transparent nav-icon-btn"
                onClick={() => navigate("/products")}
                title="Shopping cart"
                aria-label="Shopping cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="bi bi-cart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </button>

              <button
                type="button"
                className="btn p-0 border-0 bg-transparent nav-icon-btn"
                title="Account"
                aria-label="User account"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#054547"
                  className="bi bi-person-circle-solid"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                  />
                </svg>
              </button>
            </div>

            <button
              className="navbar-toggler border-0 shadow-none d-lg-none"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Collapsible Nav Links */}
          <div
            className={`collapse navbar-collapse justify-content-center order-lg-2 ${isOpen ? "show" : ""}`}
          >
            <div className="d-flex flex-column flex-lg-row gap-3 gap-lg-4 align-items-center mobile-nav-links-inner">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="navlink"
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="navlink"
              >
                Products
              </Link>
              <a
                href="#categories"
                onClick={() => setIsOpen(false)}
                className="navlink"
              >
                Categories
              </a>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="navlink"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="navlink"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-wrapper">
        <img className="Navsection" src={HeroImage} alt="Furniture Hero" />

        <div className="hero-content">
          <div className="container px-3 px-sm-4 px-lg-5">
            <h1 className="hero-title">
              Exclusive Deals of
              <br />
              Furniture Collection
            </h1>
            <p className="hero-subtitle mt-2 mt-sm-3 mt-md-4">
              Explore different categories. Find the best deals.
            </p>
            <button
              type="button"
              className="btn hero-btn mt-2 mt-sm-3"
              onClick={() => navigate("/products")}
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <main id="home">
        <Category />
        <Popular />
        <Specialpackage />
        <OurCreation />
        <Benifits />
        <Testimonials />
        <NewsletterFooter />
       
      </main>
    </>
  );
}
