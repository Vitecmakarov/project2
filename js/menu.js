var page = document.querySelector('.page');

page.addEventListener('scroll', function(){

var sector1= block_height('sector1');

var back_butt= document.querySelector('.back_button');

document.getElementById('back_button').addEventListener('click', function(){
  ScrollUp();
});

function ScrollUp(){
  var t,s;
  s=page.scrollTop||page.pageYOffset;
  t=setInterval(function(){if(s>0)page.scroll(0,s-=40);else clearInterval(t)},5);
}

  if (this.scrollTop>sector1) {
    back_butt.style.display= "block";
  }
  if (this.scrollTop<sector1) {
    back_butt.style.display= "none";
  }
});

function block_height(elem){
  var block = document.getElementById(elem);
  var elem_height = window.getComputedStyle(block).height;
  var newheight = elem_height.substring(0, elem_height.length - 2);
  return Math.round(newheight);
}