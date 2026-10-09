import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CategoryNavbar from "../components/CategoryNavbar";
import NewsletterFooter from "../components/NewsletterFooter";
import { fetchProductsByCategory, fetchAllProducts } from "../services/api";
import "./CategoryProductsPage.css";

// Assets
import Chair1 from "../assets/Chair1.png";
import Chair2 from "../assets/Chair2.png";
import Chair3 from "../assets/Chair3.png";
import Chair4 from "../assets/Chair4.png";
import BedImg from "../assets/Bedroom.jpg";
import DiningImg from "../assets/Dining.jpg";
import MeetingImg from "../assets/MeetingRoom.jpg";
import OfficeImg from "../assets/Office.jpg";
import LivingImg from "../assets/Living.jpg";
import KitchenImg from "../assets/Kitchen.jpg";
import CreationImg from "../assets/Creation.png";

// Categories metadata matching MySQL IDs
export const CATEGORIES_LIST = [
  { id: "all", dbId: "all", name: "All Categories", desc: "Explore our complete luxury furniture catalogue." },
  { id: "bedroom", dbId: 1, name: "Bedroom", desc: "Crafted for peaceful sleep and serene relaxation.", img: BedImg },
  { id: "dining", dbId: 2, name: "Dining Room", desc: "Elegantly designed dining tables, chairs, and cabinets.", img: DiningImg },
  { id: "meeting", dbId: 3, name: "Meeting Room", desc: "Sophisticated conference setups and executive seating.", img: MeetingImg },
  { id: "workspace", dbId: 4, name: "Workspace", desc: "Ergonomic desks and smart storage for peak productivity.", img: OfficeImg },
  { id: "living", dbId: 5, name: "Living Room", desc: "Plush velvet sofas, coffee tables, and contemporary suites.", img: LivingImg },
  { id: "kitchen", dbId: 6, name: "Kitchen", desc: "Modular islands, storage racks, and organized spaces.", img: KitchenImg },
  { id: "living-space", dbId: 7, name: "Living Space", desc: "Handcrafted hammocks, floor lamps, and room accents.", img: CreationImg },
];

const CATEGORY_DEFAULT_IMAGES = {
  1: BedImg,
  2: DiningImg,
  3: MeetingImg,
  4: OfficeImg,
  5: LivingImg,
  6: KitchenImg,
  7: CreationImg,
};

const PRODUCT_ICONS = [Chair1, Chair2, Chair3, Chair4];

