// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
      apiKey: "AIzaSyAJSMG3p1bhTfJNB3ktwX5zYGmSLXg1PcA",
      authDomain: "kwitter-1c7f5.firebaseapp.com",
      databaseURL: "https://kwitter-1c7f5-default-rtdb.firebaseio.com",
      projectId: "kwitter-1c7f5",
      storageBucket: "kwitter-1c7f5.appspot.com",
      messagingSenderId: "517277564984",
      appId: "1:517277564984:web:da0bc9bfae60365095a6cd",
     
};
// Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
                  document.getElementById("output").innerHTML = row;
                  
            });
      });
}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.lcation = "index.html";
}