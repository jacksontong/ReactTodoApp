import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAnBvXMh4y-1BAKzuqCPIANBXrnAntK7Iw",
    authDomain: "toantv-todo-app.firebaseapp.com",
    databaseURL: "https://toantv-todo-app.firebaseio.com",
    storageBucket: "toantv-todo-app.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();
export default firebase;