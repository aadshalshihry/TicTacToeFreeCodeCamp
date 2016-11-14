function getManyPlayers(selector) {
	var manyPlayers = 0;
	manyPlayers = (selector.attr('id') === "twoPlayers") ? 2 : 1;
	$('#before').css('display', 'none');
	$('#xOrO').css('display', 'block');
}

function callGetManyPlayer() {
	$('#onePlayer').on('click', function () {
		manyPlayers = getManyPlayers($(this));
	});

	$('#twoPlayers').on('click', function () {
		manyPlayers = getManyPlayers($(this));
	});
}

function setValWhenClick(sel, col, bord, curPlayer, p1, p2) {
	var row = sel.parent().attr('id').split("")[3] - 1;
	if (bord[row][col] === "") {
		if (curPlayer === 1) {
			bord[row][col] = p1;
			curPlayer = 2;
		} else {
			bord[row][col] = p2;
			curPlayer = 1;
		}
		var selector = '#row' + (row + 1) + ' .col' + (col + 1);
		$(selector).html(bord[row][col]);
		// console.log(row, col);
		return [curPlayer, row];
	}
}




$(document).ready(function () {
	var bord = [
		["", "", ""],
		["", "", ""],
		["", "", ""]
	];

	var p1CountWin = 0;
	var p2CountWin = 0;

	var manyPlayers = 0;
	var p1;
	var p2;

	var curPlayer = 1;

	callGetManyPlayer();

	$('#player1').html(p1CountWin);
	$('#player2').html(p2CountWin);


	$("#X").on('click', function () {
		p1 = "X";
		p2 = "O";
		$('#xOrO').css('display', 'none');
		$('#game').css('display', 'block');
	});

	$("#O").on('click', function () {
		p1 = "O";
		p2 = "X";
		$('#xOrO').css('display', 'none');
		$('#game').css('display', 'block');
	});

	let colWin = function (col, p) {
		let count = 0;
		for (var i = 0; i < bord.length; i++) {
			if (bord[i][col] === p) {
				count++;
			}
		}
		if (count === 3) {
			$("#row1 > .col" + (col + 1)).addClass("bgWinner");
			$("#row2 > .col" + (col + 1)).addClass("bgWinner");
			$("#row3 > .col" + (col + 1)).addClass("bgWinner");
			return true;
		}

		return false;
	}

	let rowWin = function (row, p) {
		let sel = $('#row' + (row + 1));
		let count = 0;
		for (var i = 0; i < bord.length; i++) {
			if (bord[row][i] === p) {
				count++;
			}
		}
		if (count === 3) {
			sel.addClass("bgWinner");
			// console.log("Row win", p, row, bord);
			return true;
		}

		return false;
	}

	let diag1 = function (p) {
		let count = 0;
		for (var i = 0; i < bord.length; i++) {
			if (bord[i][i] === p) {
				count++;
			}
		}

		if (count === 3) {
			$('#row1 > .col1').addClass('bgWinner');
			$('#row2 > .col2').addClass('bgWinner');
			$('#row3 > .col3').addClass('bgWinner');
			return true;
		}

		return false;
	}

	let daig2 = function (p) {
		let count = 0;
		for (var i = 0, j = 2; i < bord.length; i++, j--) {
			if (bord[j][i] === p) {
				count++;
			}
		}

		if (count === 3) {
			$('#row1 > .col3').addClass('bgWinner');
			$('#row2 > .col2').addClass('bgWinner');
			$('#row3 > .col1').addClass('bgWinner');
			return true;
		}

		return false;
	}

	function afterWin() {
		$('#hider').css('display', 'block');
		$('#hider > h2').html("Player " + curPlayer + " Win");
		curPlayer === 1 ? p1CountWin++ : p2CountWin++;
		$('#player1').html(p1CountWin);
		$('#player2').html(p2CountWin);
		setTimeout(function () {
			$('#hider').css('display', 'none');
			bord = [
				["", "", ""],
				["", "", ""],
				["", "", ""]
			];
			$('#row1, #row2, #row3').children().empty().removeClass("bgWinner");

		}, 1000);
	}



	// watch of click cell in the col1
	$(".col1").click(function () {
		var col = 0;

		// set val to the cell
		let s = setValWhenClick($(this), col, bord, curPlayer, p1, p2);

		// check of p col has win
		var cWin = (curPlayer === 1) ? colWin(col, p1) : colWin(col, p2);
		let row = (typeof s === 'undefined') ? 0 : s[1];

		// check of p row has win
		var rWin = (curPlayer === 1) ? rowWin(row, p1) : rowWin(row, p2);

		// daignal check for winning
		var diag1Win = (curPlayer === 1) ? diag1(p1) : diag1(p2);
		var diag2Win = (curPlayer === 1) ? daig2(p1) : daig2(p2);

		// disable clicking
		if (rWin || cWin || diag1Win || diag2Win) {
			afterWin();

		} else {
			curPlayer = (typeof s === 'undefined') ? 0 : s[0];
		}



	});

	// watch of click cell in the col2
	$(".col2").click(function () {
		var col = 1;

		// set val to the cell
		let s = setValWhenClick($(this), col, bord, curPlayer, p1, p2);

		// check of p col has win
		var cWin = (curPlayer === 1) ? colWin(col, p1) : colWin(col, p2);
		let row = (typeof s === 'undefined') ? 0 : s[1];

		// check of p row has win
		var rWin = (curPlayer === 1) ? rowWin(row, p1) : rowWin(row, p2);

		// daignal check for winning
		var diag1Win = (curPlayer === 1) ? diag1(p1) : diag1(p2);
		var diag2Win = (curPlayer === 1) ? daig2(p1) : daig2(p2);

		// disable clicking
		if (rWin || cWin || diag1Win || diag2Win) {
			afterWin();

		} else {
			curPlayer = (typeof s === 'undefined') ? 0 : s[0];
		}

	});

	// watch of click cell in the col3
	$(".col3").click(function () {
		var col = 2;

		// set val to the cell
		let s = setValWhenClick($(this), col, bord, curPlayer, p1, p2);

		// check of p col has win
		var cWin = (curPlayer === 1) ? colWin(col, p1) : colWin(col, p2);
		let row = (typeof s === 'undefined') ? 0 : s[1];

		// check of p row has win
		var rWin = (curPlayer === 1) ? rowWin(row, p1) : rowWin(row, p2);

		// daignal check for winning
		var diag1Win = (curPlayer === 1) ? diag1(p1) : diag1(p2);
		var diag2Win = (curPlayer === 1) ? daig2(p1) : daig2(p2);

		// disable clicking
		if (rWin || cWin || diag1Win || diag2Win) {
			afterWin();

		} else {
			curPlayer = (typeof s === 'undefined') ? 0 : s[0];
		}
	});

});
