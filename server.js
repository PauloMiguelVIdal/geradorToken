const express = require("express");
const app = express();
const port = 3000;

// Middleware para processar JSON no corpo da requisição
app.use(express.json());

// Variável para armazenar o token (simulação de armazenamento)
let tokenArmazenado = null;

// Rota POST para armazenar o token
app.post("/api/token", (req, res) => {
  const { token } = req.body; // Recebe o token enviado pelo front-end
  if (!token) {
    return res.status(400).json({ erro: "Token não fornecido!" });
  }
  
  tokenArmazenado = token; // Armazena o token na variável
  console.log(`Token armazenado: ${tokenArmazenado}`);
  res.json({ mensagem: "Token armazenado com sucesso!" });
});

// Rota GET para retornar o token armazenado
app.get("/api/token", (req, res) => {
  if (!tokenArmazenado) {
    return res.status(404).json({ erro: "Nenhum token armazenado!" });
  }
  
  res.json({ token: tokenArmazenado });
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});