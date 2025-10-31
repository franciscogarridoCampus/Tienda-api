const categoriasService = require('../services/categoriasService');
exports.obtenerTodos = (req, res) => {
const categorias = categoriasService.listar();
res.json(productos);
};
exports.obtenerPorId = (req, res) => {
const producto = categoriasService.buscarPorId(parseInt(req.params.id));
categorias ? res.json(categorias) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.crear = (req, res) => {
const nuevo = categoriasService.crear(req.body);
res.status(201).json(nuevo);
};
exports.actualizar = (req, res) => {
const actualizado = categoriasService.actualizar(parseInt(req.params.id), req.body);
actualizado ? res.json(actualizado) : res.status(404).json({ mensaje: 'No encontrado' });
};
exports.eliminar = (req, res) => {
const eliminado = productosService.eliminar(parseInt(req.params.id));
eliminado ? res.json(eliminado) : res.status(404).json({ mensaje: 'No encontrado' });
};