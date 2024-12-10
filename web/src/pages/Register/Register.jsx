import './Register.css'
import React, { useState } from "react";

const Register = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [celular, setCelular] = useState("");
  const [genero, setGenero] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      nome,
      email,
      dataNascimento,
      celular,
      genero,
      cpfCnpj,
      password,
    };

 
  return (
    <div>
      <Navbar />
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
              <label htmlFor="dataNascimento">Data de Nascimento</label>
              <input
                type="date"
                id="dataNascimento"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="celular">Celular</label>
              <input
                type="tel"
                id="celular"
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
                placeholder="(XX) XXXXX-XXXX"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="genero">Gênero</label>
              <select
                id="genero"
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                required
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
                <option value="prefiro_nao_dizer">Prefiro não dizer</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
              <input
                type="text"
                id="cpfCnpj"
                value={cpfCnpj}
                onChange={(e) => setCpfCnpj(e.target.value)}
                placeholder="Seu CPF ou CNPJ"
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
            <button type="submit" className={styles.signUpButton}>
              Criar Conta
            </button>
          </form>
        </div>
        <img src={bannerImage} alt="Sign Up" className={styles.signUpImage} />
      </div>
      <Footer />
    </div>
  );
};
}
export default Register
