var bgColor1 = {r:200,g:23,b:17}
var bgColor2 = {r:10,g:150,b:142}

window.onload = function(){
	window.dispatchEvent(new Event("scroll"));
}
window.addEventListener("scroll",function(){
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)-innerHeight;
var percent = scrollTop/scrollHeight;
var color = {r:0,g:0,b:0};
var tmp = Math.abs(bgColor1.r - bgColor2.r)*percent;
color.r =  Math.ceil(bgColor1.r > bgColor2.r ? bgColor1.r - tmp: bgColor1.r + tmp);

 tmp = Math.abs(bgColor1.g - bgColor2.g)*percent;
color.g =  Math.ceil(bgColor1.g > bgColor2.g ? bgColor1.g - tmp: bgColor1.g + tmp);

tmp = Math.abs(bgColor1.b - bgColor2.b)*percent;
color.b =  Math.ceil(bgColor1.b > bgColor2.b ? bgColor1.b - tmp: bgColor1.b + tmp);

document.getElementsByClassName(".line").style.background = "rgb("+color.r+","+color.g+","+color.b+")";
});