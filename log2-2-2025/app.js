function sign(){
    var getName = document.getElementById('sname');
    var getEmail = document.getElementById('semail');
    var getPassword = document.getElementById('spassword');

    localStorage.setItem('name', getName.value);
    localStorage.setItem('email', getEmail.value);
    localStorage.setItem('password', getPassword.value);

    alert('Account Has been Created Successfully');
}

function login(){
    var getEmail = document.getElementById('lemail');
    var getPassword = document.getElementById('lpass');

    if(
        getEmail.value == localStorage.getItem('email') && 
        getPassword.value == localStorage.getItem('password')
    ) {
        alert('Login Successful');
        location.href = "./welcome.html";
    }else{
        alert('Invalid Credentials');
    }
}
function logout(){
    localStorage.clear();
    location.href = "./login.html";
}
