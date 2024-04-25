import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyD88oxmWu6VsIXQttYsko4Ulo_xggQ0DKQ",
  authDomain: "fir-9-a36bb.firebaseapp.com",
  databaseURL: "https://fir-9-a36bb-default-rtdb.firebaseio.com",
  projectId: "fir-9-a36bb",
  storageBucket: "fir-9-a36bb.appspot.com",
  messagingSenderId: "453972769237",
  appId: "1:453972769237:web:cfcf663901630544d2e55c",
  databaseURL: "https://fir-9-a36bb-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
