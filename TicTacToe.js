$(document).ready(function(){
	var xFlag = true;

	var squares = [
		[square00={}, square01={}, square02={}],
		[square10={}, square11={}, square12={}],
		[square20={}, square21={}, square22={}]
	];


	function emptySquares(arr){
		for(var i = 0; i < arr.length; i++ ){
			for(var j = 0; j < arr[i].length; j++){
				arr[i][j].value = "";
				arr[i][j].occupiedFlag = false;
			}
		}
		$(".square").text("");
		console.log(squares);
	}

	emptySquares(squares);
	
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
		}
		console.log("id " + this.id);
		console.log("value " + squares[id[0]][id[1]].value)
	});

	$("#restart").on("click", function(){
		emptySquares(squares);
	});
});
	
