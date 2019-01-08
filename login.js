const firebase = require("firebase");
const firebaseConfiguration = {
  apiKey: "AIzaSyDtKdfZM-U5gg-FL0YwHTiFFk5ar0GYLDA",
  authDomain: "briensreactproject.firebaseapp.com",
  databaseURL: "https://briensreactproject.firebaseio.com",
  projectId: "briensreactproject",
  storageBucket: "briensreactproject.appspot.com",
  messagingSenderId: "831309344977"
};

export default class FirebaseAuthenticator {
  constructor() {
    // Ensure we don't init Firebase more than once.
    if (!firebase.apps.length) {
      this.firebaseApplication = firebase.initializeApp(firebaseConfiguration);
    } else if (firebase.apps[0]) {
      this.firebaseApplication = firebase.apps[0];
    } else {
    }
  }

  createUser(email, password) {
    return this.firebaseApplication
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  authenticateUser(email, password) {
    return this.firebaseApplication
      .auth()
      .signInWithEmailAndPassword(email, password);
  }

  updateUserDisplayName(displayName) {
    return Promise.resolve(this.firebaseApplication.auth().currentUser);
  }
}
