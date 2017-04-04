function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	//实现点击图片链接后，不仅显示图片，图片下方也显示title
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	//alert(description.childNodes[0].nodeValue);
	//window.onload = countBodyChildren;
}
function countBodyChildren() {
	var bodyElement = document.getElementByTagName("body")[0];
	alert (bodyElement.childNodes.length);
}