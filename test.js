const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "172.105.41.172",
  user: "clicapps_osvaldoguambe",
  password: "+2K-_E[M@rHR",
  database: "clicapps_middleware",
  port: 3306, // Porta padrão do MySQL
  connectTimeout: 60000, // Timeout aumentado para evitar ETIMEDOUT
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conexão ao MySQL bem-sucedida!");
});
