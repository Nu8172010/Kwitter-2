var firebaseConfig = {
  apiKey: "AIzaSyDyc6c2ae2PMkiQviGE1gtLjfgOKci2xc4",
authDomain: "kwitter-2-2ed72.firebaseapp.com",
databaseURL: "https://kwitter-2-2ed72-default-rtdb.firebaseio.com",
projectId: "kwitter-2-2ed72",
storageBucket: "kwitter-2-2ed72.appspot.com",
messagingSenderId: "415706414400",
appId: "1:415706414400:web:08197c2d7a651bb53d4ea5"
};

firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
 function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child("room_name").update({
})
localStorage.setItem("room_name", room_name);
window.location= "kwitter_page.html";
}
function getData() 
{  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class= 'room name' id="+room_name+"onclick='redirectiontoRoomname (this.id)'>#"+room_name+"</div><hr>";

    });
  });

}

getData();
function redirectiontoRoomname(name)
{
  console.log (name);
  localStorage.setItem("room_name", name);
  window.location= "kwitter_page.html";
}
function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location= "index.html";
}




