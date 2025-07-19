import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      // Optionally, fetch user info with token
      fetchUserProfile();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const res = await fetch('http://localhost:8080/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data.userData);
      } else if (res.status === 401 || res.status === 403) {
        // Token expired or invalid
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
        alert('Session expired. Please log in again.');
      } else {
        setUser(null);
        setToken(null);
        localStorage.removeItem('token');
      }
    } catch (err) {
      console.log(err)
      setUser(null);
      setToken(null);
      localStorage.removeItem('token');
    }
    setLoading(false);
  };

  const login = (token, userData) => {
    localStorage.setItem('token', token);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
