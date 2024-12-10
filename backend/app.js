import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.js'
import connection from './config/db.js';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Permite apenas o front-end nesse endereço
    methods: 'GET,POST', // Métodos permitidos
    allowedHeaders: 'Content-Type,Authorization', // Cabeçalhos permitidos
  };

  app.use(cors(corsOptions));

  // Middleware para interpretar o corpo das requisições como JSON
  app.use(express.json()); 
  
  // Usando as rotas do arquivo 'index.js'
  app.use('/api', routes);

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use('/api', routes);

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) throw err;
    console.log('Banco de dados funcionando se = 2:', rows[0].solution);
});

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});
