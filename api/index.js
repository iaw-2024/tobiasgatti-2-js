const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

app.set('view engine', 'ejs');
app.set('views', path.resolve('public/servidor/views'));
app.use(express.static('public'));


app.get("/express", (req, res) => res.redirect("http://localhost:3000/express"));

app.get("/cliente_servidor", (req, res) => res.redirect("http://localhost:3003/cliente_servidor"));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


