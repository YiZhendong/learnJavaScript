// 根据鼠标悬停在哪个链接上，显示不同的图片
function prepareSlideshow() {
	if (!document.getElementsByTagName) {return false;}
	if (!document.getElementById) {return false;}
	if (!document.getElementById("linklist")) {return false;}
	if (!document.getElementById("preview")) {return false;}
	// 为图片应用样式
	var preview = document.getElementById('preview');
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	// 取得列表中的所有链接
	var list = document.getElementById("linklist");
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