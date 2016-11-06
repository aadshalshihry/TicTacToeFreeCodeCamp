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
        return curPlayer;
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



    // watch of click cell in the col1
    $(".col1").click(function() {
        var col = 0;
        curPlayer = setValWhenClick($(this), col, bord, curPlayer, p1, p2);
    });

    // watch of click cell in the col2
    $(".col2").click(function() {
        var col = 1;
        curPlayer = setValWhenClick($(this), col, bord, curPlayer, p1, p2);
    });

    // watch of click cell in the col3
    $(".col3").click(function() {
        var col = 2;
        curPlayer = setValWhenClick($(this), col, bord, curPlayer, p1, p2);
    });

});
