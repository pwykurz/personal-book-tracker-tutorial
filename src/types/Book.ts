export interface Book {
  id: string; // Unique identifier for each book
  title: string; // Title of the book
  author: string; // Author of the book
  category: 'Reading' | 'Completed' | 'Wishlist'; // Category of the book
}
