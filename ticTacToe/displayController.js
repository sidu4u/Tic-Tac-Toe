
var displayController = (function(){
	
	// create the board from the array data present
	
		(function createBoard()
		{
			board = new Board();
			root = document.getElementById("root");
			boardData = board.data;
			boardData.forEach(function(row,rowIndex)
			{
				// for each row create the divs
				row.forEach(function(cell,cellIndex)
					{
						// create that cell
						cell = document.createElement("div");
						cell.addEventListener("click",onCellClick.bind(null,cell,board));
						cell.textContent="&nbsp;";
						root.appendChild(cell);
					}
				)
			});
			
		})();
	
	
	function onCellClick(cell,board)
	{
		// write x or o based on the turn
		cell.textContent = board.nextTurn().marker;
	}
})();