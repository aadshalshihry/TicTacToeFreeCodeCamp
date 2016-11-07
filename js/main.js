function getManyPlayers(selector) {
    var manyPlayers = 0;
    manyPlayers = (selector.attr('id') === "twoPlayers") ? 2 : 1;
    $('#before').css('display', 'none');
    $('#xOrO').css('display', 'block');
}

function callGetManyPlayer() {
    $('#onePlayer').on('click', function() {
        manyPlayers = getManyPlayers($(this));
    });

    $('#twoPlayers').on('click', function() {
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




$(document).ready(function() {
    var bord = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    var manyPlayers = 0;
    var p1;
    var p2;

    var curPlayer = 1;

    callGetManyPlayer();

    $("#X").on('click', function() {
        p1 = "X";
        p2 = "O";
        $('#xOrO').css('display', 'none');
        $('#game').css('display', 'block');
    });

    $("#O").on('click', function() {
        p1 = "O";
        p2 = "X";
        $('#xOrO').css('display', 'none');
        $('#game').css('display', 'block');
    });

    let colWin = function(col, p) {
        let count = 0;
        for (var i = 0; i < bord.length; i++) {
            if (bord[i][col] === p) {
                count++;
            }
        }
        if (count === 3) {
            $("#row1 > .col"+(col+1)).addClass("bgWinner");
            $("#row2 > .col"+(col+1)).addClass("bgWinner");
            $("#row3 > .col"+(col+1)).addClass("bgWinner");
            $('#game').children().children().children().removeClass('col1 col2 col3');
            // console.log("Col Win");
            return true;
        }

        return false;
    }

    let rowWin = function(row, p) {
    	let sel = $('#row' + (row + 1));
        let count = 0;
        for (var i = 0; i < bord.length; i++) {
            if (bord[row][i] === p) {
                count++;
            }
        }
        if (count === 3) {
            sel.addClass("bgWinner");
            // console.log("Row win", p, row);
            return true;
        }

        return false;
    }



    // watch of click cell in the col1
    $(".col1").click(function() {
        var col = 0;

        // set val to the cell
        let s = setValWhenClick($(this), col, bord, curPlayer, p1, p2);

        // check of p col has win
        var cWint = (curPlayer === 1) ? colWin(col, p1): colWin(col, p2);
        let row = (typeof s === 'undefined') ? 0 : s[1];

        // check of p row has win
        var rWin = (curPlayer === 1) ? rowWin(row, p1, $('#row'+(row+1)) ): rowWin(row, p2, $('#row'+(row+1) ));
        if(rWin){
        	$('#game').children().children().children().removeClass('col1 col2 col3');
        } else {
        	curPlayer = (typeof s === 'undefined') ? 0 : s[0];
        }

    });

    // watch of click cell in the col2
    $(".col2").click(function() {
        var col = 1;

        // set val to the cell
        let s = setValWhenClick($(this), col, bord, curPlayer, p1, p2);

        // check of p col has win
        var cWint = (curPlayer === 1) ? colWin(col, p1): colWin(col, p2);
        let row = (typeof s === 'undefined') ? 0 : s[1];

        // check of p row has win
        var rWin = (curPlayer === 1) ? rowWin(row, p1, $('#row'+(row+1)) ): rowWin(row, p2, $('#row'+(row+1) ));
        if(rWin){
        	$('#game').children().children().children().removeClass('col1 col2 col3');
        } else {
        	curPlayer = (typeof s === 'undefined') ? 0 : s[0];
        }
        
    });

    // watch of click cell in the col3
    $(".col3").click(function() {
        var col = 2;

        // set val to the cell
        let s = setValWhenClick($(this), col, bord, curPlayer, p1, p2);

        // check of p col has win
        var cWint = (curPlayer === 1) ? colWin(col, p1): colWin(col, p2);
        let row = (typeof s === 'undefined') ? 0 : s[1];

        // check of p row has win
        var rWin = (curPlayer === 1) ? rowWin(row, p1, $('#row'+(row+1)) ): rowWin(row, p2, $('#row'+(row+1) ));
        if(rWin){
        	$('#game').children().children().children().removeClass('col1 col2 col3');
        } else {
        	curPlayer = (typeof s === 'undefined') ? 0 : s[0];
        }
    });

});
