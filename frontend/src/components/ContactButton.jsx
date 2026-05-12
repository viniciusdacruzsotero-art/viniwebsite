import React from "react";

export const ContactButton = ({
  onClick,
  children = "Contact",
  className = "",
  size = "default",
  testId = "contact-button",
}) => {
  const sizeClasses =
    size === "large"
      ? "px-10 py-4 sm:px-14 sm:py-5 text-sm sm:text-base md:text-lg"
      : "px-10 py-3 sm:px-12 sm:py-4 text-sm sm:text-base";

  return (
    <button
      type="button"
      onClick={onClick}
      data-testid={testId}
      className={`pill-btn ${sizeClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export const LiveProjectButton = ({ onClick, testId = "live-project-button" }) => (
  <button
    type="button"
    onClick={onClick}
    data-testid={testId}
    className="pill-btn px-6 py-2 sm:px-8 sm:py-3 text-xs sm:text-sm"
  >
    Live Project
  </button>
);

export default ContactButton;
