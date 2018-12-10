function Board()
{
	this.data =	 [["","",""],["","",""],["","",""]];
	
	
	this.turn = 0;
	this.gameWon = false;
		
	Board.prototype.nextTurn = function ()
	{
		this.turn++;
		
		this.whosTurn =  this.turn%2==0?this.player2:this.player1;
		
		return this.whosTurn;
	}
	
	Board.prototype.setMarker = function(rowIndex,colIndex,markerData)
	{
		this.data[rowIndex][colIndex] = markerData;
		
	}
	
	Board.prototype.getMarker = function(rowIndex,colIndex)
	{
		
		return this.data[rowIndex][colIndex];
	}
	
	Board.prototype.checkGameWon = function()
	{
		this.gameWon =  utils.checkColumns.call(this)||utils.checkRows.call(this)||utils.checkDownDiagonal.call(this)||utils.checkUpDiagonal.call(this);
		
	}
	
	Board.prototype.setPlayers = function(player1,player2)
	{
		this.player1 = player1;
		this.player2 = player2;
		
	}	
}