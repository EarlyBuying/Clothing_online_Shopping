import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0rFg2AQX9VtWQN1ONu39NCBYIAhKUFy0",
  authDomain: "earlybuing-clothing-app.firebaseapp.com",
  projectId: "earlybuing-clothing-app",
  storageBucket: "earlybuing-clothing-app.appspot.com",
  messagingSenderId: "92835957093",
  appId: "1:92835957093:web:67be67c54d5a6d7f13f98c",
  measurementId: "G-8JGBMHQL8X",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
