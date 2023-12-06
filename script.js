document.body.style.background = "lightblue"

// window.alert("Hello World")
const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A','B','C','D','E','F','G','H','I','J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']

let a 
let d = ''
for (let c = 0; c < 5; c++) {
  a = Math.floor(Math.random() * 62)
  d = d + alphabets[a]
}
// let b = Math.floor(Math.random() * 10)

let e = document.getElementsByTagName('button')[0]  //------> Submit button
let f = document.getElementsByTagName('button')[1]  //--------> reset button
let g = ''
g = d 
document.getElementsByTagName('input')[1].value = g


f.onclick = function() {
  d = ''
  for (let c = 0; c < 5; c++) {
    a = Math.floor(Math.random() * 62)
    d = d + alphabets[a]
  }
  // b = Math.floor(Math.random() * 10)
  g = d 
  document.getElementsByTagName('input')[1].value = g
  document.getElementsByTagName('input')[0].value ='' 

}

let h = document.getElementsByTagName('input')[0]

e.onclick = function() {
  if (h.value == '') {
    alert('enter captcha code')
  }
  else if (h.value == g) {
    document.getElementsByTagName('p')[0].style.color = 'black'
    document.getElementsByTagName('p')[0].innerHTML = 'matched'
  }
  else {
    document.getElementsByTagName('p')[0].style.color = 'red'
    document.getElementsByTagName('p')[0].innerHTML = 'not matched'
  }
}

