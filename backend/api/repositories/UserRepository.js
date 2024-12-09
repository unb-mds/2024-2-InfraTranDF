import connection from '../../config/db.js'

export default class UserRepository {

    async create(user) {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO USUARIO (nome, email, senha) VALUES (?, ?, ?)';
            connection.query(query, [user.nome, user.email, user.senha], (err, results) => {
                if (err) {
                    return reject(new Error('Erro ao salvar no banco de dados: ' + err.message));
                }
                resolve(results.insertId);
            });
        });
    }

    async findAll() {
        return new Promise((resolve, reject) => {
            const query = 'SELECT * FROM USUARIO';
            connection.query(query, (err, results) => {
                if (err) {
                    return reject(new Error('Erro ao obter usuários do banco de dados: ' + err.message));
                }
                resolve(results);
            });
        });
    }
}
