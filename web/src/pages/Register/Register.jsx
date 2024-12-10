import styles from './Register.module.css'

import { useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios"

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      nome,
      email,
      senha,
    };

    try {
      // Faz a requisição POST ao backend para criar o usuário
      console.log(userData);

      const response = await axios.post('http://localhost:3000/api/users', userData);
  
      // Exibe uma mensagem de sucesso ou redireciona o usuário
      setMensagem("Usuário criado com sucesso!");
      
      // Opcional: redireciona o usuário para a página de login
      setTimeout(() => {
        window.location.href = '/login'; // Redireciona para a página de login
      }, 2000); // Espera 2 segundos antes de redirecionar
  
    } catch (error) {
      // Se houver um erro (por exemplo, email já existente), exibe a mensagem
      setMensagem(error.response ? error.response.data.error : "Erro desconhecido");
    }

  };
 
  return (
    <div>
      {/* <Navbar /> */}
      <div className={styles.signUpContainer}>
        <div className={styles.signUpBox}>
          <h2>Criar Conta</h2>
          {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
          <form onSubmit={handleSignUp}>
            <div className={styles.inputGroup}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>
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
              <label htmlFor="Senha">Senha</label>
              <input
                type="Senha"
                id="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
                required
              />
            </div>
            <button type="submit" className={styles.signUpButton}>
              Criar Conta
            </button>
            <p className={styles.text}>Já tem uma conta?</p>
            <Link to="/Login" className={styles.signUpButton}>Login</Link>
          </form>
        </div>
        {/* <img src={bannerImage} alt="Sign Up" className={styles.signUpImage} /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Register
