//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyD-6ynMVHg_NJyq2UCQUSA79CgJ0M82F8c",
      authDomain: "kwitter-3c26a.firebaseapp.com",
      databaseURL: "https://kwitter-3c26a-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c26a",
      storageBucket: "kwitter-3c26a.appspot.com",
      messagingSenderId: "1025817082546",
      appId: "1:1025817082546:web:e0a71818dded11b12467ab"
    };
    // Initialize Firebase
    user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