export default function CategoryProductsPage() {
  const { categoryId: rawCategoryId } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState({});

  // Resolve active category object
  const activeCategory = useMemo(() => {
    if (!rawCategoryId || rawCategoryId === "all") {
      return CATEGORIES_LIST[0];
    }
    const matched = CATEGORIES_LIST.find(
      (c) => String(c.dbId) === String(rawCategoryId) || c.id === rawCategoryId
    );
    return matched || CATEGORIES_LIST[0];
  }, [rawCategoryId]);

  const targetDbId = activeCategory.dbId;

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [rawCategoryId]);

  // Fetch products from backend API
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    const loadData = async () => {
      try {
        let data;
        if (targetDbId === "all") {
          data = await fetchAllProducts();
        } else {
          data = await fetchProductsByCategory(targetDbId);
        }

        if (isMounted) {
          if (Array.isArray(data)) {
            setProducts(data);
          } else {
            setProducts([]);
          }
        }
      } catch (err) {
        console.error("Failed to fetch products from backend:", err);
        if (isMounted) {
          setProducts([]);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [targetDbId]);

  // Filter and sort products
  const processedProducts = useMemo(() => {
    let list = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          (p.productName || "").toLowerCase().includes(q) ||
          (p.categoryname || "").toLowerCase().includes(q)
      );
    }

    if (sortBy === "price-low") {
      list.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortBy === "price-high") {
      list.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sortBy === "name-asc") {
      list.sort((a, b) => (a.productName || "").localeCompare(b.productName || ""));
    }

    return list;
  }, [products, searchQuery, sortBy]);

  const handleAddToCart = (id) => {
    setAddedItems((prev) => ({ ...prev, [id]: true }));
    setCartCount((prev) => prev + 1);
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  const handleCategorySwitch = (cat) => {
    if (cat.id === "all") {
      navigate("/category/all");
    } else {
      navigate(`/category/${cat.dbId}`);
    }
  };

  return (
    <div className="cat-page-root">
      {/* 1. Dedicated Top Navigation Bar */}
      <CategoryNavbar
        activeCategoryName={activeCategory.name}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartCount}
      />

      {/* 2. Page Hero Banner */}
      <section className="cat-page-hero">
        <div className="cat-page-container">
          {/* Breadcrumbs */}
          <nav className="cat-breadcrumbs">
            <Link to="/">Home</Link>
            <span className="cat-crumb-sep">/</span>
            <Link to="/products">Categories</Link>
            <span className="cat-crumb-sep">/</span>
            <span className="cat-crumb-current">{activeCategory.name}</span>
          </nav>

          <div className="cat-hero-main">
            <div className="cat-hero-text">
              <span className="cat-status-pill">
                <span className="status-dot live" />
                Live Store
              </span>
              <h1 className="cat-hero-title">{activeCategory.name} Collection</h1>
              <p className="cat-hero-desc">{activeCategory.desc}</p>
            </div>

            {activeCategory.img && (
              <div className="cat-hero-image-box">
                <img
                  src={activeCategory.img}
                  alt={activeCategory.name}
                  className="cat-hero-preview-img"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Category Selector & Controls Bar */}
      <section className="cat-controls-section">
        <div className="cat-page-container">
          <div className="cat-controls-row">
            {/* Category Filter Pills */}
            <div className="cat-pills-scroller">
              {CATEGORIES_LIST.map((cat) => {
                const isActive =
                  (cat.dbId === "all" && targetDbId === "all") ||
                  cat.dbId === targetDbId;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    className={`cat-pill-btn ${isActive ? "active" : ""}`}
                    onClick={() => handleCategorySwitch(cat)}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Sort Dropdown */}
            <div className="cat-sort-wrapper">
              <label htmlFor="sort-select" className="cat-sort-label">
                Sort by:
              </label>
              <select
                id="sort-select"
                className="cat-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Showcase Grid */}
      <main className="cat-products-main">
        <div className="cat-page-container">
          <div className="cat-grid-meta-bar">
            <span className="cat-items-count-text">
              Showing <strong>{processedProducts.length}</strong> items in{" "}
              <strong>{activeCategory.name}</strong>
            </span>
          </div>

          {loading ? (
            <div className="cat-page-grid">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="cat-page-skeleton-card">
                  <div className="skeleton-img-box" />
                  <div className="skeleton-line title" />
                  <div className="skeleton-line price" />
                </div>
              ))}
            </div>
          ) : processedProducts.length > 0 ? (
            <div className="cat-page-grid">
              {processedProducts.map((prod, index) => {
                const isAdded = !!addedItems[prod.id];
                const cardImg =
                  prod.img ||
                  CATEGORY_DEFAULT_IMAGES[prod.category_id || targetDbId] ||
                  PRODUCT_ICONS[index % PRODUCT_ICONS.length];

                return (
                  <article key={prod.id} className="cat-page-product-card">
                    <div className="card-img-container">
                      <img
                        src={cardImg}
                        alt={prod.productName}
                        className="card-product-img"
                        loading="lazy"
                      />
                      <span className="card-stock-badge">
                        Stock: {prod.quandity ?? prod.quantity ?? 0}
                      </span>
                      <button
                        type="button"
                        className="card-heart-btn"
                        title="Add to wishlist"
                        aria-label="Add to wishlist"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-heart"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                      </button>
                    </div>

                    <div className="card-product-content">
                      <span className="card-category-tag">
                        {prod.categoryname || activeCategory.name}
                      </span>
                      <h2 className="card-product-title">{prod.productName}</h2>

                      <div className="card-product-bottom">
                        <div className="card-price-display">
                          ₹{Number(prod.price).toLocaleString("en-IN")}
                        </div>

                        <button
                          type="button"
                          className={`card-cart-btn ${isAdded ? "added" : ""}`}
                          onClick={() => handleAddToCart(prod.id)}
                        >
                          {isAdded ? "Added ✓" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="cat-empty-state">
              <div className="cat-empty-icon">🛋️</div>
              <h2 className="cat-empty-title">No products available</h2>
              <p className="cat-empty-desc">
                {searchQuery.trim()
                  ? `We couldn't find any items matching "${searchQuery}".`
                  : `There are currently no products available in ${activeCategory.name}.`}
              </p>
              {searchQuery.trim() && (
                <button
                  type="button"
                  className="cat-reset-search-btn"
                  onClick={() => setSearchQuery("")}
                >
                  Clear Search
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* 5. Footer */}
      <NewsletterFooter />
    </div>
  );
}