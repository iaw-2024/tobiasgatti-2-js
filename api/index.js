const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
//axios para comunicar con mockapi
const PORT = process.env.PORT || 3001;



app.set('view engine', 'ejs');
app.set('views', path.resolve('public/servidor/views'));
app.use(express.static('public'));

const elementos = [
  { id: 1, nombre: "Elemento 1", descripcion: "Descripción del elemento 1" },
  { id: 2, nombre: "Elemento 2", descripcion: "Descripción del elemento 2" },
  { id: 3, nombre: "Elemento 3", descripcion: "Descripción del elemento 3" },
  { id: 4, nombre: "Elemento 4", descripcion: "Descripción del elemento 4" },
];

const mockapi=[
  {
    "createdAt": "2024-03-28T10:10:03.952Z",
    "name": "Jennifer Murphy",
    "id": "1"
  },
  {
    "createdAt": "2024-03-28T03:52:17.947Z",
    "name": "Louise Mertz",
    "id": "2"
  },
  {
    "createdAt": "2024-03-28T17:07:12.832Z",
    "name": "Alfred Hansen I",
    "id": "3"
  },]

app.get('/express', (req, res) => {
  res.render('elementos', { elementos });
});

app.get('/datos', async (req, res) => {
  res.json(mockapi);
} );
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
