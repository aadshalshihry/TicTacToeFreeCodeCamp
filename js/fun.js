let bord = [
	[" ", " ", " "],
	[" ", " ", " "],
	[" ", " ", " "]
]
var turnObj = {
	one: "X",
	two: "O",
	turn: 1,
	countTurn: 0,
	msg: ""
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
			one: "O",
			two: "X",
			turn: 1
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

function setValue(event) {
	let row = event.data.row - 1;
	let col = event.data.col - 1;
	if (bord[row][col] === " ") {
		let newVal = getTurn();
		$(event.data.sel).html(newVal);
		bord[row][col] = newVal;
		turnObj.countTurn++
	} else
		turnObj.msg = "Cell is Taken"
}

function colWin() {

}

function rowWin() {

}

function diagRWin() {

}

function diagLWin() {

}





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
