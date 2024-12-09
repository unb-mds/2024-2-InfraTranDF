// src/components/LoginPage/LoginPage.js
import React, { useState, useContext } from "react";
import styles from "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState(""); // Alterado de username para email
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Para mensagens de erro
  const [loading, setLoading] = useState(false); // Para indicar carregamento

  const navigate = useNavigate(); // Hook para redirecionamento
  const { login } = useContext(AuthContext); // Usar o contexto

  return (
    <div className="pageWrapper">
      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Fazer Login</h2>
          {error && <div className={styles.errorMessage}>{error}</div>}
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
                required
              />
            </div>
            <button
              type="submit"
              className={styles.loginButton}
              disabled={loading}
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;

