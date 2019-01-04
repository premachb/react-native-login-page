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
    this.firebaseApplication = firebase.initializeApp(firebaseConfiguration);
    this.firebaseCurrentUser = this.firebaseApplication.currentUser;
  }

  createUser(email, password) {
    return this.firebaseApplication
      .auth()
      .createUserWithEmailAndPassword(email, password);
  }

  authenticateUser(email, password) {
    return this.firebaseApplication
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        this.firebaseCurrentUser = userCredential.user;
      });
  }
}
