function printBord(bord) {
	for (var i = 1; i <= bord.length; i++) {
		for (var j = 1; j <= bord.length; j++) {
			$("#row" + i + "> .col" + j).html(bord[i - 1][j - 1]);
		}
	}
}

function beforeToggel(turnObj) {
	$("#before").css("display", "none");
	$("#game").css("display", "block");
	if (turnObj.one !== undefined) {
		console.log(turnObj);
		return {
			one: "O",
			two: "X"
		}
	}
}
