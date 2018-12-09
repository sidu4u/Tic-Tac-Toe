
var displayController = (function(){
	
	// create the board from the array data present
	
		(function createBoard()
		{
			
			var gameOver = false;			
			var board = new Board();
			var boardDiv = document.getElementById("board");
			var boardData = board.data;
			var gameDiv = document.createElement("div");   // game container
			boardDiv.appendChild(gameDiv);
			gameDiv.classList.add("nestedGrid");
			boardData.forEach(function(row,rowIndex)
			{
				// for each row create the divs
				row.forEach(function(cell,cellIndex)
					{
						// create that cell
						
						var cell = document.createElement("div");
						cell.classList.add("cell","position");
						cell.addEventListener("click",function onCellClick(){
							if(!board.gameWon){
							var currentPlayer = board.nextTurn();
							cell.textContent = currentPlayer.marker;
							board.setMarker(rowIndex,cellIndex,currentPlayer.marker);
							cell.removeEventListener("click",onCellClick);
							board.checkGameWon();
							if(board.gameWon)
							{
								gameOver = `${currentPlayer.name} won the game`;
								
							}
							if(board.turn>=9)
							{
								gameOver = "Tie Game";
							}
							}
							
							if(gameOver)
							{
								var gameResult = document.createElement("div");
								gameResult.classList.add("gameResult");
								gameResult.textContent = gameOver;
								boardDiv.appendChild(gameResult);
							}
						});
						
						gameDiv.appendChild(cell);
					}
				)
			});
			
		})();
	
	
	
})();