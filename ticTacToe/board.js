function Board()
{
	this.data =	 [["","",""],["","",""],["","",""]];
	this.player1 = new Player("Player X","X");
	this.player2 = new Player("Player O","O");
	
	this.turn = 0;
	
	this.nextTurn = function ()
	{
		this.turn++;
		
		return this.turn%2==0?this.player2:this.player1;
	}
	
}