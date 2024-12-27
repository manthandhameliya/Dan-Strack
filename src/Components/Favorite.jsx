import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Menu, Star } from "lucide-react";
import Fleg from "../images/Flag.jpg";
import DownArrow from "../images/Shape.jpg";
import MonyRoy from "../images/man-438081_960_720.svg";
import Dashboards from "../images/.svg";
import Products from "../images/dashboard.svg";
import Favorites from "../images/Favorites.svg";
import Inbox from "../images/Inbox.svg";
import OrderLists from "../images/Order Lists.svg";
import ProductStock from "../images/Product Stock.svg";
import Pricing from "../images/pricing.svg";
import Calender from "../images/Calender.svg";
import ToDo from "../images/To-Do.svg";
import Contact from "../images/Contact.svg";
import Invoice from "../images/Invoice.svg";
import UIElements from "../images/UIElements.svg";
import Team from "../images/Team.svg";
import Table from "../images/Table.svg";
import Settings from "../images/Settings.svg";
import Logout from "../images/Logout.svg";
import { Link } from "react-router-dom";
import LikedImage from "../images/LikedImage.svg"; // Path to the uploaded liked image

const Favorite = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [favorites, setFavorites] = useState([]);


  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsDropdownOpen(false);
  };
  const mainMenuItems = [
    { icon: Dashboards, label: "Dashboard", link: "/dashboard" },
    { icon: Products, label: "Products", link: "/products" },
    { icon: Favorites, label: "Favorites", link: "/favorite" },
    { icon: Inbox, label: "Inbox" },
    { icon: OrderLists, label: "Order Lists" },
    { icon: ProductStock, label: "Product Stock" },
  ];
  const pageMenuItems = [
    { icon: Pricing, label: "Pricing" },
    { icon: Calender, label: "Calender" },
    { icon: ToDo, label: "To-Do" },
    { icon: Contact, label: "Contact" },
    { icon: Invoice, label: "Invoice" },
    { icon: UIElements, label: "UI Elements" },
    { icon: Team, label: "Team" },
    { icon: Table, label: "Table" },
  ];

  const bottomMenuItems = [
    { icon: Settings, label: "Settings" },
    { icon: Logout, label: "Logout" },
  ];

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);
  const handlePrevVariant = (e) => {
    e.stopPropagation();
    setCurrentVariant((prev) => (prev === 0 ? totalVariants - 1 : prev - 1));
  };

  const handleNextVariant = (e) => {
    e.stopPropagation();
    setCurrentVariant((prev) => (prev + 1) % totalVariants);
  };
  const [currentVariant, setCurrentVariant] = useState(0);
  const totalVariants = 3;

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <button key={index} className="cursor-pointer focus:outline-none">
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
  const MenuItemComponent = ({ item, isActive, onClick }) => (
    <Link
      to={item.link}
      onClick={onClick}
      className={`flex items-center px-7 py-4 cursor-pointer
                ${
                  isActive
                    ? "bg-[#4880FF] text-[#FFFFFF] border-[1px] border-[#4880FF] justify-center"
                    : "text-[#202224]"
                }
                hover:bg-[#4880FF] hover:text-[#FFFFFF] transition-all duration-300 mb-2 rounded-[6px]${
                  isSidebarOpen ? "" : " justify-center"
                }`}
    >
      <img
        src={item.icon}
        alt={item.label}
        className={`w-[22px] h-[25px] ${isActive ? "brightness-0 invert" : ""}`}
      />
      {isSidebarOpen && (
        <span className="ml-5 font-nunito font-semibold text-[14px] leading-[19.1px] tracking-[0.3px]">
          {item.label}
        </span>
      )}
    </Link>
  );
  return (
    <div className="flex h-[1070px] bg-[#FFFFFF]">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-[240px]" : "w-16"
        } bg-[#FFFFFF]  transition-all duration-300 `}
      >
        <div className="py-7 flex items-center justify-center ">
          {isSidebarOpen && (
            <span className="flex font-nunito font-extrabold lg:text-[20px] lg:leading-[27.28px] text-[#4880FF] text-center">
              Dash
              <p className="flex font-nunito font-extrabold lg:text-[20px] lg:leading-[27.28px] text-[#202224]">
                Stack
              </p>{" "}
            </span>
          )}
        </div>
        <nav className="mt-4 grid justify-center">
          {mainMenuItems.map((item) => (
            <MenuItemComponent
              key={item.label}
              item={item}
              isActive={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}

          <div className="px-7 py-4 border-t-[0.6px] border-t-[#E0E0E0]">
            <span className="font-nunito text-[#202224] tracking-[0.26px] text-[12px] leading-[16.37px]">
              PAGES
            </span>
          </div>

          {pageMenuItems.map((item) => (
            <MenuItemComponent
              key={item.label}
              item={item}
              isActive={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}

          <div className="border-b mx-4 my-3 border-gray-200"></div>

          {bottomMenuItems.map((item) => (
            <MenuItemComponent
              key={item.label}
              item={item}
              isActive={activeTab === item.label}
              onClick={() => setActiveTab(item.label)}
            />
          ))}
        </nav>
      </div>

      {/* Main Content */}``
      <div className="flex-1 ">
        {" "}
        {/* Header */}
        <header className="bg-[#FFFFFF] p-4 max-w[1201px] min-h-[70px] py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button
              className="p-2 ml-5 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <Menu className="text-[#202224]" size={22} />
              ) : (
                <Menu size={22} className="text-[#202224]" />
              )}
            </button>

            <div className="relative ml-3">
              <input
                type="search"
                placeholder="Search"
                className="p-2 pl-10 rounded-[19px] border-[0.6px] border-[#D5D5D5] bg-[#F5F6FA] min-w-[388px] focus:outline-none focus:ring-2 focus:ring-[#D5D5D5] placeholder:text-[#202224] placeholder:text-[14px] font-nunito"
              />
              <svg
                width="15"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D5D5D5]"
                height="15"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg "
              >
                <g opacity="0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z"
                    stroke="black"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3902 11.3896L15.5556 15.5555"
                    stroke="black"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="fleg"></div>
            <svg
              width="24"
              height="26"
              viewBox="0 0 24 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.0277 0C7.73472 0 5.80843 1.72411 5.55522 4.00306L4.5 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.5C23.3284 18 24 17.3284 24 16.5V15C24 14.1716 23.3284 13.5 22.5 13.5H19.5L18.4448 4.00306C18.1916 1.72411 16.2653 0 13.9723 0H10.0277Z"
                fill="#4880FF"
              />
              <rect
                opacity="0.3"
                x="9"
                y="19.5"
                width="6"
                height="6"
                rx="2.25"
                fill="#FF0000"
              />
            </svg>
            <sup className="bg-[#F93C65] flex items-center justify-center w-[18px] h-[18px] rounded-full text-[#FFFFFF] relative left-[-28px] top-[-12px]">
              6
            </sup>

            <div className="relative">
              <button
                className="flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={Fleg}
                  alt="flag"
                  className="max-w-[40px] min-h-[27px] mr-[12px]"
                />
                <span className="font-nunito text-[#646464] font-semibold text-[14px] leading-[19.1px]">
                  {language}
                </span>
                <img src={DownArrow} alt="Down Arrow" className="w-[12px]" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-full">
                  <ul className="py-1">
                    <li
                      onClick={() => handleLanguageChange("English")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      English
                    </li>
                    <li
                      onClick={() => handleLanguageChange("Gujarati")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      Gujarati
                    </li>
                    <li
                      onClick={() => handleLanguageChange("Hindi")}
                      className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    >
                      Hindi
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <img
                src={MonyRoy}
                alt="avatar"
                className="w-[50px] min-h-[52px]"
              />
              <div className="flex flex-col justify-between">
                <span className="font-nunito text-[14px] text-[#404040] leading-[19.1px] font-bold">
                  Moni
                </span>
                <span className="font-nunito text-[12px] text-[#565656] leading-[16.37px] font-semibold">
                  Admin
                </span>
              </div>
            </div>
            <div>
              <img
                src={DownArrow}
                alt="DownArrow"
                className="rounded-[50%] border-[1px] border-[#5C5C5C] p-2"
              />
            </div>
          </div>
        </header>
        {/* product-content */}
        <main
          className="bg-[#F5F6FA] min-h-[1070px] p-6
      "
        >
          <div className="top-heading font-nunito lg:text-[32px] lg:leading-[43.65px] text-[#202224] tracking-[-0.11px] font-bold mb-5">
            Favorites
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 pt-5">
            {favorites.length === 0 ? (
              <p>No favorite products yet.</p>
            ) : (
              favorites.map((product, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] rounded-lg p-5 shadow-[6px_6px_54px_0px #0000000D] w-full sm:max-w-[361px] md:max-w-[450px] lg:max-w-[361px] flex-grow"
                >
                  {/* Product Image */}
                  <div className="relative mb-4">
                    <div className="relative  rounded-lg aspect-square">
                      <img
                        src={product.image || LikedImage}
                        alt={product.name}
                        className="object-cover transition-all duration-500 mx-auto"
                      />
                    </div>
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

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-nunito font-bold text-[#202224] text-[16px] sm:text-[18px] lg:text-[20px]">
                      {product.name}
                    </h3>

                    {/* Price and Heart Icon */}
                    <div className="flex justify-between items-center">
                      <p className="text-[#4880FF] font-nunito font-bold text-[14px] sm:text-[16px] lg:text-[18px]">
                        ${product.price.toFixed(2)}
                      </p>
                      <button
                        className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        disabled
                      >
                        <Heart className="w-5 h-5 transition-colors bg-[#F9F9F9] rounded-[50%] text-[#F93C65]" />
                      </button>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {renderStars(product.rating)}
                      <span className="text-gray-500 text-sm ml-1">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Edit Button */}
                    <div className="pt-3">
                      <button className="px-4 py-1 bg-[#E2EAF8] text-[#202224] rounded-[12px] text-[14px] leading-[28px] font-bold hover:bg-gray-200 transition-colors">
                        Edit Product
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Favorite;
