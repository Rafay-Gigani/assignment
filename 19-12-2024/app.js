var string = prompt('Write Any Word')

function palandrome(string) {
  var reverseString = string.split('').reverse().join('');
  if (reverseString === string) {
    alert(`${string} is palandrome`)
  }
  else {
   alert(`${string} is not palandrome`)
  }
}

palandrome(string);