// servidor/index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Establecer EJS como motor de vistas
app.set('view engine', 'ejs');



// Datos estáticos para el listado de elementos
const elementos = [
  { id: 1, nombre: "Elemento 1", descripcion: "Descripción del elemento 1" },
  { id: 2, nombre: "Elemento 2", descripcion: "Descripción del elemento 2" },
  { id: 3, nombre: "Elemento 3", descripcion: "Descripción del elemento 3" }
];




// Ruta para mostrar el listado de elementos
app.get('/express', (req, res) => {
  // Renderizar la vista 'elementos' con los datos
  res.render('elementos', { elementos });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor listo en http://localhost:${PORT}`);
});
