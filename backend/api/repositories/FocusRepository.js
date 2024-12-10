import connection from '../../config/db.js'

export default class FocusRepository {

    async getCountByYear(ano) {
        return new Promise((resolve, reject) => {
            const query = 'SELECT count(*) FROM focos WHERE ano = ?';
            connection.query(query, [ano], (err, results) => {
                if (err) {
                    return reject(new Error('Erro ao obter dados: ' + err.message));
                }
                resolve(results);
            });
        });
    }

    async getMonthlyFocusByEstate(month, year) {
        const query = `
            SELECT ano, MONTH(data_pas) AS mes, estado, COUNT(*) AS contagem
            FROM focos
            WHERE MONTH(data_pas) = ? AND ano = ?
            GROUP BY mes, estado;
        `;

        return new Promise((resolve, reject) => {
            connection.query(query, [month, year], (err, results) => {
                if (err) {
                    reject(new Error('Erro ao obter dados: ' + err.message));
                }
                resolve(results);
            });
        });
    }

    async getMonthlyFocusByRegion(month, year) {
        const query = `
            SELECT ano, MONTH(data_pas) AS mes, regiao, COUNT(*) AS contagem
            FROM focos
            WHERE MONTH(data_pas) = ? AND ano = ?
            GROUP BY mes, regiao;
        `;

        return new Promise((resolve, reject) => {
            connection.query(query, [month, year], (err, results) => {
                if (err) {
                    reject(new Error('Erro ao obter dados: ' + err.message));
                }
                resolve(results);
            });
        });
    }
}
