import fs from 'fs';
import csv from 'csv-parser';
import connection from '../config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvDir = path.join(__dirname, 'extrato');

const dadosBatch = [];

function salvarNoBancoBatch(dadosBatch) {
    const query = 'INSERT INTO focos (foco_id, lat, lon, data_pas, pais, estado, municipio, bioma) VALUES ?';
    connection.query(query, [dadosBatch], (err, results) => {
        if (err) {
            console.error('Erro ao salvar no banco de dados em massa:', err.message);
            return;
        }
        console.log(`${dadosBatch.length} registros salvos com sucesso.`);
    });
}
fs.readdir(csvDir, (err, files) =>{
    if (err) {
        console.error('Erro ao leo o diretorio de CSVs:', err.message)
        return;
    }

    const csvFiles = files.filter((file) => file.endsWith('.csv'))

    csvFiles.forEach((file) =>{
        const csvPath = path.join(csvDir, file)
        console.log(`Processando arquivos CSV: ${csvPath}`)
        
        fs.createReadStream(csvPath)
            .pipe(csv())
            .on('data', (row) => {
                const valores = [
                    row.id_bdq,
                    row.foco_id,
                    parseFloat(row.lat),
                    parseFloat(row.lon),
                    row.data_pas,
                    row.pais,
                    row.estado,
                    row.municipio,
                    row.bioma
                ];
                const valoresSemId = valores.slice(1);

                if (valores.length === 9) {
                    dadosBatch.push(valoresSemId);

                    if (dadosBatch.length >= 1000) {
                        salvarNoBancoBatch(dadosBatch);
                        dadosBatch.length = 0;
                    }
                }
            })
            .on('end', () => {
                if (dadosBatch.length > 0) {
                    salvarNoBancoBatch(dadosBatch);
                }
                console.log('Arquivo CSV processado com sucesso.');
            })
            .on('error', (err) => {
                console.error('Erro ao ler o arquivo CSV:', err.message);
            });
    })
})

process.on('exit', () => {
    connection.end();
});