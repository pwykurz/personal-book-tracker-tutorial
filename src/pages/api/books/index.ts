import { NextApiRequest, NextApiResponse } from 'next';
import {Book} from '@/types/Book';

let books: Book[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(books);
      break;
    case 'POST':
      const newBook = { id: `${Date.now()}`, ...req.body };
      books.push(newBook);
      res.status(201).json(newBook);
      break;
    case 'PUT':
      const { id, ...updatedBook } = req.body;
      books = books.map(book => (book.id === id ? { ...book, ...updatedBook } : book));
      res.status(200).json({ message: 'Book updated' });
      break;
    case 'DELETE':
      books = books.filter(book => book.id !== req.query.id);
      res.status(200).json({ message: 'Book deleted' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
