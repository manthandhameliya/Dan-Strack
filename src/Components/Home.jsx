import React, { useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Menu } from "lucide-react";
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
import users from "../images/users.svg.svg";
import Path from "../images/Path.svg";
import down from "../images/down.svg";
import orders from "../images/orders.svg";
import Sales from "../images/sales.svg";
import Pending from "../images/pending.svg";
import AppleWatch from "../images/apple-watch.svg";
import downpyment from "../images/down-pyment.svg";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    setIsDropdownOpen(false);
  };
  const mainMenuItems = [
    { icon: Dashboards, label: "Dashboard", link: "/home" },
    { icon: Products, label: "Products", link: "/products" },
    { icon: Favorites, label: "Favorites" },
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
  const data = [
    { name: "5k", sales: 22.56 },
    { name: "10k", sales: 31.25 },
    { name: "15k", sales: 37.5 },
    { name: "20k", sales: 48.75 },
    { name: "25k", sales: 21.25 },
    { name: "30k", sales: 51.25 },
    { name: "35k", sales: 33.75 },
    { name: "40k", sales: 57.5 },
    { name: "45k", sales: 61.25 },
    { name: "50k", sales: 82.5 },
    { name: "55k", sales: 64.7 },
    { name: "60k", sales: 31.25 },
  ];

  return (
    <div className="flex min-h-[1070px] bg-[#FFFFFF]">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-[240px] max-w-[240px]" : "w-16 max-w-16"
        } bg-[#FFFFFF] transition-all duration-300`}
      >
        <div className="py-7 flex items-center justify-center">
          {isSidebarOpen && (
            <span className="flex font-nunito font-extrabold text-[18px] md:text-[20px] lg:text-[22px] text-[#4880FF] text-center">
              Dash
              <p className="flex font-nunito font-extrabold text-[18px] md:text-[20px] lg:text-[22px] text-[#202224]">
                Stack
              </p>
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

          <div className="px-4 py-3 md:px-7 md:py-4 border-t-[0.6px] border-t-[#E0E0E0]">
            <span className="font-nunito text-[#202224] text-[10px] md:text-[12px] lg:text-[14px] tracking-[0.26px] leading-[16px] md:leading-[18px]">
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

          <div className="border-b mx-3 md:mx-4 my-2 md:my-3 border-gray-200"></div>

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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-[#FFFFFF] p-4 max-w-[1201px] min-h-[70px] py-5 flex justify-between items-center">
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

            <div className="relative ml-3 w-full sm:w-auto">
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.69355 12.5352C12.4234 11.375 13.6959 8.22157 12.5357 5.49174C11.3756 2.7619 8.2221 1.48942 5.49227 2.64957C2.76243 3.80972 1.48995 6.96318 2.6501 9.69302C3.81025 12.4229 6.96372 13.6953 9.69355 12.5352Z"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.3902 11.3896L15.5556 15.5555"
                    stroke="black"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                fillRule="evenodd"
                clipRule="evenodd"
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

        <main className="p-6 bg-[#F5F6FA] min-h-[1200px]">
          <div className="top-heading font-nunito text-[20px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-[38px] lg:leading-[43.65px] text-[#202224] tracking-[-0.11px] font-bold mb-5">
            Dashboard
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {/* Card Template */}
            {[
              {
                title: "Total User",
                value: "40,689",
                change: "8.5%",
                status: "Up from yesterday",
                img: users,
                changeColor: "#00B69B", // Green
              },
              {
                title: "Total Order",
                value: "10,293",
                change: "1.3%",
                status: "Up from past week",
                img: orders,
                changeColor: "#00B69B", // Green
              },
              {
                title: "Total Sales",
                value: "$89,000",
                change: "4.3%",
                status: "Down from yesterday",
                img: Sales,
                changeColor: "#F93C65", // Red
              },
              {
                title: "Total Pending",
                value: "2,040",
                change: "1.8%",
                status: "Up from yesterday",
                img: Pending,
                changeColor: "#00B69B", // Green
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-[14px] min-h-[161px] px-4 py-5 shadow-[6px_6px_54px_0px_#0000000D] flex-grow"
              >
                <div className="flex justify-between mb-4">
                  <div>
                    <h3 className="font-nunito text-[#202224] text-[14px] md:text-[16px] leading-[21.82px]">
                      {card.title}
                    </h3>
                    <p className="font-nunito text-[#202224] font-bold text-[20px] md:text-[24px] lg:text-[28px] leading-[30px] lg:leading-[38.19px] pt-4">
                      {card.value}
                    </p>
                  </div>
                  <div className="rounded-lg flex items-center justify-center">
                    <img src={card.img} alt={card.title} />
                  </div>
                </div>
                <p className="flex gap-2 items-center">
                  {/* Conditionally render green or red arrow icon based on changeColor */}
                  {card.changeColor === "#00B69B" && (
                    <img
                      src={Path}
                      alt="Green Arrow"
                      className="  self-center ml-2"
                    />
                  )}
                  {card.changeColor === "#F93C65" && (
                    <img
                      src={downpyment}
                      alt="Red Arrow"
                      className="self-center ml-2"
                    />
                  )}

                  <span
                    className="text-[14px] md:text-[16px] font-nunito leading-[21.82px]"
                    style={{ color: card.changeColor }}
                  >
                    {card.change}
                  </span>
                  <span className="text-[#202224] text-[14px] md:text-[16px] font-nunito leading-[21.82px]">
                    {card.status}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* Chart Section */}

          <div
            className="rounded-[14px] p-4 sm:p-6 mb-6 bg-[#FFFFFF]"
            style={{ boxShadow: "6px 6px 54px 0px #0000000D" }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
              <h2 className="font-nunito text-[#202224] font-bold text-[20px] sm:text-[24px] leading-[20px] sm:leading-[28px]">
                Sales Details
              </h2>
              <select className="mt-2 sm:mt-0 border-[0.6px] border-[#D5D5D5] rounded-[4px] px-4 sm:px-8 py-2 sm:py-[7px] bg-[#FCFDFD] cursor-pointer text-sm sm:text-base">
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[575px] bg-[#FFFFFF] rounded-[14px] shadow-[6px_6px_54px_0px_#0000000D]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  {/* X-Axis with Gradient */}
                  <XAxis
                    dataKey="name"
                    axisLine={{
                      stroke: "url(#x-axis-gradient)",
                    }}
                    tickLine={{ stroke: "transparent" }}
                    background={{ fill: "url(#x-axis-bg)" }}
                  />
                  {/* Y-Axis with Gradient */}
                  <YAxis
                    ticks={[20, 40, 60, 80, 100]}
                    tickFormatter={(value) => `${value}%`}
                    axisLine={{
                      stroke: "url(#y-axis-gradient)",
                    }}
                    tickLine={{ stroke: "transparent" }}
                  />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#4379EE"
                    strokeWidth={2}
                    dot={{ strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>

              {/* Define Gradients */}
              <svg width="0" height="0">
                <defs>
                  {/* X-Axis Gradient */}
                  <linearGradient
                    id="x-axis-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="50%" stopColor="rgba(67, 121, 238, 0.16)" />
                    <stop
                      offset="100%"
                      stopColor="rgba(255, 255, 255, 0.176942)"
                    />
                  </linearGradient>
                  {/* Y-Axis Gradient */}
                  <linearGradient
                    id="y-axis-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="50%" stopColor="rgba(67, 121, 238, 0.16)" />
                    <stop
                      offset="100%"
                      stopColor="rgba(255, 255, 255, 0.176942)"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Table Section */}
          <div className="bg-[#FFFFFF] rounded-lg p-4 sm:p-6 shadow-[6px_6px_54px_0px_#0000000D]">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
              <h2 className="font-nunito text-[#202224] font-bold text-[18px] sm:text-[24px] leading-[22px] sm:leading-[28px]">
                Deals Details
              </h2>
              <select className="mt-2 sm:mt-0 border-[0.6px] border-[#D5D5D5] rounded-[4px] px-4 sm:px-8 py-2 sm:py-[7px] bg-[#FCFDFD] cursor-pointer text-sm sm:text-base">
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full rounded-[12px] text-sm sm:text-base">
                <thead>
                  <tr className="bg-[#F1F4F9] rounded-[12px]">
                    <th className="text-left font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224] p-2 sm:p-3">
                      Product Name
                    </th>
                    <th className="text-left font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224] p-2 sm:p-3">
                      Location
                    </th>
                    <th className="text-left font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224] p-2 sm:p-3">
                      Date - Time
                    </th>
                    <th className="text-left font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224] p-2 sm:p-3">
                      Piece
                    </th>
                    <th className="text-left font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224] p-2 sm:p-3">
                      Amount
                    </th>
                    <th className="text-left font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224] p-2 sm:p-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b-[#979797] border-b-[0.4px]">
                    <td className="p-2 sm:p-3 flex items-center gap-2 sm:gap-3 font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224]">
                      <img
                        src={AppleWatch}
                        alt="Apple Watch"
                        className="w-6 h-6 sm:w-8 sm:h-8"
                      />
                      Apple Watch
                    </td>
                    <td className="p-2 sm:p-3 font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224]">
                      6096 Marjolaine Landing
                    </td>
                    <td className="p-2 sm:p-3 font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224]">
                      12.09.2019 - 12:53 PM
                    </td>
                    <td className="p-2 sm:p-3 font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224]">
                      423
                    </td>
                    <td className="p-2 sm:p-3 font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px] text-[#202224]">
                      $34,295
                    </td>
                    <td className="p-2 sm:p-3">
                      <span className="px-2 sm:px-3 py-1 rounded-[13.5px] bg-[#00B69B] text-[#FFFFFF] font-nunito text-[10px] sm:text-[14px] leading-[14px] sm:leading-[19.1px]">
                        Delivered
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
