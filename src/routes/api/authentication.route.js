import { Router } from 'express';
import * as AuthenticationController from '../../../controllers/authentication.controllers';

const api = Router();

api.post('/sign_in', AuthenticationController.sign_in);
api.post('/sign_up', AuthenticationController.sign_up);

export default api;
