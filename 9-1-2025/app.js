var getUl = document.getElementById("ul");

function addItems() {    

    var getInp = document.getElementById("inp");
    
    if(getInp.value == ''){
        alert('please enter any value')
    }
    else{
        getUl.innerHTML += `
        <li> 
        ${getInp.value} 
        <button class='btn btn-info' onclick='delItem(this)'> delete </button> 
        <button class='btn btn-success' onclick='updateItem(this)'> update </button> 
        </li>
        `;
      getInp.value = "";
    }
}

function updateItem(e) {
  var getPrompt = prompt(
    "Enter updated Value",
    e.parentNode.firstChild.textContent
  );
  e.parentNode.firstChild.textContent = getPrompt;
}

function delItem(e) {
  e.parentNode.remove();
}

function delItems() {
  getUl.remove();
}