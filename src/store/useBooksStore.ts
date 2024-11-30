import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Book } from '@/types/Book';

interface BooksState {
  books: Book[];
  addBook: (book: Omit<Book, 'id'>) => void;
  editBook: (updatedBook: Book) => void;
  deleteBook: (id: string) => void;
}

export const useBooksStore = create(
  persist<BooksState>(
    (set) => ({
      books: [],
      addBook: (book) =>
        set((state) => ({
          books: [...state.books, { ...book, id: Date.now().toString() }],
        })),
      editBook: (updatedBook) =>
        set((state) => ({
          books: state.books.map((book) =>
            book.id === updatedBook.id ? updatedBook : book
          ),
        })),
      deleteBook: (id) =>
        set((state) => ({
          books: state.books.filter((book) => book.id !== id),
        })),
    }),
    {
      name: 'books-storage', // Key for localStorage
    }
  )
);