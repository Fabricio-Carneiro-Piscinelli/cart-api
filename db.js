import firebase from 'firebase';
import { config } from './config.js';

export const db = firebase.initializeApp(config.firebaseConfig);