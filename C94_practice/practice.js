var firebaseConfig = {
    apiKey: "AIzaSyBqAmBJIwPzyO4g0WTliPkOWAtPd27MzHw",
    authDomain: "kwitter-da9eb.firebaseapp.com",
    projectId: "kwitter-da9eb",
    storageBucket: "kwitter-da9eb.appspot.com",
    messagingSenderId: "112185722122",
    appId: "1:112185722122:web:6c72a86968a550fc1a26f3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    var user_name = document.getElementById("user_name").value;
    firebase.database().ref('/').child(user_name).update({
        purpose:"user name"
    });
  }