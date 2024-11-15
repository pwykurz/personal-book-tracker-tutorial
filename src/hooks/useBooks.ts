import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';
import { fetchBooks, addBook, updateBook, deleteBook } from '@/services/bookService';

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  // Load books when the component mounts
  useEffect(() => {
    const loadBooks = async () => {
      try {
        const books = await fetchBooks();
        setBooks(books);
      } catch (error) {
        console.error('Failed to fetch books:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBooks();
  }, []);

  // Add a new book
  const addNewBook = async (newBook: Omit<Book, 'id'>) => {
    try {
      const createdBook = await addBook(newBook);
      setBooks((prevBooks) => [...prevBooks, createdBook]);
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  // Edit an existing book
  const editBook = async (updatedBook: Book) => {
    try {
      await updateBook(updatedBook);
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === updatedBook.id ? { ...updatedBook } : book
        )
      );
    } catch (error) {
      console.error('Failed to edit book:', error);
    }
  };

  // Remove a book by ID
  const removeBook = async (id: string) => {
    try {
      await deleteBook(id);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  return { books, loading, addNewBook, editBook, removeBook };
};
