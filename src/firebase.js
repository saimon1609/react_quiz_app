import { initializeApp } from "firebase/app";

// firebase configuration
const app = initializeApp({
  apiKey: "AIzaSyAp4J4ovbEOWy75xy88nwoE6WMMXOgVOw0",
  authDomain: "react-quiz-dev-ca706.firebaseapp.com",
  projectId: "react-quiz-dev-ca706",
  storageBucket: "react-quiz-dev-ca706.appspot.com",
  messagingSenderId: "857156115369",
  appId: "1:857156115369:web:c3ea70d9f1429ecd4842b8",
  databaseURL:
    "https://react-quiz-dev-ca706-default-rtdb.asia-southeast1.firebasedatabase.app",
});
// const app = initializeApp({
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_ID,
//   databaseURL: process.env.REACT_APP_DATABASE_URL,
// });

export default app;
