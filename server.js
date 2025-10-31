const express = require('express');
const app = express();
app.use(express.json());
// Importar rutas
app.use('/productos', require('./routes/productosRoutes'));
app.use('/carritos', require('./routes/carritosRoutes'));
app.use('/categorias', require('./routes/categoriasRoutes'));
app.use('/clientes', require('./routes/clientesRoutes'));
app.use('/pedidos', require('./routes/pedidosRoutes'));
app.use('/proveedores', require('./routes/proveedoresRoutes'));
//definir el resto de routes
//Mejora solicitada, guardar en un log de json todas las llamadas a la API
app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));