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

// 动态生成placeholder 
function preparePlaceholder() {
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image");
	description.appendChild(desctext);
	var gallery = document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
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

// 把一个节点插入到另一个节点之后，由于js没有提供这个函数，所以需要记住这个函数，收录到自己的脚本里面
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		//如果targetElement元素不是最后一个元素，则把新元素插入到target和它之后的元素之间
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

// 网页加载之后执行的函数，也可以收录到自己的脚本里
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

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);
