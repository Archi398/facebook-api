import { Router } from 'express';
import * as profileController from '../../../controllers/profile.controllers';
import * as postController from '../../../controllers/posts.controllers';
import * as userController from '../../../controllers/user.controllers';

const api = Router();

api.get('/:id/posts', postController.getByAuthorId);
api.get('/:id/profile', profileController.getProfileById);
api.patch('/:id/profile', profileController.upsertProfile);
api.delete('/:id', userController.deleteById);

export default api;
