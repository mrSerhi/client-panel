import { createStore, combineReducers, compose } from "redux";
import { reactReduxFirebase, firebaseReducer } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import { reduxFirestore, firestoreReducer } from "redux-firestore";
// reducers
import notifyReducer from "./reducers/notifyReducer";
import settingsReducer from "./reducers/settingsReducer";

const firebaseConfig = {
  apiKey: "AIzaSyBBw0qd9AZiN4g-cZ5PJ7nf2XSaOzJCNBA",
  authDomain: "react-client-panel-9d7bf.firebaseapp.com",
  databaseURL: "https://react-client-panel-9d7bf.firebaseio.com",
  projectId: "react-client-panel-9d7bf",
  storageBucket: "react-client-panel-9d7bf.appspot.com",
  messagingSenderId: "130646455854"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Initialize firebase instance
firebase.initializeApp(firebaseConfig);

// Initialize other services on firebase instance
// const firestore = firebase.firestore();
firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  notify: notifyReducer,
  settings: settingsReducer
});

// Check if settings in localStorage
if (localStorage.getItem("settings") === null) {
  // create initial settings obj
  const initSettings = {
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: false,
    allowRegistration: false
  };
  // setup initSettings
  localStorage.setItem("settings", JSON.stringify(initSettings));
}
// Create store with reducers and initial state
// Initial state geting from localStorage
const initialState = { settings: JSON.parse(localStorage.getItem("settings")) };
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
