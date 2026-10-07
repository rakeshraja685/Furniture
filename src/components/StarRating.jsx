import { useState } from 'react';

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange, size = 20 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '4px', cursor: 'pointer' }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <svg
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill={starValue <= (hover || rating) ? '#FFC107' : '#E4E5E9'}
            stroke="#D1D5DB"
            strokeWidth="1"
            style={{ transition: 'fill 0.2s ease' }}
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;
