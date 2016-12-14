$(document).ready(function () {

	printBord();


	// num of winning for player
	let winObj = {
		p1: 0,
		p2: 0
	}
	$("#player1").html(winObj.p1);
	$("#player2").html(winObj.p2);

	// first menu, how many players,
	// hid #before and show xOrO menu
	$("#onePlayer").on('click', false, beforeToggel);
	$("#twoPlayer").on('click', true, beforeToggel);









});
