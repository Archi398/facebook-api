import { Router } from 'express';
import * as PostsController from '../../../controllers/posts.controllers';

const api = Router();

api.get('/', PostsController.getAllPost);
api.get('/:id', PostsController.getPostById);
api.post('/', PostsController.createPost);
api.patch('/:id', PostsController.updatePost);
api.delete('/:id', PostsController.deleteById);

export default api;
