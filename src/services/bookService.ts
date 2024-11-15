import apiClient from '@/utils/apiClient';
import { Book } from '@/types/Book';

/**
 * Fetch all books from the API.
 * @returns Promise<Book[]>
 */
export const fetchBooks = async (): Promise<Book[]> => {
  const response = await apiClient.get<Book[]>('/books');
  return response.data;
};

/**
 * Add a new book to the API.
 * @param book - The book details (title, author, category).
 * @returns Promise<Book>
 */
export const addBook = async (book: Omit<Book, 'id'>): Promise<Book> => {
  const response = await apiClient.post<Book>('/books', book);
  return response.data;
};

/**
 * Update an existing book in the API.
 * @param book - The updated book details.
 */
export const updateBook = async (book: Book): Promise<void> => {
  await apiClient.put('/books', book);
};

/**
 * Delete a book from the API.
 * @param id - The ID of the book to delete.
 */
export const deleteBook = async (id: string): Promise<void> => {
  await apiClient.delete(`/books?id=${id}`);
};
