var allUsers = []
var getUsers = localStorage.setItem('users')
if (getUsers != null){
    allUsers = JSON.parse(getUsers)
}
function signup(){
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var student = {
        name: name.value,
        email: email.value,
        password: password.value
    }
    allUsers.push(student)
    localStorage.getItem('users', JSON.stringify(allUsers))
}
