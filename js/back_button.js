var div = document.getElementById('sector8');
page.onscroll=function(){
    var rect = div.getBoundingClientRect();
    var coord = rect.top;
    var cool = ((document.documentElement.clientHeight/100)*55);

  var scrollElem = document.getElementById("back_button");
    if (page.scrollTop>document.documentElement.clientHeight) {
      scrollElem.style.opacity="1";
    }else{
      scrollElem.style.opacity="0";
    }

    var scrollElem2 = document.getElementById("video");
    if (coord<cool) {
      scrollElem2.style.transform="translateX(0px)";
    }else{
      scrollElem2.style.transform="translateX(-1000px)";
    }
};

// var timeOut;
// function goUp() {
//   var top = Math.max(page.scrollTop,document.documentElement.scrollTop);
//     if (top>0) {
//       page.scrollBy(0,-100);
//       timeOut=setTimeout('goUp()',20);
//     }else clearTimeout(timeOut);
// }


//<img src="images/left.png"></img>