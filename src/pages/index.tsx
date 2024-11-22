import React, { useState } from 'react';
import TopBar from '@/components/TopBar';
import MainContainer from '@/components/MainContainer';
import Footer from '@/components/Footer';
import { useBooks } from '@/hooks/useBooks';
import BookCard from '@/components/BookCard';
import CategoryTabs from '@/components/CategoryTabs';
import {Book} from '@/types/Book';

const HomePage: React.FC = () => {
  const { books, loading, addNewBook, editBook, removeBook } = useBooks();
  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({ title: '', author: '', category: 'Reading' });
  const [activeCategory, setActiveCategory] = useState<'Reading' | 'Completed' | 'Wishlist'>('Reading');

  // Function to handle editing a book
  const handleEditBook = (book: Book) => {
    const updatedTitle = prompt('Edit Book Title:', book.title) || book.title;
    const updatedAuthor = prompt('Edit Author Name:', book.author) || book.author;

    editBook({ ...book, title: updatedTitle, author: updatedAuthor });
  };

  // Function to handle deleting a book
  const handleDeleteBook = (id: string) => {
    if (confirm('Are you sure you want to delete this book?')) {
      removeBook(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-100">
      {/* Top Bar */}
      <TopBar />

      {/* Main Container */}
      <MainContainer>
        <div className="container mx-auto max-w-7xl px-4">
          {/* Category Tabs */}
          <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

          {/* Add New Book Section */}
          <div className="my-6">
            <input
              type="text"
              placeholder="Book Title"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              className="border rounded px-4 py-2 mr-2 text-sm transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow"
            />
            <input
              type="text"
              placeholder="Author"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              className="border rounded px-4 py-2 mr-2 text-sm transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 hover:shadow"
            />
            <button
              onClick={() => {
                if (newBook.title && newBook.author) {
                  addNewBook(newBook);
                  setNewBook({ title: '', author: '', category: 'Reading' });
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded text-sm transition duration-300 ease-in-out hover:bg-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Add Book
            </button>
          </div>

          {/* Book List */}
          <div className="space-y-4">
            {loading ? (
              <p>Loading...</p>
            ) : (
              books
                .filter((book) => book.category === activeCategory)
                .map((book) => (
                  <BookCard
                    key={book.id}
                    book={book}
                    onEdit={handleEditBook}
                    onDelete={handleDeleteBook}
                  />
                ))
            )}
          </div>
        </div>
      </MainContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
