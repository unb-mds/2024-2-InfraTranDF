import fs from 'fs';
import csv from 'csv-parser';
import connection from '../config/db.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvDir = path.join(__dirname, 'extrato');

const dadosBatch = [];

const estadosParaRegioes = {
    'ACRE': 'Norte',
    'AMAPÁ': 'Norte',
    'AMAZONAS': 'Norte',
    'PARÁ': 'Norte',
    'RONDÔNIA': 'Norte',
    'RORAIMA': 'Norte',
    'TOCANTINS': 'Norte',
    'ALAGOAS': 'Nordeste',
    'BAHIA': 'Nordeste',
    'CEARÁ': 'Nordeste',
    'MARANHÃO': 'Nordeste',
    'PARAÍBA': 'Nordeste',
    'PERNAMBUCO': 'Nordeste',
    'PIAUÍ': 'Nordeste',
    'RIO GRANDE DO NORTE': 'Nordeste',
    'SERGIPE': 'Nordeste',
    'DISTRITO FEDERAL': 'Centro-Oeste',
    'GOIÁS': 'Centro-Oeste',
    'MATO GROSSO': 'Centro-Oeste',
    'MATO GROSSO DO SUL': 'Centro-Oeste',
    'ESPÍRITO SANTO': 'Sudeste',
    'MINAS GERAIS': 'Sudeste',
    'RIO DE JANEIRO': 'Sudeste',
    'SÃO PAULO': 'Sudeste',
    'PARANÁ': 'Sul',
    'RIO GRANDE DO SUL': 'Sul',
    'SANTA CATARINA': 'Sul'
};

function obterRegiao(estado) {
    return estadosParaRegioes[estado] || 'Desconhecida';
}

function extrairAno(dataPas) {
    if (dataPas && dataPas.length >= 4) {
        return parseInt(dataPas.substring(0, 4), 10); 
    }
    return null; 
}

function salvarNoBancoBatch(dadosBatch) {
    const query = 'INSERT INTO focos (foco_id, lat, lon, data_pas, pais, estado, municipio, bioma, regiao, ano) VALUES ?';
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
                    row.bioma,
                    obterRegiao(row.estado),
                    extrairAno(row.data_pas)
                ];
                const valoresSemId = valores.slice(1);

                if (valores.length === 11) {
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

function excluirPasta(diretorio) {
    fs.rm(diretorio, { recursive: true, force: true }, (err) => {
        if (err) {
            console.error('Erro ao excluir a pasta extrato:', err.message);
        } else {
            console.log('Pasta extrato excluída com sucesso.');
        }
    });
}

process.on('exit', () => {
    console.log('Excluindo a pasta extrato...');
    excluirPasta(csvDir);
    connection.end();
});