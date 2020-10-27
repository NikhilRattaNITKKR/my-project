function filter(){
  var select1 = document.getElementById("select1");
  var domain = select1.options[select1.selectedIndex].value;
  let getdomain=document.getElementsByClassName('domain');

  var select2 = document.getElementById("select2");
  var difficulty = select2.options[select2.selectedIndex].value;
  let getdifficulty=document.getElementsByClassName('difficulty');

  let project=document.getElementsByClassName('project');
  let filteredproject=[];
  let filteredgetdifficulty=[];
  for (var i = 0; i < project.length; i++) {
    project[i].style.display="block";
  }
  if(domain!="All"){
    for (var i = 0; i < project.length; i++) {
      if(domain!=getdomain[i].innerHTML)
      project[i].style.display="none";
      else{
        filteredproject.push(project[i]);
        filteredgetdifficulty.push(getdifficulty[i]);
      }
    }
  }
  if(difficulty!="All"){
    for (var i = 0; i < filteredproject.length; i++) {
      if(difficulty!=filteredgetdifficulty[i].innerHTML)
      filteredproject[i].style.display="none";
    }
  }
  filteredproject.length=0;
  filteredgetdifficulty.length=0;
}

function deleteCookie(cookieName) {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function signOut() {
  deleteCookie('threadseed');
  deleteCookie('tval')
  location.reload();
}
