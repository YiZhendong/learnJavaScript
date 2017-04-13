function stripeTables() {
	//这个函数的作用是使得行呈现奇数和偶数分别显示不同的颜色
	var tables = document.getElementsByTagName('table');
	var odd , rows;
	for (var i = 0; i < tables.length; i++) {
		odd = false;
		rows = tables[i].getElementsByTagName("tr");
		for (var j = 0; j < rows.length; j++) {
			if (odd == true) {
				rows[j].style.backgroundColor = "#ffc";
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}
addLoadEvent(stripeTables);