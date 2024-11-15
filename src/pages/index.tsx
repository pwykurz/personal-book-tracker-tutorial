import CategoryTabs from '@/components/CategoryTabs';
import {useBooks} from '@/hooks/useBooks';
import {useState} from 'react';
import BookCard from '@/components/BookCard';
import {Book} from '@/types/Book';

const BookTracker: React.FC = () => {
  const { books, loading, addNewBook, editBook, removeBook } = useBooks();
  const [newBook, setNewBook] = useState<Omit<Book, 'id'>>({ title: '', author: '', category: 'Reading' });

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
    <main>
      <h1>Personal Book Tracker</h1>
      <CategoryTabs activeCategory="Reading" setActiveCategory={() => {}} />
      <input
        type="text"
        placeholder="Book Title"
        value={newBook.title}
        onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        value={newBook.author}
        onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
      />
      <button onClick={() => addNewBook(newBook)}>Add Book</button>
      {loading ? <p>Loading...</p> : books.map(book => <BookCard key={book.id} book={book} onEdit={handleEditBook}
                                                                 onDelete={handleDeleteBook} />)}
    </main>
  );
};

export default BookTracker;
