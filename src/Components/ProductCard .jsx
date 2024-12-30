import React, { useState, useEffect } from "react";
import { Star, Heart } from "lucide-react";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [rating, setRating] = useState(product.rating.rate || 0);
  const [reviews, setReviews] = useState(product.rating.count || 0);
  const [currentImage, setCurrentImage] = useState(product.image);

  // Check if product is already liked when component mounts
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isProductLiked = favorites.some((fav) => fav.id === product.id);
    setIsLiked(isProductLiked);
    // Set initial image based on liked status
    setCurrentImage(product.image);
  }, [product.id, product.image]);

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

      // Get existing favorites from local storage
      const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      if (newLikedStatus) {
        // Check if product is already in favorites
        const isAlreadyFavorite = favorites.some(
          (fav) => fav.id === product.id
        );

        if (!isAlreadyFavorite) {
          // Add to favorites only if not already present
          const favoriteProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            rating: rating,
            reviews: reviews,
          };

          favorites.push(favoriteProduct);
          localStorage.setItem("favorites", JSON.stringify(favorites));

          // Update image with transition effect
          setCurrentImage(product.image);
        }
      } else {
        // Remove from favorites if unliked
        const updatedFavorites = favorites.filter(
          (fav) => fav.id !== product.id
        );
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        // Reset image to original with transition effect
        setCurrentImage(product.image);
      }

      return newLikedStatus;
    });
  };

  return (
    <div className="bg-[#FFFFFF] rounded-[14px] p-5 shadow-[6px_6px_54px_0px #0000000D] w-full sm:max-w-[361px] md:max-w-[450px] lg:max-w-[361px] flex-grow">
      {/* Product Image */}
      <div className="relative mb-4">
        <div className="relative overflow-hidden rounded-lg aspect-square">
          <img
            src={currentImage}
            alt={product.title}
            className={`object-contain transition-all duration-500 mx-auto h-full w-full ${
              isLiked ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="font-nunito font-bold text-[#202224] text-[16px] sm:text-[18px] lg:text-[20px] line-clamp-2">
          {product.title}
        </h3>

        {/* Price and Heart Icon Container */}
        <div className="flex justify-between items-center">
          <p className="text-[#4880FF] font-nunito font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={handleLike}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Heart
              className={`w-5 h-5 transition-colors bg-[#F9F9F9] rounded-[50%] ${
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

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-[#202224] font-nunito">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <p className="text-red-500 font-nunito">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:pt-8 pt-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
