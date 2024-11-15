import {Book} from '@/types/Book';

type Category = Book['category'];

interface CategoryTabsProps {
  activeCategory: Category; // The currently active category
  setActiveCategory: (category: Category) => void; // Function to update the active category
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => (
  <div>
    {['Reading', 'Completed', 'Wishlist'].map(category => (
      <button
        key={category}
        onClick={() => setActiveCategory(category as Category)}
        style={{ fontWeight: activeCategory === category ? 'bold' : 'normal' }}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryTabs;
