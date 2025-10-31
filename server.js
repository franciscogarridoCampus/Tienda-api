// Importar el módulo de Express
import express from "express";
// Crear una instancia de la aplicación Express
const app = express();
// Middleware para poder procesar datos en formato JSON
app.use(express.json());

app.use('/productos', require('./routes/productosRoutes'));
//app.use('/categorias', require('./routes/categoriasRoutes'));
//Importar rutas
/*
app.use('/productos', require('./routes/productosRoutes'));
app.use('/categorias', require('./routes/categoriasRoutes'));
app.use('/clientes', require('./routes/clientesRoutes'));
app.use('/pedidos', require('./routes/pedidosRoutes'));
app.use('/carritos', require('./routes/carritosRoutes'));
app.use('/proveedores', require('./routes/proveedoresRoutes'));
*/
// Definir una ruta básica (endpoint) de prueba
app.get("/", (req, res) => {
res.send("🚀 Servidor Express funcionando correctamente");
});
// Definir el puerto donde escuchará el servidor
const PORT = 3000;
// Iniciar el servidor y escuchar peticiones en el puerto definido
app.listen(PORT, () => {
console.log(`✅ Servidor en ejecución: http://localhost:${PORT}`);
});