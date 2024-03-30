const express = require('express');

const app = express();
const PORT = 3003;



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
