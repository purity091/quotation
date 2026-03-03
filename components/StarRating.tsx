import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number; // 0 to 5
  maxRating?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  size?: number;
  activeColor?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  interactive = false,
  onRatingChange,
  size = 18,
  activeColor = '#fbbf24' // Default amber-400
}) => {
  return (
    <div className="flex items-center space-x-1 space-x-reverse">
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1;
        const isFilled = index < rating;
        
        return (
          <button
            key={index}
            type="button"
            disabled={!interactive}
            onClick={() => interactive && onRatingChange && onRatingChange(starValue)}
            className={`transition-all duration-200 ${
              interactive ? 'cursor-pointer hover:scale-110' : 'cursor-default'
            }`}
          >
            <Star
              size={size}
              style={{
                fill: isFilled ? activeColor : 'transparent',
                color: isFilled ? activeColor : '#e2e8f0', // slate-200 for empty
              }}
              className="transition-colors duration-300"
            />
          </button>
        );
      })}
    </div>
  );
};