import { BookContext} from '../context/BookContext';
import BookCard from '../components/BookCard';
import { useContext } from 'react';

const Home = () => {
  const { books, loading } = useContext(BookContext);

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Books</h1>
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="ml-4 text-gray-500">Loading books...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {books && books.length > 0 ? (
            books.map((book) => <BookCard key={book._id} book={book} />)
          ) : (
            <div className="col-span-3 text-center text-gray-500">No books found.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
