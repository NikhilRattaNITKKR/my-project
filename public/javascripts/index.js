window.addEventListener("scroll", function(event) {
   var scroll_y = this.scrollY;
console.log(scroll_y);
   var divs=document.getElementsByClassName('transition');
   var topbar=document.getElementById('topbar');
   if(scroll_y<646){
     topbar.style.backgroundColor="";
   }
    if(scroll_y>647 && scroll_y<1490){
    topbar.style.backgroundColor="rgba(47, 36, 82,0.95)";
    }
    if(scroll_y>1495 && scroll_y<1600){
      topbar.style.backgroundColor="rgba(59, 3, 94,0.95)";
    }
    if (scroll_y<1600 && scroll_y>647) {
      for (var i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor="rgba(59, 3, 94,0.95)";

      }
    }
   if (scroll_y>1600) {
       topbar.style.backgroundColor="rgba(3, 3, 5, 1)";
     for (var i = 0; i < divs.length; i++) {
      divs[i].style.backgroundColor="rgba(3, 3, 5, 1)";

     }
   }

});

//Cookie
function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function signOutAdmin() {
    console.log("Sign Out as Admin");
    deleteCookie("threadseed");
    location.reload();
}
