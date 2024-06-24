var menu=document.getElementById("menubar")
var sidenav=document.getElementById("sidenav")
var xmark=document.getElementById("xmark")

menu.addEventListener("click",function(){
    sidenav.style.right=0
})
xmark.addEventListener("click",function(){
    sidenav.style.right='-50%'
})