// Hook Strategic Imports
import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [data, setData] = useState({});

  // Function to control user login
  async function signIn({ email, password }) {

    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token, favorites } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);
      localStorage.setItem("@foodexplorer:favorites", JSON.stringify(favorites));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ token, user, favorites });

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message);
      } else {
        return alert("Não foi possível entrar.");
      }
    }
  }

  // Function to make the user logout
  async function signOut() {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:favorites");

    setData({});
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user");
    const token = localStorage.getItem("@foodexplorer:token");
    const favorites = localStorage.getItem("@foodexplorer:favorites");

    if (user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
        favorites
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
