var firebaseConfig = {
    apiKey: "AIzaSyDnBuDbMrWDPBZbB8ZYWGZnApBEUtglF1Q",
    authDomain: "class-94-74af5.firebaseapp.com",
    databaseURL: "https://class-94-74af5-default-rtdb.firebaseio.com",
    projectId: "class-94-74af5",
    storageBucket: "class-94-74af5.appspot.com",
    messagingSenderId: "813483383768",
    appId: "1:813483383768:web:e32de337752bf024a7f0ad",
    measurementId: "G-7Y5XKS84ZJ"
  };

   
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  getData();


  function addRoom() 
  {
    var roomName = document.getElementById("room_name").value;
    window.localStorage.setItem("room_name", roomName);

   //firebase.database().ref("/").set(roomName);

   firebase.database().ref("/").child(roomName).update( 
        { purpose : "adding room name" 
        });
    
        redirectToRoomName();
  }

  function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
      {  document.getElementById("rooms").innerHTML = "";
         snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row
   });});}
   

   function getData() {
     var data = firebase.database().ref("/");
     data.on('value', function(allRooms) {
      
       allRooms.forEach(function(eachRoom){

       // htmlRoom = "<div class='room_name' id="+eachRoom.key+"  >"+ eachRoom.key +"</div><hr>";
        htmlRoom = "<h4>"+ eachRoom.key +"</h4><hr>";

        document.getElementById("rooms").innerHTML += htmlRoom;

       })

     });
   }
   function redirectToRoomName()
   {
    localStorage.setItem("allRooms");
    window.location.href = "kwitter_page.html";
   }