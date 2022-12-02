import express from 'express';
import { obtenerPosts, crearPost, actualizarPost, eliminarPost } from '../controllers/postcontrollers.js';

const router = express.Router();

//TODO Ruta-> api/v1/posts

router.get('/', obtenerPosts);
router.post('/', crearPost);
router.put('/:id', actualizarPost);
router.delete('/:id', eliminarPost);

export default router;