import React, { useState, useEffect } from "react";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import Apple from "../images/Apple-watchs.svg";
import LikedImage from "../images/LikedImage.svg"; // Path to the uploaded liked image

const ProductCard = ({ product, index }) => {
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(4);
  const [reviews, setReviews] = useState(131);
  const totalVariants = 3;

  // Product variants with different prices
  const variants = [
    { image: Apple, price: 120.0, color: "Gray", baseRating: 4 },
    { image: Apple, price: 175.0, color: "Silver", baseRating: 4.5 },
    { image: Apple, price: 225.0, color: "Gold", baseRating: 3.8 },
  ];

  // Update rating when variant changes
  useEffect(() => {
    setRating(variants[currentVariant].baseRating);
  }, [currentVariant]);

  // Auto slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVariant((prev) => (prev + 1) % totalVariants);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <button
          key={index}
          onClick={() => handleRatingChange(index + 1)}
          className="cursor-pointer focus:outline-none"
        >
          <Star
            className={`w-4 h-4 ${
              index < rating
                ? "fill-[#FF9500] text-[#FF9500]"
                : "text-[#FF9500]"
            }`}
          />
        </button>
      ));
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setReviews((prev) => prev + 1);
  };
  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked((prev) => {
      const newLikedStatus = !prev;
      const productName = `Apple Watch Series 4 - ${variants[currentVariant].color}`;
  
      // Get the existing favorites from local storage
      const existingFavorites =
        JSON.parse(localStorage.getItem("favorites")) || [];
  
      if (newLikedStatus) {
        // Add liked product to local storage (even if it was already liked)
        const likedProduct = {
          name: productName,
          price: variants[currentVariant].price,
          image: LikedImage, // Show Liked Image when liked
          rating: rating,
          reviews: reviews,
        };
  
        // Always add the liked product to the list
        existingFavorites.push(likedProduct);
  
        // Update the favorites list in local storage
        localStorage.setItem(
          "favorites",
          JSON.stringify(existingFavorites)
        );
      }
  
      // No action needed when unliked, just return the new state
      return newLikedStatus;
    });
  };
  
  

  const handlePrevVariant = (e) => {
    e.stopPropagation();
    setCurrentVariant((prev) => (prev === 0 ? totalVariants - 1 : prev - 1));
  };

  const handleNextVariant = (e) => {
    e.stopPropagation();
    setCurrentVariant((prev) => (prev + 1) % totalVariants);
  };

  return (
    <div className="bg-[#FFFFFF]   rounded-[14px] p-5 shadow-[6px_6px_54px_0px #0000000D] w-full sm:max-w-[361px] md:max-w-[450px] lg:max-w-[361px] flex-grow">
      {/* Product Image with Slider */}
      <div className="relative mb-4">
        <div className="relative overflow-hidden rounded-lg aspect-square">
          <img
            src={isLiked ? LikedImage : variants[currentVariant].image} // Show liked image if liked
            alt={`Apple Watch ${variants[currentVariant].color}`}
            className="object-contain transition-all duration-500  mx-auto"
          />

          {/* Slider Navigation Buttons */}
          <button
            onClick={handlePrevVariant}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#E2EAF8] rounded-full p-1 hover:bg-[#E2EAF8] transition-colors opacity-75"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextVariant}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#E2EAF8] rounded-full p-1 hover:bg-[#E2EAF8] transition-colors opacity-75"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-nunito font-bold text-[#202224] text-[16px] sm:text-[18px] lg:text-[20px]">
          Apple Watch Series 4 - {variants[currentVariant].color}
        </h3>

        {/* Price and Heart Icon Container */}
        <div className="flex justify-between items-center">
          <p className="text-[#4880FF] font-nunito font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
            ${variants[currentVariant].price.toFixed(2)}
          </p>
          <button
            onClick={handleLike}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors bg-[#F9F9F9] rounded-[50%]  ${
                isLiked ? "fill-[#F93C65] text-[#F93C65]" : "text-[#000000]"
              }`}
            />
          </button>
        </div>

        {/* Interactive Rating */}
        <div className="flex items-center gap-1">
          {renderStars(rating)}
          <span className="text-gray-500 text-sm ml-1">({reviews})</span>
        </div>

        {/* Edit Button */}
        <div className="pt-3">
          <button className="px-4 py-1 bg-[#E2EAF8] text-[#202224] rounded-[12px] text-[14px] leading-[28px] font-bold hover:bg-gray-200 transition-colors">
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
};

// Grid container for multiple cards
const ProductGrid = () => {
  const products = Array(3).fill({
    name: 'Apple Watch Series 4',
    rating: 4,
    reviews: 131
  });

  return (
    <div className="flex gap-6 lg:pt-8 pt-5">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  );
};

export default ProductGrid;
