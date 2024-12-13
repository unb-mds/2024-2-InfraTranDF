import { useState } from 'react';
import './Maps.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const Maps = () => {
    const [selectedRegion, setSelectedRegion] = useState("Brasil");
    const [selectedYear, setSelectedYear] = useState(2024);

    const regions = ["Brasil", "Norte", "Nordeste", "Centro-oeste", "Sudeste", "Sul"];
    const years = Array.from({ length: 2024 - 2003 + 1 }, (_, i) => 2003 + i);

    const data = {
        labels: [
            'MINAS GERAIS',
            'PIAUÍ',
            'GOIÁS',
            'PARAÍBA',
            'BAHIA',
            'RIO GRANDE DO SUL',
            'SANTA CATARINA',
            'PARÁ',
            'TOCANTINS',
            'MARANHÃO',
            'CEARÁ',
            'PERNAMBUCO',
            'RIO GRANDE DO NORTE',
            'SÃO PAULO',
            'PARANÁ',
            'MATO GROSSO DO SUL',
            'AMAZONAS',
            'AMAPÁ',
            'ALAGOAS',
            'MATO GROSSO',
            'RIO DE JANEIRO',
            'RORAIMA',
            'ESPÍRITO SANTO',
            'RONDÔNIA',
            'SERGIPE',
            'ACRE',
        ],
        datasets: [
            {
                data: [
                    192, 1209, 76, 406, 197, 152, 100, 5760, 203, 4038, 2062, 401, 153, 110, 192,
                    439, 502, 407, 26, 1198, 15, 181, 8, 357, 5, 152,
                ],
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#FF6384',
                    '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB',
                    '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56', '#FF6384', '#36A2EB', '#FFCE56',
                    '#FF6384', '#36A2EB', '#FFCE56', '#FF6384',
                ],
                borderColor: 'white',
                borderWidth: 1,
            },
        ],
    };


    return (
        <div className="maps-page">
            <header className="home-header">
                <img src="/src/assets/logo-png.png" alt="ChamaControl" className="logo-image" />
                <nav className="navigation">
                    <a href="/">Início</a>
                    <a href="/maps" className="active">Consultar Mapa</a>
                    <a href="/about">Equipe</a>
                </nav>
                <div className="nav-actions">
                    <a href="/alert">
                        <button className="alert-button">Receber Alertas</button>
                    </a>
                    <div className="user-icon"></div>
                </div>
            </header>

            <main className="maps-content">
                <section className="map-section">
                    <h2>Foco de Queimadas</h2>
                    <div className="map-placeholder">
                        {/* Aqui vai o mapa */}
                        <p>Mapa interativo será carregado aqui</p>
                    </div>
                </section>
                <aside className="stats-section">
                    <div className="selected-region">
                        <h3>Região selecionada:</h3>
                        <select
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                        >
                            {regions.map((region) => (
                                <option key={region} value={region}>
                                    {region}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="selected-year">
                        <h3>Ano selecionado:</h3>
                        <select
                            value={selectedYear}
                            onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="statistics">
                        <h3>Estatísticas</h3>
                        <p><strong>Número de Focos de Queimadas:</strong> XX focos</p>
                        <p><strong>Comparativo com o passado:</strong> XX% maior</p>
                        <p><strong>Frequência Anual:</strong> XX</p>
                        <p><strong>Intensidade:</strong> X</p>
                    </div>
                </aside>
                <section className="chart-section">
                    <h3 className="chart-text">Focos registrados em cada estado (2011/11)</h3>
                    <section className="chart-placeholder">
                        <Pie data={data} />
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Maps;
