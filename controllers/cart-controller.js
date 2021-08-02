'use strict';

import { db } from '../db.js';
import { validEmail } from '../helpers/validations/valid-forms.js';
import Cart from '../models/carts';
const firestore = db.firestore();

export const addCart = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('cart').doc().set(data);
        res.send('Recort saved successfuly');
    }catch (err) {
        res.status(400).send(err.message)
    }
}
