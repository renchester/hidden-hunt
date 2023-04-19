import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const config = {
  apiKey: import.meta.env.VITE_FBASE_API_KEY,
  authDomain: import.meta.env.VITE_FBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FBASE_APP_ID,
};

export const firebaseApp = initializeApp(config);
export const db = getFirestore(firebaseApp);
