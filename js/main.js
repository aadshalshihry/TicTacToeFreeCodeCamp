$(document).ready(function () {
	let bord = [
		[" ", " ", " "],
		[" ", " ", " "],
		[" ", " ", " "]
	]
	printBord(bord);

	// num of winning for player
	let winObj = {
		p1: 0,
		p2: 0
	}
	$("#player1").html(winObj.p1);
	$("#player2").html(winObj.p2);

	// ex. turn1 = "X"
	let turnObj = {
		one: "X",
		two: "O"
	}

	// the num of turn in whole game
	let countTurn = 0;

	// first menu, how many players,
	// hid #before and show xOrO menu
	$("#onePlayer").on('click', beforeToggel.bind(this, {}));
	turnObj = $("#twoPlayer").on('click', beforeToggel.bind(this, turnObj));








});;
