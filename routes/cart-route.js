import express from 'express';
import { addCart } from '../controllers/cart-controller.js';
const router = express.Router();

router.post('/cart', addCart);

export default {
    routes: router
};