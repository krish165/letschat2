function addUser()
{
    username=document.getElementById("user_name").value;
    localStorage.setItem("user_name",username);
    window.location="index3.html";
    window.alert="welcome to Let's chat"+" "+username;
}