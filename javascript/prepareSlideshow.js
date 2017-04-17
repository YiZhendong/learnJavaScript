// 根据鼠标悬停在哪个链接上，显示不同的图片
function prepareSlideshow() {
	if (!document.getElementsByTagName) {return false;}
	if (!document.getElementById) {return false;}
	if (!document.getElementById("linklist")) {return false;}
	//动态生成图像
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","images/topics.gif");
	preview.setAttribute("alt","building blocks of web design");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);


	var links = list.getElementsByTagName('a');
	// 为mouseover事件添加动画效果
	links[0].onmouseover = function () {
		moveMessage("preview",-100,0,10);
	}
	links[1].onmouseover = function () {
		moveMessage("preview",-200,0,10);
	}
	links[2].onmouseover = function () {
		moveMessage("preview",-300,0,10);
	}
}
addLoadEvent(prepareSlideshow);