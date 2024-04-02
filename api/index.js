const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');

const PORT = process.env.PORT || 3001;



app.set('view engine', 'ejs');
app.set('views', path.resolve('public/servidor/views'));
app.use(express.static('public'));

const elementos = [
  { id: 1, nombre: "Elemento 1", descripcion: "Descripción del elemento 1" },
  { id: 2, nombre: "Elemento 2", descripcion: "Descripción del elemento 2" },
  { id: 3, nombre: "Elemento 3", descripcion: "Descripción del elemento 3" }
];

app.get('/express', (req, res) => {
  res.render('elementos', { elementos });
});

app.get('/cliente_servidor', async (req, res) => {
  try {
      const response = await fetch('https://6605a0322ca9478ea180cb41.mockapi.io/app/users');
      if (!response.ok) {
          throw new Error('Error en la solicitud HTTP: ' + response.statusText);
      }
      const data = await response.json();
      res.json(data);
  } catch (error) {
      console.error('Error al obtener el listado de clientes:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
  }
});
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
