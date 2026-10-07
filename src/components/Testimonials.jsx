import { useState, useRef } from "react";
import Family from "../assets/Family.png";
import Family1 from "../assets/Family1.png";
import Family2 from "../assets/Family2.png";
import Creation from "../assets/Creation.png";
import "../App.css";

const reviews = [
  {
    image: Family,
    quote:
      "My experience with Mark is a complete success, from customer service, wide range of products, clean store, purchasing experience, the newsletter. Thank you.",
    name: "Leona Paul",
    role: "CEO of Floatcom",
  },
  {
    image: Family1,
    quote:
      "The team made furnishing our new home effortless. Every piece feels considered, beautifully made, and arrived exactly when promised.",
    name: "Eleanor Smith",
    role: "Interior Designer",
  },
  {
    image: Family2,
    quote:
      "Excellent service from start to finish. The collection is stylish, the quality is wonderful, and the support team was incredibly helpful.",
    name: "David Miller",
    role: "Homeowner",
  },
  {
    image: Creation,
    quote:
      "Exceptional craftsmanship and attention to detail. Our studio has never looked better, and our clients constantly compliment the furnishings.",
    name: "Sarah Jenkins",
    role: "Creative Director",
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragRatio, setDragRatio] = useState(null);
  const progressTrackRef = useRef(null);

  const review = reviews[active];
  const previous = () =>
    setActive((prev) => (prev - 1 + reviews.length) % reviews.length);
  const next = () =>
    setActive((prev) => (prev + 1) % reviews.length);

  // Update active review based on pointer position on the bar
  const updateFromPointer = (clientX) => {
    if (progressTrackRef.current) {
      const rect = progressTrackRef.current.getBoundingClientRect();
      if (rect.width <= 0) return;
      const clickX = clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      setDragRatio(ratio);
      const targetIndex = Math.min(
        reviews.length - 1,
        Math.floor(ratio * reviews.length)
      );
      setActive(targetIndex);
    }
  };

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromPointer(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updateFromPointer(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    setDragRatio(null);
    try {
      if (e.currentTarget && e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {
      // Safe fallback if capture already ended
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      e.preventDefault();
      previous();
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(reviews.length - 1);
    }
  };

  // Base progress width percentage
  const activePercent = ((active + 1) / reviews.length) * 100;
  const currentProgressPercent =
    isDragging && dragRatio !== null
      ? Math.max(12, Math.min(100, dragRatio * 100))
      : activePercent;

  return (
    <section className="TestimonialsSection" aria-labelledby="testimonials-title">
      <div className="TestimonialsHeading">
        <h2 id="testimonials-title" className="category-heading">
          Testimonials
        </h2>
        <p>Over 15,000 happy customers.</p>
      </div>

      <div className="testimonial-wrap container">
        <div className="testimonial-content">
          <div className="testimonial-image-wrap">
            <span className="quote-mark" aria-hidden="true">
              “
            </span>
            <img
              key={active}
              src={review.image}
              alt={`${review.name}, customer`}
              className="testimonial-image"
            />
          </div>

          <article key={`text-${active}`} className="testimonial-copy" aria-live="polite">
            <blockquote>“{review.quote}”</blockquote>
            <h3>{review.name}</h3>
            <p>{review.role}</p>
          </article>

          <div className="testimonial-controls" aria-label="Review navigation">
            <button
              className="upbtn"
              type="button"
              onClick={previous}
              aria-label="Previous testimonial"
              title="Previous testimonial"
            >
              &#8592;
            </button>
            <button
              className="downbtn"
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              title="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>

        <div className="testimonial-footer">
          {/* Interactive Progress Bar */}
          <div
            ref={progressTrackRef}
            className={`testimonial-progress ${isDragging ? "is-dragging" : ""}`}
            role="slider"
            tabIndex={0}
            aria-label="Testimonial progress bar. Click or drag to change review"
            aria-valuenow={active + 1}
            aria-valuemin={1}
            aria-valuemax={reviews.length}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onLostPointerCapture={handlePointerUp}
            onKeyDown={handleKeyDown}
            title="Click or drag anywhere on the bar to jump between reviews"
          >
            <div className="testimonial-progress-rail">
              <span
                className="testimonial-progress-fill"
                style={{ width: `${currentProgressPercent}%` }}
              >
                <span className="testimonial-progress-thumb" />
              </span>
            </div>
          </div>

          <button
            type="button"
            className="all-reviews"
            onClick={next}
            title="Next testimonial"
          >
            See all reviews →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
