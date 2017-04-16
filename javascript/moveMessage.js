function moveMessage(elementID, final_x, final_y, interval) {
	if (!document.getElementById) {return false;}
	if (!document.getElementById(elementID)) {return false;}
	var elem = document.getElementById(elementID);
	//通过将movement设置为elem的属性，使之每次只执行一个movement，消除由于鼠标移动太快而导致的动画抖动的问题
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		xpos++;
	}
	if (xpos > final_x) {
		xpos--;
	}
	if (ypos < final_y) {
		ypos++;
	}
	if (ypos > final_y) {
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveMessage('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat, interval);

}