import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";





const firebaseConfig = {
  apiKey: "AIzaSyB5gWA2YSHVk0y7pWUigW5eQdyHjcW1yeM",
  authDomain: "reactfirebase-52fe6.firebaseapp.com",
  projectId: "reactfirebase-52fe6",
  storageBucket: "reactfirebase-52fe6.appspot.com",
  messagingSenderId: "537039593411",
  appId: "1:537039593411:web:18232e2f9c4886f0262776",
  measurementId: "G-8PWDJ10WHL"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



