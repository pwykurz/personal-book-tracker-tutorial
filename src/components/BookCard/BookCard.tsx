import React, { useState } from 'react';
import { Book } from '@/types/Book';

interface BookCardProps {
  book: Book; // The book data to display
  onEdit: (book: Book) => void; // Callback for editing the book
  onDelete: (id: string) => void; // Callback for deleting the book
}

const BookCard: React.FC<BookCardProps> = ({ book, onEdit, onDelete }) => {
  const [selectedCategory, setSelectedCategory] = useState(book.category);

  const handleCategoryChange = (newCategory: Book['category']) => {
    setSelectedCategory(newCategory);
    onEdit({ ...book, category: newCategory }); // Update the category via onEdit callback
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
      <h3 className="text-lg font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-1">Author: {book.author}</p>
      <div className="mb-4">
        <p className="text-gray-600 inline-block mr-2">Category:</p>
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value as Book['category'])}
          className="border rounded px-2 py-1 text-sm"
        >
          <option value="Reading">Reading</option>
          <option value="Completed">Completed</option>
          <option value="Wishlist">Wishlist</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={() => onEdit(book)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 ease-in-out"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookCard;
