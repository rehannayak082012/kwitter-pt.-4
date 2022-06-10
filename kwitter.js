function addUser()
{
   window.localStorage.setItem("username", document.getElementById("user_name").value);
   window.location.href = "kwitter_room.html";
}