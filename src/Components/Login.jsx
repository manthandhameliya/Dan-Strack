import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BackgroundShapes = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    {/* Shape 1 */}
    <svg
      className="absolute top-0 left-0 w-[720px] h-[585px]"
      viewBox="0 0 720 585"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M272.5 895C519.647 895 720 694.647 720 447.5C720 315.376 401.153 424.916 310.095 343C230.823 271.687 387.523 0 272.5 0C25.3526 0 -175 200.353 -175 447.5C-175 694.647 25.3526 895 272.5 895Z"
        fill="#568AFF"
        className="opacity-40"
      />
    </svg>

    {/* Shape 2 */}
    <svg
      className="absolute top-0 right-0 w-[584px] h-[396px]"
      viewBox="0 0 584 396"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.541829"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.46902 -208.915C-41.4966 74.4538 147.714 344.675 431.083 394.64C582.571 421.352 521.438 33.6298 633.769 -54.2125C731.56 -130.685 1011.38 103.907 1034.64 -27.9738C1084.6 -311.343 895.393 -581.564 612.025 -631.529C328.656 -681.495 58.4346 -492.284 8.46902 -208.915Z"
        fill="#568AFF"
      />
    </svg>

    {/* Shape 3 */}
    <svg
      className="absolute bottom-0 left-0 w-[821px] h-[611px]"
      viewBox="0 0 821 611"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M219.512 -233.946C-12.7303 -149.417 -132.476 107.378 -47.9461 339.62C-2.75693 463.777 259.396 251.791 372.979 297.623C471.861 337.522 417.534 646.419 525.62 607.079C757.863 522.55 877.608 265.755 793.079 33.5125C708.549 -198.73 451.755 -318.475 219.512 -233.946Z"
        fill="#568AFF"
      />
    </svg>

    {/* Shape 4 */}
    <svg
      className="absolute bottom-0 right-0 w-[575px] h-[706px]"
      viewBox="0 0 575 706"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1141.38 667.96C1196.52 355.221 987.699 56.9921 674.96 1.84774C507.77 -27.6323 575.24 400.276 451.267 497.223C343.34 581.622 34.5121 322.715 8.8477 468.264C-46.2967 781.004 162.525 1079.23 475.264 1134.38C788.004 1189.52 1086.23 980.699 1141.38 667.96Z"
        fill="#568AFF"
        className="opacity-40"
      />
    </svg>
  </div>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email) {
      newErrors.email = "Please fill out this field.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!password) {
      newErrors.password = "Please fill out this field.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    navigate("/Dashboard");
  };

  return (
    <div className="relative grid place-items-center min-h-[1070px] bg-[#5689ffe2] font-nunito overflow-hidden">
      {/* Background Shapes */}
      <BackgroundShapes />

      {/* Login Form */}
      <div className="relative z-10 bg-[#FFFFFF] rounded-[24px] shadow-lg border-[0.3px] border-[#B9B9B9] lg:px-12 lg:py-16  px-6 py-8 sm:px-8 sm:py-12 md:px-10 md:py-14">
        {/* Title */}
        <h1 className="text-center font-nunito text-[#202224] text-[18px] leading-[26px] sm:text-[20px] sm:leading-[28px] md:text-[24px] md:leading-[32px] lg:text-[32px] lg:leading-[43.65px] font-bold">
          Login to Account
        </h1>

        <p className="text-center font-nunito text-[#202224] text-[14px] leading-[20px] sm:text-[16px] sm:leading-[24px] md:text-[18px] md:leading-[26px] lg:leading-[24.55px] tracking-[-0.06px] lg:text-[18px] mb-6 sm:mb-8 md:mb-10 lg:py-3 py-3">
          Please enter your email and password to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <label
              className="font-nunito text-[#202224] text-[14px] sm:text-[16px] md:text-[18px] lg:leading-[24.55px] tracking-[-0.06px]"
              htmlFor="email"
            >
              Email address:
            </label>
            <input
              type="email"
              id="email"
              placeholder="esteban_schiller@gmail.com"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);

                if (/\S+@\S+\.\S+/.test(value)) {
                  setErrors((prevErrors) => ({ ...prevErrors, email: null }));
                }
              }}
              className={`w-full px-4 py-3 border-[1px] rounded-[8px] shadow-sm focus:outline-none text-[14px] sm:text-[16px] md:text-[18px] placeholder:text-[#A6A6A6] ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#D8D8D8] focus:ring-[#A6A6A6]"
              }`}
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label
                className="font-nunito text-[#202224] text-[14px] sm:text-[16px] md:text-[18px] lg:leading-[24.55px] tracking-[-0.06px]"
                htmlFor="password"
              >
                Password
              </label>
              <a
                href="#"
                className="font-nunito text-[#202224] text-[12px] sm:text-[14px] md:text-[16px] lg:leading-[24.55px] tracking-[-0.06px]"
              >
                Forgot Password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              placeholder="• • • • • •"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);

                // Remove error if password becomes valid
                if (value.length >= 6) {
                  setErrors((prevErrors) => ({
                    ...prevErrors,
                    password: null,
                  }));
                }
              }}
              className={`w-full px-4 py-3 border-[1px] rounded-[8px] shadow-sm focus:outline-none text-[14px] sm:text-[16px] md:text-[18px] placeholder:text-[#A6A6A6] ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-[#D8D8D8] focus:ring-[#A6A6A6]"
              }`}
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>

          {/* Remember Password */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#000000] rounded-[6px] border-[1px] border-[#A3A3A3] focus:ring-[#A6A6A6] focus:border-[#A6A6A6] accent-[#656565]"
            />
            <label
              htmlFor="remember"
              className="ml-2 text-[12px] sm:text-[14px] md:text-[16px] text-[#202224] tracking-[-0.06px]"
            >
              Remember Password
            </label>
          </div>

          {/* Submit Button */}
          <div className="lg:pt-5">
            <button
              type="submit"
              className="w-full sm:w-[350px] md:w-[418px] lg:w-[418px] min-h-[56px] mx-auto bg-[#4880FF] text-white rounded-[8px] hover:bg-[#4A75DB] transition-colors font-semibold text-[14px] sm:text-[16px]"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="text-[14px] text-[#202224] lg:leading-[24.55px] tracking-[-0.06px] lg:text-[18px] mt-4">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[14px] text-[#5A8CFF] lg:leading-[24.55px] tracking-[-0.06px] lg:text-[18px] underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;