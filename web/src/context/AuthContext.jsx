import { createContext, useState } from "react";

// Criando o contexto
export const AuthContext = createContext();

// Componente provedor
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Estado do usuário

  // Simulando uma função de login
  const login = async (email, password) => {
    // Exemplo fictício - substituir por chamada real
    if (email === "admin@example.com" && password === "123456") {
      setUser({ email }); // Define o usuário
    } else {
      throw new Error("Credenciais inválidas");
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null); // Remove o usuário
  };

  // Valores compartilhados pelo contexto
  const value = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
