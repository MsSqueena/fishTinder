/*
This page mostly if anything just works with the loader.
*/

//When the page is fully loaded, do this
window.addEventListener("load",function(){
  let loader = document.querySelector(".loader");
  loader.className += " hidden";     //class "loader hidden"
})
