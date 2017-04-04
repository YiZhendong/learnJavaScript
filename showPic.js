function prepareGallery() {
	//分别检查当前浏览器是否理解getElementsByTagName,getElementById以及当前网页是否存在一个id为imagegallery的元素
	//注意函数是getElementsByTagName,而不是getElementByTagName
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		//为link的每一个元素添加一个匿名函数，返回false代表禁用有关链接的默认行为
		links[i].onclick = function() {
			return showPic(this) ? false : true;
		}
	}
}
function showPic(whichpic) {
	if (!document.getElementById("placeholder")) {
		return false;
	}
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") {
		return false;
	}
	placeholder.setAttribute("src", source);

	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}


function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}
addLoadEvent(prepareGallery);