document.addEventListener("DOMContentLoaded", accordeon);
 function accordeon() {
	 var accordIco = document.querySelectorAll("div.myImage");
	 var accordTitles = document.querySelectorAll("li.accordeon-item");
	 var text = document.querySelectorAll("section.section6 p");
	 var index;
  
	 function closeBlocks(i) {
		 accordTitles[i].style.maxHeight = "76px";
		 accordIco[i].style.content="url(images/1.png)";
		 text[i].style.transform= "translate(0,-700px)";
	 }
  
	 function openBlocks(i) {
		 accordTitles[i].style.maxHeight = "700px";
		 accordIco[i].style.content="url(images/2.png)";
		 text[i].style.transform= "translate(0,0)";
	 }
	 [].forEach.call(accordTitles, function(btn, i) {
		 closeBlocks(i);
		 btn.addEventListener("click", function() {
			if (index !== i) openBlocks(i);
			if (index !== void 0) closeBlocks(index);
			index = index !== i ? i : void 0;
		 });
	 });
 }