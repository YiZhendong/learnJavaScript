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