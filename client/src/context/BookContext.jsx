import { createContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const { token } = useAuth();
  const [books, setBooks] = useState([]);
  const [myBooks, setMyBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchBooks();
    // Only fetch myBooks if logged in
    if (token) fetchMyBooks();
    // eslint-disable-next-line
  }, [token]);


  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/getbook');
      const data = await res.json();
      setBooks(data.bookData);
    } catch (err) {
      console.log(err);
      setBooks([]);
    }
    setLoading(false);
  };

  const fetchMyBooks = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/api/mybook', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMyBooks(data.mybookData);
    } catch (err) {
      console.log(err)
      setMyBooks([]);
    }
    setLoading(false);
  };

  // Add more actions: addBookToMyBooks, updateStatus, updateRating, etc.

  return (
    <BookContext.Provider value={{ books, myBooks, loading, fetchBooks, fetchMyBooks }}>
      {children}
    </BookContext.Provider>
  );
};

