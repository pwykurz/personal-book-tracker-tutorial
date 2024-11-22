import React from 'react';

const TopBar: React.FC = () => {
  return (
    <header className="top-bar py-4 w-full shadow-md fixed top-0 left-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="logo text-xl font-bold">Book Tracker</h1>

        {/* Hamburger Menu */}
        <button type="button" className="hamburger-menu block focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
