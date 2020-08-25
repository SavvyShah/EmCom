export default {
  apiHost: 'http://localhost:3000' || '',
  mode: 'development' || process.env.REACT_APP_MODE, // can be development or production
  firebaseConfig: {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY || '',
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || '',
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL || '',
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_ID || '',
    appId: process.env.REACT_APP_FIREBASE_APP_ID || '',
  },
}
