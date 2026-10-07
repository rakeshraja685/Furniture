import { useState, useRef, useEffect } from "react";
import "./Popular.css";
import BlueChair from "../assets/BlueChair.png";
import Chair1 from "../assets/Chair1.png";
import Chair2 from "../assets/Chair2.png";
import Chair3 from "../assets/Chair3.png";
import Chair4 from "../assets/Chair4.png";

function Popular() {
  const carouselRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const products = [
    {
      id: 1,
      title: "Armchair",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair1,
      bgColor: "#c8f2e2",
    },
    {
      id: 2,
      title: "Premium Sofa",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair2,
      bgColor: "#ddf0f8",
    },
    {
      id: 3,
      title: "Minimal Sofa",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair3,
      bgColor: "#eeeaff",
    },
    {
      id: 4,
      title: "Dining Chair",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair4,
      bgColor: "#fef0dc",
    },
    {
      id: 5,
      title: "Modern Lounge",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair1,
      bgColor: "#c8f2e2",
    },
    {
      id: 6,
      title: "Studio Armchair",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair2,
      bgColor: "#ddf0f8",
    },
    {
      id: 7,
      title: "Classic Armchair",
      subtitle: "Light single chair",
      price: "$145",
      img: Chair3,
      bgColor: "#eeeaff",
    },
  ];

  const updateProgress = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll > 0) {
        const progress = Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    }
  };

  useEffect(() => {
    updateProgress();
    window.addEventListener("resize", updateProgress);
    return () => window.removeEventListener("resize", updateProgress);
  }, []);

  const moveCarousel = (direction) => {
    if (carouselRef.current) {
      const cardStep = 294; // 270px card width + 24px gap
      carouselRef.current.scrollBy({
        left: direction * cardStep,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="products" className="popular-section">
      <h2 className="popular-heading">Popular Products</h2>

      <div className="popular-content-wrapper">
        {/* Large Decorative Blue Armchair cropped on the left */}
        <img
          className="popular-bg-chair"
          src={BlueChair}
          alt="Decorative Blue Armchair"
          aria-hidden="true"
        />

        <div className="popular-carousel-area">
          {/* Scrollable Products Carousel */}
          <div
            ref={carouselRef}
            className="popular-cards-container"
            onScroll={updateProgress}
            aria-label="Popular products carousel"
          >
            {products.map((item) => (
              <div
                key={item.id}
                className="popular-card"
                style={{ backgroundColor: item.bgColor }}
              >
                <div className="popular-card-img-box">
                  <img
                    className="popular-card-img"
                    src={item.img}
                    alt={item.title}
                  />
                </div>
                <div className="popular-card-info">
                  <h3 className="popular-card-title">{item.title}</h3>
                  <p className="popular-card-subtitle">{item.subtitle}</p>
                  <span className="popular-card-price">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal Track & Active Progress Thumb */}
          <div className="popular-track-wrapper">
            <div className="popular-track-line">
              <div
                className="popular-track-thumb"
                style={{
                  width: "90px",
                  left: `calc((${scrollProgress} / 100) * (100% - 90px))`,
                }}
              />
            </div>

            {/* Circular Navigation Arrows below track */}
            <div className="popular-arrows-controls">
              <button
                type="button"
                className="popular-circle-arrow-btn popular-arrow-left"
                onClick={() => moveCarousel(-1)}
                aria-label="Scroll left"
                title="Scroll left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </button>

              <button
                type="button"
                className="popular-circle-arrow-btn popular-arrow-right"
                onClick={() => moveCarousel(1)}
                aria-label="Scroll right"
                title="Scroll right"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Explore all items button */}
          <div className="popular-explore-wrapper">
            <button
              type="button"
              className="popular-explore-btn"
              onClick={() => alert("Explore all items")}
            >
              Explore all items
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
