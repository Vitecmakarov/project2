// const anchors = document.querySelectorAll('a.menu__item')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href')
    
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }


document.querySelector('nav').addEventListener('click', function (e) {
  var dest = e.target.href;
  
   if (!dest || !(dest = dest.split('#')[1])) return;

   e.preventDefault();

  var p = document.querySelector('.page');
   var a = document.getElementById(dest);

   var st = p.scrollTop;
   var d = a.getBoundingClientRect().top - p.getBoundingClientRect().top - 8;
   var s = d / 1500;
   var pt = performance.now();
  
   requestAnimationFrame(function f(t) {
     var cur = p.scrollTop = st + s * (t - pt);
     if (s<0 ? cur > st + d : cur < st + d) requestAnimationFrame(f);
     else requestAnimationFrame(() => p.scrollTop = st + d);
   });
 });