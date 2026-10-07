import { useState } from "react";
import "./Specialpackage.css";
import StarRating from "./StarRating";
import Larkin from "../assets/Larkin.png";
import Family from "../assets/Family.png";
import Family1 from "../assets/Family1.png";
import Family2 from "../assets/Family2.png";

function Specialpackage() {
  const [activePackageId, setActivePackageId] = useState(1);
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const packagesList = [
    {
      id: 1,
      name: "Living Room Family Set",
      price: "$229.99",
      rating: 5,
      thumb: Family,
      mainImg: Larkin,
      featuredTitle: "Larkin Wood Full Set",
      featuredPrice: "$729.99",
      descSnippet: "Cast Aluminum Outdoor Chaise Lounge As an elegant and classic touch to your outdoor space, this cast Aluminum Chaise Lounge combines the appearance, function and quality all together, offering you with the best experience.",
      extraDesc: " Engineered with weather-resistant coating and reinforced joint construction for all-season durability and luxurious seating comfort.",
    },
    {
      id: 2,
      name: "Living Room Special Set",
      price: "$329.99",
      rating: 5,
      thumb: Family1,
      mainImg: Family1,
      featuredTitle: "Living Room Modern Suite",
      featuredPrice: "$329.99",
      descSnippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Durable materials crafted with precision to deliver modern living aesthetics.",
      extraDesc: " High-density foam cushions wrapped in breathable upholstery with natural wood accents.",
    },
    {
      id: 3,
      name: "Living Room Special Set",
      price: "$587.99",
      rating: 5,
      thumb: Family2,
      mainImg: Family2,
      featuredTitle: "Living Room Luxury Lounge",
      featuredPrice: "$587.99",
      descSnippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Premium quality ergonomic design with plush cushioning and reinforced framing.",
      extraDesc: " Features modular configuration possibilities to fit diverse spatial layouts.",
    },
  ];

  const activePackage =
    packagesList.find((p) => p.id === activePackageId) || packagesList[0];

  // Up/Down navigation handlers
  const handlePrevPackage = () => {
    const currentIndex = packagesList.findIndex((p) => p.id === activePackageId);
    const newIndex = currentIndex <= 0 ? packagesList.length - 1 : currentIndex - 1;
    setActivePackageId(packagesList[newIndex].id);
  };

  const handleNextPackage = () => {
    const currentIndex = packagesList.findIndex((p) => p.id === activePackageId);
    const newIndex = currentIndex >= packagesList.length - 1 ? 0 : currentIndex + 1;
    setActivePackageId(packagesList[newIndex].id);
  };

  // Add to cart feedback
  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1800);
  };

  // Compute vertical thumb offset based on active package
  const getThumbOffset = () => {
    if (activePackageId === 1) return 0;
    if (activePackageId === 2) return 55;
    return 115;
  };

  return (
    <section id="special-package" className="special-package-section">
      <h2 className="special-heading">Special Package</h2>

      <div className="special-grid">
        {/* LEFT COLUMN: Main Featured Package */}
        <div className="special-featured-col">
          <div className="special-main-image-wrap">
            <img
              src={activePackage.mainImg}
              alt={activePackage.featuredTitle}
              className="special-main-image"
            />

            {/* Expand / Lightbox Button */}
            <button
              type="button"
              className="special-expand-btn"
              onClick={() => setIsLightboxOpen(true)}
              aria-label="Expand Image"
              title="View full image"
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
                  d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707m0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707m-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707"
                />
              </svg>
            </button>
          </div>

          <div className="special-featured-details">
            <div className="special-featured-info">
              <h3 className="special-featured-title">
                {activePackage.featuredTitle}
              </h3>
              <div className="special-stars-wrap">
                <StarRating totalStars={5} initialRating={5} size={20} />
              </div>
              <span className="special-featured-price">
                {activePackage.featuredPrice}
              </span>
            </div>

            <button
              type="button"
              className={`special-add-cart-btn ${addedToCart ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {addedToCart ? "Added! ✓" : "Add to cart"}
              {!addedToCart && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Description & Package List */}
        <div className="special-list-col">
          {/* Description Block */}
          <div className="special-description-box">
            <h4 className="special-desc-heading">Description</h4>
            <p className="special-desc-text">
              {activePackage.descSnippet}
              {isDescExpanded && activePackage.extraDesc}
            </p>
            <button
              type="button"
              className={`special-see-more-btn ${isDescExpanded ? "open" : ""}`}
              onClick={() => setIsDescExpanded(!isDescExpanded)}
            >
              {isDescExpanded ? "See Less" : "See More"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                />
              </svg>
            </button>
          </div>

          {/* Package 1: Top Item (offset on right so left card aligns with lower cards) */}
          <div className="special-top-card-wrapper">
            <div
              className="special-item-row"
              onClick={() => setActivePackageId(packagesList[0].id)}
            >
              <div className="special-item-thumb">
                <img src={packagesList[0].thumb} alt={packagesList[0].name} />
              </div>

              <div
                className={`special-item-card ${
                  activePackageId === packagesList[0].id ? "active" : ""
                }`}
              >
                <div className="special-item-header">
                  <span className="special-item-name">{packagesList[0].name}</span>
                  <span className="special-item-price">{packagesList[0].price}</span>
                </div>

                <div className="special-stars-wrap">
                  <StarRating
                    totalStars={5}
                    initialRating={packagesList[0].rating}
                    size={14}
                  />
                </div>

                {activePackageId === packagesList[0].id ? (
                  <div className="special-item-footer">
                    <span
                      className="special-details-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLightboxOpen(true);
                      }}
                    >
                      See Details
                    </span>

                    <button
                      type="button"
                      className="special-search-badge"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsLightboxOpen(true);
                      }}
                      title="Quick view"
                      aria-label="Quick view"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <div>
                    <p className="special-item-desc">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <span className="special-see-more-btn">
                      See More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                        />
                      </svg>
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Lower Section: Card 2 & Card 3 with Vertical Ruler & Controls alongside */}
          <div className="special-lower-wrapper">
            <div className="special-lower-cards">
              {/* Package 2 */}
              <div
                className="special-item-row"
                onClick={() => setActivePackageId(packagesList[1].id)}
              >
                <div className="special-item-thumb">
                  <img src={packagesList[1].thumb} alt={packagesList[1].name} />
                </div>

                <div
                  className={`special-item-card ${
                    activePackageId === packagesList[1].id ? "active" : ""
                  }`}
                >
                  <div className="special-item-header">
                    <span className="special-item-name">{packagesList[1].name}</span>
                    <span className="special-item-price">{packagesList[1].price}</span>
                  </div>

                  <div className="special-stars-wrap">
                    <StarRating
                      totalStars={5}
                      initialRating={packagesList[1].rating}
                      size={14}
                    />
                  </div>

                  {activePackageId === packagesList[1].id ? (
                    <div className="special-item-footer">
                      <span
                        className="special-details-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsLightboxOpen(true);
                        }}
                      >
                        See Details
                      </span>

                      <button
                        type="button"
                        className="special-search-badge"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsLightboxOpen(true);
                        }}
                        title="Quick view"
                        aria-label="Quick view"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="special-item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <span className="special-see-more-btn">
                        See More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Package 3 */}
              <div
                className="special-item-row"
                onClick={() => setActivePackageId(packagesList[2].id)}
              >
                <div className="special-item-thumb">
                  <img src={packagesList[2].thumb} alt={packagesList[2].name} />
                </div>

                <div
                  className={`special-item-card ${
                    activePackageId === packagesList[2].id ? "active" : ""
                  }`}
                >
                  <div className="special-item-header">
                    <span className="special-item-name">{packagesList[2].name}</span>
                    <span className="special-item-price">{packagesList[2].price}</span>
                  </div>

                  <div className="special-stars-wrap">
                    <StarRating
                      totalStars={5}
                      initialRating={packagesList[2].rating}
                      size={14}
                    />
                  </div>

                  {activePackageId === packagesList[2].id ? (
                    <div className="special-item-footer">
                      <span
                        className="special-details-link"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsLightboxOpen(true);
                        }}
                      >
                        See Details
                      </span>

                      <button
                        type="button"
                        className="special-search-badge"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsLightboxOpen(true);
                        }}
                        title="Quick view"
                        aria-label="Quick view"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <p className="special-item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <span className="special-see-more-btn">
                        See More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Vertical Ruler & Navigation Arrows Aligned Right */}
            <div className="special-vertical-controls">
              <div className="special-vertical-track">
                <div
                  className="special-vertical-thumb"
                  style={{ top: `${getThumbOffset()}px` }}
                />
              </div>

              <div className="special-arrow-buttons">
                <button
                  type="button"
                  className="special-arrow-btn special-arrow-up"
                  onClick={handlePrevPackage}
                  title="Previous Package"
                  aria-label="Previous Package"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="special-arrow-btn special-arrow-down"
                  onClick={handleNextPackage}
                  title="Next Package"
                  aria-label="Next Package"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {isLightboxOpen && (
        <div
          className="special-lightbox-overlay"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="special-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="special-lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={activePackage.mainImg}
              alt={activePackage.featuredTitle}
              className="special-lightbox-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Specialpackage;
