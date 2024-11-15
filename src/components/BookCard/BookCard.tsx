import { Book } from '@/types/Book';

interface BookCardProps {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>Category: {book.category}</p>
      <button onClick={() => onEdit(book)}>Edit</button>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
};

export default BookCard;
