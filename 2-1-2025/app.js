var jsmilisec = 0
var jssec = 0
var jsmin = 0

var htmlmilisec = document.getElementById("mili")
var htmlsec = document.getElementById("sec")
var htmlmin = document.getElementById("min")

var interval;

function start(){
    interval = setInterval(function(){
        jsmilisec++
        htmlmilisec.innerText = jsmilisec
        if(jsmilisec >= 100){
            jssec++
            htmlsec.innerText = jssec
            jsmilisec = '00'
        }
       else if(jssec >= 59){
            jsmin++
            htmlmin.innerText = jsmin
            jssec = '00'
        }
 },10)
     document.getElementById("btn").disabled = true
}

function pause(){
    clearInterval(interval)
    document.getElementById("btn").disabled = false
}

function reset(){
    clearInterval(interval)
    jsmilisec = '00';
    jssec = '00';
    jsmin = '00';
    htmlmilisec.innerText = jsmilisec
    htmlsec.innerText = jssec
    htmlmin.innerText = jsmin
    document.getElementById("btn").disabled = false
}