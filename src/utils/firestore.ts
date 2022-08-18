import { 
  getFirestore, 
  collection as firestoreCollection, 
  getDocs as getFirestoreDocs,
  addDoc as addFirestoreDoc
} from 'firebase/firestore/lite';
import { app } from '../config/firebase';

const db = getFirestore(app);

const getRef = (collection: string) => {
  return firestoreCollection(db, collection);
};

const getDocs = (collection: string) => {
  return getFirestoreDocs(getRef(collection));
}

const addDoc = (collection: string, data: any) => {
  console.log(process.env);
  return addFirestoreDoc(getRef(collection), data);
}

export { getDocs, addDoc };