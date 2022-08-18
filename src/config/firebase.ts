import { initializeApp } from 'firebase/app';
import config from '../../firebase.json';

const app = initializeApp(config);

export { app };