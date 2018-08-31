/* constants */
const START = 4;

/* globals */
var turn = 1; // 0 for bot's turn, 1 for player's turn
var board = [
	[null, null, null, null, null, null],
	[null, null, null, null, null, null]
	]
	
var scores = [0, 0]
var gameOver = false;

var botRow = document.getElementById("row-" + 1);
var rowElement = document.getElementById("row-" + 2);
var botHole = document.getElementById("hole-score-" + 1);
var playerHole = document.getElementById("hole-score-" + 2);
/**function displayTurn() {
		displayMessage("It is player " + turn + ";s turn.");
}*/

/*function Hole(row, col) {
	this.row = row;
	this.col = col;
	this.numPebbles = numPebbles;
}*/

function displayHole(row, col) {
	var hole = document.createElement('div');
	hole.classList.add("hole");
	hole.classList.add(col);
	var rowElement = document.getElementById("row-" + row);
	rowElement.appendChild(hole);
	for (var i = 0; i < START; i++) {
		addPebble(hole);
	}	
}

function renderBoard() {
	for (var a = 0; a < 2; a++) {
		for (var b = 0; b < 6; b++) {
			//var hole = new Hole(a+1, b+1);
			displayHole(a+1, b+1);
			board[a][b] = START;
		}
	}
}

/*function updateBoard() {
	holes
}*/

function addPebble(hole) {	
	var pebble = document.createElement('p');
	pebble.classList.add("pebble");
	hole.appendChild(pebble);
}

function removePebble(hole) {
	var pebbles = hole.getElementsByTagName('p');
	console.log(pebbles.length);
	hole.removeChild(pebbles[pebbles.length - 1]);
}

renderBoard();

function makeMove(row, col) {
	const ORIG_ROW = row;
	const ORIG_COL = col;
	var rowElement = document.getElementById("row-" + (row+1));
	var orig_hole = rowElement.childNodes[ORIG_COL];
	//alert(board[ORIG_ROW][ORIG_COL]);
	
	while (board[ORIG_ROW][ORIG_COL] > 0) {
		board[ORIG_ROW][ORIG_COL]--;
		removePebble(orig_hole);
		if (row == 1) {		
			var hole = rowElement.childNodes[col];
			if (col < 5) {				
				col++;
				board[row][col]++;
				addPebble(hole);
			} else {
				scores[turn]++;
				addPebble(playerHole);
				row = 0;
				rowElement = document.getElementById("row-" + row);
			}
		} else {
			hole = botRow.childNodes[col];
			if (col > 0) {				
				col--;
				board[row][col]++;
				addPebble(hole);
			} else {
				scores[turn]++;
				addPebble(botHole);
				row = 1;
				rowElement = document.getElementById("row-" + row);
			}
		}
		
	}
	turn ^= 1;	
}

//Attach click listeners to the bottom row's holes
var holes = document.getElementById("row-" + 2).getElementsByClassName("hole");
playerRow = 1;
//var holes1 = document.getElementById("row-" + 1).getElementsByClassName("hole");
while (!gameOver) {
	/*for (var i = 0; i < 6; i++) {
		holes2[i].addEventListener('click', function(event) {
		  event.preventDefault();    
		  console.log(event.target);
		  //var name = event.target.value;
		  //var holeNum = name.substring(5, 6);
		  console.log(event.target);
		  makeMove(playerRow, i);
		});
	}*/
	holes[0].addEventListener('click', function(event) {
		event.preventDefault();    
		console.log(event.target);
		makeMove(turn, 0);
	});
	holes[1].addEventListener('click', function(event) {
		event.preventDefault();    
		console.log(event.target);
		makeMove(turn, 1);
	});
	holes[2].addEventListener('click', function(event) {
		event.preventDefault();    
		console.log(event.target);
		makeMove(turn, 2);
	});
	holes[3].addEventListener('click', function(event) {
		event.preventDefault();    
		console.log(event.target);
		makeMove(turn, 3);
	});
	holes[4].addEventListener('click', function(event) {
		event.preventDefault();    
		console.log(event.target);
		makeMove(turn, 4);
	});
	holes[5].addEventListener('click', function(event) {
		event.preventDefault();    
		console.log(event.target);
		makeMove(turn, 5);
	});
	
	if (turn = 0) {
		var randCol = Math.floor(Math.random() * 6);
		makeMove(turn, randCol);
	}
    
}