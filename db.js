const mysql2 = require("mysql2");

const conexao = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "senai2026",
    database: "sistema_musica"
});

conexao.connect((erro) =>{
    if(erro){
        console("Erro ao conectar ao banco de dados:", erro);
    }
    console.log("Conectando ao banco sistema_musica");
});

module.exports = conexao;