function find() {
  let filter=document.getElementById('search').value;
  let list=document.getElementsByClassName('li');
  let li=document.getElementsByClassName('header');
  for (var i = 0; i < li.length; i++) {
    list[i].style.display="block";
    let a=li[i].innerText;
    if(filter=='c++'||filter=='C++'||filter=='++'){
      if(a!='C++')
      list[i].style.display="none";
    }
    else{
      let b=a.toUpperCase();
      let filterup=filter.toUpperCase();
      if(b.search(filterup)==-1){
        list[i].style.display="none";
      }
    }
  }
}
