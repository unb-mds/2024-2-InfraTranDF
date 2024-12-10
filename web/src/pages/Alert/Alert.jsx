import React, { useState } from 'react';
import './Alert.css';

const Alert = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [region, setRegion] = useState('Brasil');
    const [year, setYear] = useState(new Date().getFullYear());

    const regions = ['Brasil', 'Norte', 'Nordeste', 'Centro-oeste', 'Sudeste', 'Sul'];
    const years = Array.from({ length: 2024 - 2003 + 1 }, (_, i) => 2003 + i);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${name}\nEmail: ${email}\nRegião: ${region}\nAno: ${year}`);
        // Lógica para enviar os dados para o backend aqui
    };

    return (
        <div className="alert-page">
            {/* Navbar */}
            <header className="home-header">
                <img src="/src/assets/logo-png.png" alt="ChamaControl" className="logo-image" />
                <nav className="navigation">
                    <a href="/home">Início</a>
                    <a href="/maps">Consultar Mapa</a>
                    <a href="/about">Equipe</a>
                </nav>
                <a href="/alert">
                    <button className="alert-button">Receber Alertas</button>
                </a>
                <div className="user-icon"></div>
            </header>

            {/* Formulário */}
            <main className="alert-content">
                <h1>Receber Notificações</h1>
                <form className="alert-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Digite seu nome"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="region">Região:</label>
                        <select
                            id="region"
                            value={region}
                            onChange={(e) => setRegion(e.target.value)}
                        >
                            {regions.map((region) => (
                                <option key={region} value={region}>
                                    {region}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Ano:</label>
                        <select
                            id="year"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className="submit-button">
                        Enviar
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Alert;
