
---

For detailed information, visit the full guide here:  
👉 **[Building a Personal Book Tracker with Next.js 15](https://epic-it.pl/building-a-personal-book-tracker-with-next-js-15-complete-guide-with-type-script-and-es-lint-configuration)** 👈  

---

# 📚 **Personal Book Tracker** 

A **Personal Book Tracker** application built with **Next.js 15**. This project allows users to manage their book collection dynamically, categorizing books into "Reading," "Completed," or "Wishlist." It features a fully functional backend API, a dynamic frontend, and uses TypeScript for type safety.

---

## 🚀 **Features**

- Add books with a title, author, and category.
- View books categorized as "Reading," "Completed," or "Wishlist."
- Edit book details.
- Delete books from the list.
- Scalable architecture with reusable components and custom hooks.

---

## 🛠️ **Technologies Used**

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/)
- CSS for styling
- Node.js (for backend API)

---

## 🗂️ **Project Structure**

```
my-nextjs-app/
├── src/
│   ├── components/        # Reusable UI components
│   ├── hooks/             # Custom hooks (e.g., useBooks)
│   ├── pages/             # Next.js pages and API routes
│   │   ├── api/           # API for CRUD operations
│   │   └── index.tsx      # Main Book Tracker page
│   ├── services/          # API interaction logic
│   ├── types/             # TypeScript interfaces (e.g., Book)
│   ├── styles/            # Global and custom styles
│   └── utils/             # Utility functions (e.g., Axios client)
```

---

## 🖥️ **Installation and Setup**

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/personal-book-tracker.git
   cd personal-book-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Visit the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧩 **API Endpoints**

### Base URL: `/api/books`

| Method | Endpoint | Description                     |
|--------|----------|---------------------------------|
| GET    | `/books` | Retrieve all books.            |
| POST   | `/books` | Add a new book.                |
| PUT    | `/books` | Update an existing book.       |
| DELETE | `/books` | Delete a book by `id`.         |

---

## 📝 **Homework**

### **Feature: Change Book Category**

**Objective:** Allow users to dynamically change the category of a book using a dropdown menu.

**Steps:**
1. Add a dropdown to the `BookCard` component to display all available categories.
2. Create a `changeBookCategory` function in the `useBooks` hook to update the category.
3. Update the state and backend when the category is changed.

**Hints:**
- Use the `PUT` method in the API to update the book's category.
- Use the `onChange` event in the dropdown to trigger the update.

---

## 🎯 **Goals**

This project is designed to help you:
1. Build a full-stack application with Next.js.
2. Implement a scalable project structure.
3. Work with TypeScript for type safety.
4. Integrate backend APIs with a dynamic frontend.

---

## 🤝 **Contributing**

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📜 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 🎉 **Acknowledgments**

Thanks to the creators of [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/) for providing such amazing tools for developers! 

Happy coding! 🚀
