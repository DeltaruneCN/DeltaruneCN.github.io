console.log(
	'%c  _____    _____     _____   _   _ \n |  __ \\  |  __ \\   / ____| | \\ | |\n | |  | | | |__) | | |      |  \\| |\n | |  | | |  _  /  | |      | . ` |\n | |__| | | | \\ \\  | |____  | |\\  |\n |_____/  |_|  \\_\\  \\_____| |_| \\_|\n Powered by PCC-Studio',
	'background:#fff;color:#17A167'
);

console.log(getCurrentDate());

function getCurrentDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (hours >= 0 && hours <= 9) {
		hours = "0" + hours;
	}
	if (minutes >= 0 && minutes <= 9) {
		minutes = "0" + minutes;
	}
	if (seconds >= 0 && seconds <= 9) {
		seconds = "0" + seconds;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
		" " + hours + seperator2 + minutes +
		seperator2 + seconds;
	return currentdate;
}