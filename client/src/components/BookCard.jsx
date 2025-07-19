import { useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { BookContext } from '../context/BookContext';
import { useToast } from '../context/ToastContext';

const BookCard = ({ book }) => {
  const { user, token } = useAuth();
  const { fetchMyBooks } = useContext(BookContext);
  const { showToast } = useToast();

  const handleWantToRead = async () => {
    if (!user) {
      showToast('Please login to add books to your list.', 'error');
      return;
    }
    try {
      const res = await fetch(`http://localhost:8080/api/mybook/${book._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchMyBooks();
        showToast('Book added to your list!', 'success');
      } else {
        showToast('Could not add book, it is already in your list.', 'error');
      }
    } catch (err) {
      console.log(err);
      showToast('Error adding book.', 'error');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={book.coverImage} alt={book.title} className="h-48 w-32 object-cover rounded mb-4" />
      <h2 className="text-xl font-semibold mb-1 text-center">{book.title}</h2>
      <p className="text-gray-600 mb-2 text-center">by {book.author}</p>
      <button
        className="mt-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleWantToRead}
      >
        Want to Read
      </button>
    </div>
  );
};

export default BookCard;
