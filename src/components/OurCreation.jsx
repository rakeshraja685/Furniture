import { useState, useRef, useEffect } from "react";
import "./OurCreation.css";
import Card1 from "../assets/Card1.png";
import Card2 from "../assets/Card2.png";
import Card3 from "../assets/Card3.png";
import Card4 from "../assets/Card4.png";

function OurCreation() {
  const [activeCardId, setActiveCardId] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const carouselRef = useRef(null);

  const roomCards = [
    { id: 1, img: Card1, title: "Modern Minimalist Room" },
    { id: 2, img: Card2, title: "Cozy Aesthetic Studio" },
    { id: 3, img: Card3, title: "Nordic Living Space" },
    { id: 4, img: Card4, title: "Contemporary Architectural Suite" },
    { id: 5, img: Card1, title: "Grand Living Space" },
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
      const step = 310; // 290px card width + 20px gap
      carouselRef.current.scrollBy({
        left: direction * step,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="our-creation" className="our-creation-section">
      <div className="our-creation-wrapper">
        {/* Left Solid Teal Card with Heading & Controls */}
        <div className="creation-info-card">
          <div className="creation-text-top">
            <h2 className="creation-title">
              Our
              <br />
              Own Creation
            </h2>
            <p className="creation-subtitle">Designed in our studio</p>
          </div>

          <div className="creation-controls-row">
            <span className="creation-more-label">More</span>

            {/* Progress Slider Line */}
            <div className="creation-progress-track">
              <div
                className="creation-progress-thumb"
                style={{
                  left: `calc((${scrollProgress} / 100) * (80px - 26px))`,
                }}
              />
            </div>

            {/* Circular Arrows Group */}
            <div className="creation-arrows-group">
              <button
                type="button"
                className="creation-arrow-btn creation-arrow-left"
                onClick={() => moveCarousel(-1)}
                aria-label="Previous rooms"
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
                className="creation-arrow-btn creation-arrow-right"
                onClick={() => moveCarousel(1)}
                aria-label="Next rooms"
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
        </div>

        {/* Right Carousel Area with Room Cards */}
        <div className="creation-carousel-area">
          <div
            ref={carouselRef}
            className="creation-cards-track"
            onScroll={updateProgress}
            aria-label="Room creations carousel"
          >
            {roomCards.map((card) => {
              const isActive = activeCardId === card.id;

              return (
                <div
                  key={card.id}
                  className={`creation-room-card ${isActive ? "active" : ""}`}
                  onClick={() => setActiveCardId(card.id)}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="creation-room-img"
                  />

                  {/* Explore All Rooms Button */}
                  <button
                    type="button"
                    className="creation-explore-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Exploring: ${card.title}`);
                    }}
                  >
                    Explore All Rooms
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCreation;
