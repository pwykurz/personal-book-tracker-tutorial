import React from 'react';
import { Book } from '@/types/Book';

type Category = Book['category'];

interface CategoryTabsProps {
  activeCategory: Category; // The currently active category
  setActiveCategory: (category: Category) => void; // Function to update the active category
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex space-x-4">
      {['Reading', 'Completed', 'Wishlist'].map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category as Category)}
          className={`px-4 py-2 rounded text-sm transition duration-200 ease-in-out ${
            activeCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
