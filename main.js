function Register()
{
    var flag=1;
    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    if(name.length<1)
    {
        alert("Name is empty !");
        flag=0;
    }
    if(pass.length<8)
    {
        alert("Password is less than 8 letters !");
        flag=0;
    }
    if(email.indexOf("@")<0 || email.indexOf(".")<0 || email.indexOf(" ")>=0 || email.length<11)
    {    
        alert("Wrong email !");
        flag=0;
    }
    if(flag==1) {alert("Welcome "+name+" you have registered");}
}
function login()
{
    var flag=1;
    var pass=document.getElementById("pass").value;
    var email=document.getElementById("email").value;
    if(email.indexOf("@")<0 || email.indexOf(".")<0 || email.indexOf(" ")>=0 || email.length<11)
    {    
        alert("Wrong email !");
        flag=0;
    }
    if(pass.length<8)
    {
        alert("Wrong password !");
        flag=0;
    }
    if(flag==1) {alert("Welcome back");}
}
function forget()
{
    var flag=1;
    var email=document.getElementById("email").value;
    if(email.indexOf("@")<0 || email.indexOf(".")<0 || email.indexOf(" ")>=0 || email.length<11)
    {    
        alert("Wrong email !");
        flag=0;
    }
    if(flag==1) {alert("The password sent to your email");}
}
