// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDFL0zjZ0d4Lu5lUn-RtFjwOOERYBaOja8",
    authDomain: "chatter-e97ee.firebaseapp.com",
    projectId: "chatter-e97ee",
    storageBucket: "chatter-e97ee.appspot.com",
    messagingSenderId: "349454914477",
    appId: "1:349454914477:web:7107c45a8f2b7c40918724"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
