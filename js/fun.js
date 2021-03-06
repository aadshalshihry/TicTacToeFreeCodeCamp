let bord = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
]
let turnObj = {
	one: "X",
	two: "O",
	turn: 1,
	countTurn: 0,
	countPlayer: 1,
	msg: ""
}

// num of winning for player
let winObj = {
	p1: 0,
	p2: 0
}

let someOneWin = false;

function increamentWinObj(turn) {
	if (turn === 1) {
		winObj.p1++;
		$("#player1").html(winObj.p1);
		return true;
	} else {
		winObj.p2++;
		$("#player2").html(winObj.p2);
		return true;
	}
}


function printBord() {
	for (var i = 1; i <= bord.length; i++) {
		for (var j = 1; j <= bord.length; j++) {
			$("#row" + i + "> .col" + j).html(bord[i - 1][j - 1]);
		}
	}
}

function beforeToggel(event) {

	$("#before").css("display", "none");
	$("#game").css("display", "block");
	if (event.data === true) {
		turnObj = {
			one: "X",
			two: "O",
			turn: 1,
			countPlayer: 2,
			countTurn: 0,
			msg: ""
		};
	}
}

function getTurn() {
	if (turnObj.turn === 1) {

		turnObj.turn = 2
		return turnObj.one
	} else {
		turnObj.turn = 1
		return turnObj.two
	}
}

function resetBord() {
	for (var i = 0; i < bord.length; i++) {
		for (var j = 0; j < bord.length; j++) {
			bord[i][j] = " ";
		}
	}
}

function checkWinner(col, row, turn) {
	if (isColWin(col)) win(turn);

	if (isRowWin(row)) win(turn);

	if (isDiagRWin()) win(turn);

	if (isDiagLWin()) win(turn);
}

function win(turn) {
	$("#hider").css("display", "block");
	$("#hider > h2").html("Player" + turn + " Win the game");
	if(!someOneWin)
		someOneWin = increamentWinObj(turn);
	$("#continue").on('click', function () {
		someOneWin = false;
		resetBord();
		printBord();
		$("#hider").css("display", "none");
		turnObj.countTurn = 0;
		turnObj.turn = (turn === 1) ? 2 : 1;
		if (turnObj.turn === 2 && turnObj.countPlayer === 1)
			PCTurn();
	})
}

function PCTurn() {
	while (true) {
		let row = Math.floor(Math.random() * (3 - 0) + 0);
		let col = Math.floor(Math.random() * (3 - 0) + 0);
		if (bord[row][col] === " ") {

			let turn = turnObj.turn;
			let newVal = getTurn();
			$("#row" + (row + 1) + " .col" + (col + 1)).text(newVal);
			bord[row][col] = newVal;
			turnObj.countTurn++;
			checkWinner(col, row, turn);

			break;
		}
	}

}

function setValue(event) {
	let row = event.data.row - 1;
	let col = event.data.col - 1;

	if (bord[row][col] === " ") {
		let turn = turnObj.turn;
		let newVal = getTurn();
		$(event.data.sel).html(newVal);
		bord[row][col] = newVal;
		turnObj.countTurn++;
		checkWinner(col, row, turn)
		if (turnObj.countPlayer === 1 && turnObj.countTurn < 9) {
			PCTurn();
		}
		if (turnObj.countTurn === 9) {
			console.log("Tie");
			// $("#hider").css("display", "block");
			// $("#hider > h2").html("it is tie");
		}

	} else
		turnObj.msg = "Cell is Taken"
}

function isColWin(col) {
	let val = bord[0][col];
	let count = 1;
	for (var i = 1; i < bord.length; i++) {
		if (bord[i][col] === val) {
			count++;
		}
	}
	return count === 3 ? true : false;
}

function isRowWin(row) {
	let val = bord[row][0];
	let count = 1;
	for (var i = 1; i < bord.length; i++) {
		if (bord[row][i] === val) {
			count++;
		}
	}
	return count === 3 ? true : false;
}

function isDiagRWin() {
	let val = bord[0][0];
	let count = 1;
	for (var i = 1; i < bord.length; i++) {
		if (bord[i][i] === val && val !== " ") {
			count++;
		}
	}
	return count === 3 ? true : false;
}

function isDiagLWin() {
	let val1 = bord[0][2];
	let val2 = bord[1][1];
	let val3 = bord[2][0];
	if (val3 === val2 && val3 !== " ") {
		if (val2 === val1) {
			return true;

		}
	} else {
		return false;
	}
}


/**    Click Handler **/

// first menu, how many players,
// hid #before and show xOrO menu
$("#onePlayer").on('click', false, beforeToggel);
$("#twoPlayer").on('click', true, beforeToggel);

$("#reset").on('click', function () {
	turnObj = {
		one: "X",
		two: "O",
		turn: 1,
		countTurn: 0,
		countPlayer: 1,
		msg: ""
	}
	winObj.p1 = 0;
	winObj.p2 = 0;
	$("#player1").html(winObj.p1);
	$("#player2").html(winObj.p2);
	$("#game").css("display", "none");
	$("#hider").css("display", "none");
	$("#before").css("display", "block");
	resetBord();
	printBord();
})

$("#row1 > .col1").on('click', {
	row: 1,
	col: 1,
	sel: "#row1 > .col1"
}, setValue);

$("#row1 > .col2").on('click', {
	row: 1,
	col: 2,
	sel: "#row1 > .col2"
}, setValue);

$("#row1 > .col3").on('click', {
	row: 1,
	col: 3,
	sel: "#row1 > .col3"
}, setValue);

$("#row2 > .col1").on('click', {
	row: 2,
	col: 1,
	sel: "#row2 > .col1"
}, setValue);

$("#row2 > .col2").on('click', {
	row: 2,
	col: 2,
	sel: "#row2 > .col2"
}, setValue);

$("#row2 > .col3").on('click', {
	row: 2,
	col: 3,
	sel: "#row2 > .col3"
}, setValue);

$("#row3 > .col1").on('click', {
	row: 3,
	col: 1,
	sel: "#row3 > .col1"
}, setValue);

$("#row3 > .col2").on('click', {
	row: 3,
	col: 2,
	sel: "#row3 > .col2"
}, setValue);

$("#row3 > .col3").on('click', {
	row: 3,
	col: 3,
	sel: "#row3 > .col3"
}, setValue);
