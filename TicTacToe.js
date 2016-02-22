$(document).ready(function(){
	var xFlag = true;
	var winFlag = false;
	var fillCount = 0;

	var squares = [
		[square00={}, square01={}, square02={}],
		[square10={}, square11={}, square12={}],
		[square20={}, square21={}, square22={}]
	];

	emptySquares(squares);

	$("body").on("click", function(){
		if(winFlag){
			emptySquares(squares);
		}
	});
	
	$(".square").on("click", function(){
		var id = this.id;
		if(!squares[id[0]][id[1]].occupiedFlag){
			if(xFlag){
				$(this).text("X");
				squares[id[0]][id[1]].value = "X";
				squares[id[0]][id[1]].occupiedFlag = true;
				xFlag = false;
			} else{
				$(this).text("O");
				squares[id[0]][id[1]].value = "O";
				squares[id[0]][id[1]].occupiedFlag = true;
				xFlag = true;
			}
			fillCount++;
			console.log(fillCount);
		}
		checkNext(squares, "X", id);
	});

	$("#restart").on("click", function(){
		emptySquares(squares);
	});
//==============================================================
	function emptySquares(arr){
		for(var i = 0; i < arr.length; i++ ){
			for(var j = 0; j < arr[i].length; j++){
				arr[i][j].value = "";
				arr[i][j].occupiedFlag = false;
			}
		}
		$(".square").text("");
		winFlag = false;
		xFlag = true;
		fillCount = 0;
		// console.log(squares);
	}

	function checkNext(arr, letter, id){
		//first look horizontally in the id row
		//Take the first letter from the square id, the return all of the values for 0,1,2 of the second part of the id
		var rowNum = +id[0];
		var row = arr[rowNum];

		if(row[0].value == row[1].value && row[1].value == row[2].value){
			alert(row[0].value + " WINS!");
			winFlag = true;
			return;
		}
		//Then look vertically in that id row
		//Take the second letter and look through 0,1,2 for that column
		var colNum = +id[1];
		var col = [
		arr[0][colNum].value, 
		arr[1][colNum].value, 
		arr[2][colNum].value
		];
		if(col[0] == col[1] && col[1] == col[2]){
			alert(col[0] + " WINS!");
			winFlag = true;
			return;
		}
		//Then, if it is the right spot (00, 02, 11, 20, 22), look diagonally
		if(id == "00" || id == "02" || id == "11" || id == "20" || id == "22"){
			// left to right diagonal
			if(arr[0][0].value == arr[1][1].value && arr[1][1].value == arr[2][2].value && arr[+id[0]][+id[1]].value == arr[1][1].value){
				alert(arr[1][1].value + " WINS!");
				winFlag = true;
				return;
			}
			// right to left diagonal
			if(arr[0][2].value == arr[1][1].value && arr[1][1].value == arr[2][0].value && arr[+id[0]][+id[1]].value == arr[1][1].value){
				alert(arr[1][1].value + " WINS!");
				winFlag = true;
				return;
			}
		}
		//Then, if none of these are true and all 9 squares are filled, cat's game
		if(fillCount >= 9){
			alert("CAT'S GAME");
			winFlag = true;
			return;
		}		
	}
});
	
