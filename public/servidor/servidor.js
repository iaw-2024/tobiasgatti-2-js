// servidor/index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Configurar Express para servir archivos estáticos
app.use(express.static('public')); // Reemplaza 'public' con el nombre de la carpeta donde se encuentra tu archivo CSS

app.set('view engine', 'ejs');

const elementos = [
  { id: 1, nombre: "Elemento 1", descripcion: "Descripción del elemento 1" },
  { id: 2, nombre: "Elemento 2", descripcion: "Descripción del elemento 2" },
  { id: 3, nombre: "Elemento 3", descripcion: "Descripción del elemento 3" }
];

app.get('/express', (req, res) => {
  res.render('elementos', { elementos });
});

app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
