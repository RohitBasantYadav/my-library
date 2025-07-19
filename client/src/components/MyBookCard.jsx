import { BookContext } from '../context/BookContext';
import { useAuth } from '../context/AuthContext';
import { useContext, useState } from 'react';
import { useToast } from '../context/ToastContext';

const statusOptions = [
  'Want to Read',
  'Reading',
  'Completed',
];

const MyBookCard = ({ myBook }) => {
  const { fetchMyBooks } = useContext(BookContext);
  const { token } = useAuth();
  const [status, setStatus] = useState(myBook.status || 'Want to Read');
  const [rating, setRating] = useState(myBook.rating || 1);
  const { showToast } = useToast();

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    try {
      const res = await fetch(`http://localhost:8080/api/mybook/${myBook._id}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchMyBooks();
        showToast('Status updated!', 'success');
      } else {
        showToast('Failed to update status.', 'error');
      }
    } catch (err) {
      console.log(err);
      showToast('Error updating status.', 'error');
    }
  };

  const handleRatingChange = async (newRating) => {
    setRating(newRating);
    try {
      const res = await fetch(`http://localhost:8080/api/mybook/${myBook._id}/rating`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ rating: newRating }),
      });
      if (res.ok) {
        fetchMyBooks();
        showToast('Rating updated!', 'success');
      } else {
        showToast('Failed to update rating.', 'error');
      }
    } catch (err) {
      console.log(err);
      showToast('Error updating rating.', 'error');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={myBook.bookId.coverImage} alt={myBook.bookId.title} className="h-48 w-32 object-cover rounded mb-4" />
      <h2 className="text-xl font-semibold mb-1 text-center">{myBook.bookId.title}</h2>
      <p className="text-gray-600 mb-2 text-center">by {myBook.bookId.author}</p>
      <div className="mb-2">
        <label className="mr-2">Current Status:</label>
        <select
          value={status}
          onChange={handleStatusChange}
          className="border rounded px-2 py-1"
        >
          {statusOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-1 mb-2">
        <span>Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleRatingChange(star)}
            className={
              star <= rating
                ? 'text-yellow-400 text-xl'
                : 'text-gray-300 text-xl'
            }
          >
            ★
          </button>
        ))}
      </div>
    </div>
  );
};

export default MyBookCard;
