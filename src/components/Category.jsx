import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Category.css";
import Bed from "../assets/Bedroom.jpg";
import Dining from "../assets/Dining.jpg";
import Meeting from "../assets/MeetingRoom.jpg";
import Office from "../assets/Office.jpg";
import Living from "../assets/Living.jpg";
import Kitchen from "../assets/Kitchen.jpg";
import LivingSpace from "../assets/Creation.png";

function Category() {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeCategory, setActiveCategory] = useState("bedroom"); // Bedroom selected by default
  const [thumbStyle, setThumbStyle] = useState({ top: 0, height: 38, opacity: 1 });
  const [trackHeight, setTrackHeight] = useState(320);

  const navigate = useNavigate();
  const itemRefs = useRef({});
  const listRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const categoriesData = [
    { id: "bedroom", dbId: 1, name: "Bedroom", img: Bed },
    { id: "dining", dbId: 2, name: "Dinning Room", img: Dining },
    { id: "meeting", dbId: 3, name: "Meeting Room", img: Meeting },
    { id: "workspace", dbId: 4, name: "Workspace", img: Office },
    { id: "living", dbId: 5, name: "Living Room", img: Living },
    { id: "kitchen", dbId: 6, name: "Kitchen", img: Kitchen },
    { id: "living-space", dbId: 7, name: "Living Space", img: LivingSpace },
  ];

  const filteredCategories = categoriesData.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Position vertical active thumb dynamically next to the active item
  useEffect(() => {
    if (activeCategory && itemRefs.current[activeCategory]) {
      const el = itemRefs.current[activeCategory];
      const top = el.offsetTop + (el.offsetHeight - 38) / 2;
      setThumbStyle({
        top: Math.max(0, top),
        height: 38,
        opacity: 1,
      });
    } else {
      setThumbStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeCategory, searchTerm]);

  // Adjust track height to reach up to the arrow navigation buttons
  useEffect(() => {
    if (itemRefs.current["kitchen"]) {
      const kitchenEl = itemRefs.current["kitchen"];
      setTrackHeight(kitchenEl.offsetTop + 10);
    } else if (listRef.current) {
      setTrackHeight(Math.max(160, listRef.current.offsetHeight - 80));
    }
  }, [searchTerm]);

  // Handle category selection and smooth scrolling to card
  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    const targetCard = document.getElementById(`cat-card-${id}`);
    if (targetCard && scrollContainerRef.current) {
      const containerTop = scrollContainerRef.current.getBoundingClientRect().top;
      const cardTop = targetCard.getBoundingClientRect().top;
      const offset = cardTop - containerTop + scrollContainerRef.current.scrollTop;
      scrollContainerRef.current.scrollTo({
        top: Math.max(0, offset - 15),
        behavior: "smooth",
      });
    }
  };

  // Up arrow: select previous category
  const handlePrevCategory = () => {
    const currentIndex = categoriesData.findIndex((c) => c.id === activeCategory);
    const newIndex = currentIndex <= 0 ? categoriesData.length - 1 : currentIndex - 1;
    handleCategoryClick(categoriesData[newIndex].id);
  };

  // Down arrow: select next category
  const handleNextCategory = () => {
    const currentIndex = categoriesData.findIndex((c) => c.id === activeCategory);
    const newIndex =
      currentIndex === -1 || currentIndex >= categoriesData.length - 1
        ? 0
        : currentIndex + 1;
    handleCategoryClick(categoriesData[newIndex].id);
  };

  // All Categories button handler - navigates to separate products page
  const handleAllCategories = () => {
    navigate("/category/all");
  };

  // Explore button on individual card - navigates to that specific category page
  const handleExploreCategory = (cat) => {
    navigate(`/category/${cat.dbId}`);
  };

  return (
    <section id="categories" className="category-section-container">
      <div className="mt-5 mb=5">
        <h1 className="popular-heading">Explore by Category</h1>
      </div>
      <div className="category-main-grid">
        {/* Left Sidebar */}
        <div className="category-sidebar">
          {/* Search Box */}
          <div className="category-search-box">
            <svg
              className="category-search-icon"
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
              className="category-search-input"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Categories Nav with Vertical Bar */}
          <div className="category-nav-wrapper">
            {/* Category Items List */}
            <div className="category-items-col" ref={listRef}>
              {filteredCategories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    ref={(el) => (itemRefs.current[cat.id] = el)}
                    className={`category-item-btn ${isActive ? "active" : ""}`}
                    onClick={() => handleCategoryClick(cat.id)}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Vertical Bar & Up/Down Arrows */}
            <div className="category-track-container">
              <div
                className="category-vertical-track"
                style={{ height: `${trackHeight}px` }}
              >
                {/* Active Indicator Thumb */}
                <div
                  className="category-track-thumb"
                  style={{
                    top: `${thumbStyle.top}px`,
                    height: `${thumbStyle.height}px`,
                    opacity: thumbStyle.opacity,
                  }}
                />
              </div>

              {/* Circular Navigation Arrows */}
              <div className="category-arrow-controls">
                <button
                  type="button"
                  className="category-circle-arrow-btn category-circle-arrow-up"
                  onClick={handlePrevCategory}
                  title="Previous Category"
                  aria-label="Previous Category"
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
                      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="category-circle-arrow-btn category-circle-arrow-down"
                  onClick={handleNextCategory}
                  title="Next Category"
                  aria-label="Next Category"
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
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* All Categories Button */}
          <button
            type="button"
            className="category-all-btn"
            onClick={handleAllCategories}
          >
            All Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
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

        {/* Right Cards Grid */}
        <div className="category-grid-scroll-box" ref={scrollContainerRef}>
          <div className="category-cards-grid">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category) => {
                const isOverlayVisible =
                  hoveredCard === category.id || activeCategory === category.id;

                return (
                  <div
                    key={category.id}
                    id={`cat-card-${category.id}`}
                    className="category-card-item"
                    onMouseEnter={() => setHoveredCard(category.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <img
                      src={category.img}
                      alt={category.name}
                      className="category-card-photo"
                    />

                    {/* Overlay: displays when active or hovered */}
                    <div
                      className={`category-card-overlay ${
                        isOverlayVisible ? "visible" : ""
                      }`}
                    >
                      <h2 className="category-card-title">{category.name}</h2>
                      <button
                        type="button"
                        className="category-explore-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleExploreCategory(category);
                        }}
                      >
                        Explore
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="category-no-results">
                <h3>No categories found matching &quot;{searchTerm}&quot;</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Category;
