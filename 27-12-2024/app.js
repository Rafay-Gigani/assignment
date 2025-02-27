function press(e){
    var getinp = document.querySelector('#inp')
    getinp.value += e
}
function eq(){
    var getinp = document.querySelector('#inp')
    getinp.value = eval(getinp.value)
}
function ac(){
    var getinp = document.querySelector('#inp')
    getinp.value = ''
}

function cc(){
    var getinp = document.querySelector('#inp')
    getinp.value = getinp.value.slice(0, -1)
}
