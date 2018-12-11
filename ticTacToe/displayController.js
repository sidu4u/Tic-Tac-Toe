
var displayController = (function(){
	
	// create the board from the array data present
			var player1 = new Player("Player X","X");
			var player2 = new Player("Player O","O");
			var updateScorefunc;
	   
	   (function initGame(){
		    
			createNewGameButton();
			createPlayersScoreCard();
			createBoard();
	   })();
	  
	
		function createBoard()
		{
			
			var gameOver = false;			
			var board = new Board();
			var boardDiv = document.getElementById("board");
			
			while(boardDiv.hasChildNodes())
			{
				boardDiv.firstChild.remove();
			}
			
			var boardData = board.data;
			var gameDiv = document.createElement("div");   // game container
			
			board.setPlayers(player1,player2);
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
										currentPlayer.score++;
										updateScorefunc();
										gameOver = `${currentPlayer.name} won the game`;
										
									}
									if(board.turn>=9)
									{
										gameOver = "Tie Game";
									}
							
							
							
								if(gameOver)
								{
									var gameResult = document.createElement("div");
									gameResult.classList.add("gameResult");
									gameResult.textContent = gameOver;
									boardDiv.appendChild(gameResult);
								}
							}
						});
						
						gameDiv.appendChild(cell);
					}
				)
			});
			
			
			
		};
	
	    function createPlayersScoreCard()
		{
			var player1Div = document.getElementById("player1");  // lhs div
			var player1ButtonDiv = document.createElement("div");
			var player1Button    = document.createElement("button");
			
			player1Button.setAttribute("type","reset");
			player1ButtonDiv.classList.add("margin");
			player1ButtonDiv.appendChild(player1Button);
			player1Button.textContent = player1.name;
			player1Div.appendChild(player1ButtonDiv);
			
			var player2Div = document.getElementById("player2");   // rhs div
			var player2ButtonDiv = document.createElement("div");
			var player2Button = document.createElement("button");
			
			player2Button.setAttribute("type","reset");
			player2ButtonDiv.classList.add("margin");
			player2ButtonDiv.appendChild(player2Button);
			player2Button.textContent = player2.name;
			player2Div.appendChild(player2ButtonDiv);
			
			createScore(player1Div,player2Div,player1,player2);
			
		};
		
		
		function updateScore(player1ScoreDiv,player2ScoreDiv)
		{
			player1ScoreDiv.textContent = player1.score;
			player2ScoreDiv.textContent = player2.score;
			
		}
		
		function createScore(player1Div,player2Div)
		{
			var player1ScoreGrid = document.createElement("div");
			var player2ScoreGrid = document.createElement("div");
			player1ScoreGrid.classList.add("twoColGrid");
			player2ScoreGrid.classList.add("twoColGrid");
			
			var player1ScoreHeading = document.createElement("h2");
			var player2ScoreHeading = document.createElement("h2");
			player1ScoreHeading.textContent = "Score";
			player2ScoreHeading.textContent = "Score";
			
			
			var player1ScoreValue = document.createElement("div");
			player1ScoreValue.textContent = player1.score;
			var player2ScoreValue = document.createElement("div");
			player2ScoreValue.textContent = player2.score;
			
			updateScorefunc = updateScore.bind(null,player1ScoreValue,player2ScoreValue);   // binding with the divs
			
			player1ScoreGrid.appendChild(player1ScoreHeading);
			player1ScoreGrid.appendChild(player1ScoreValue);
			
			
			player2ScoreGrid.appendChild(player2ScoreHeading);
			player2ScoreGrid.appendChild(player2ScoreValue);
			player1Div.appendChild(player1ScoreGrid);
			player2Div.appendChild(player2ScoreGrid);
			
		}
		
		function createNewGameButton(player1,player2)
		{
			var controlsDiv = document.getElementById("controls");
			var newGameButton = document.createElement("button");
			newGameButton.textContent = "New Game";
			newGameButton.setAttribute("id","newGameButton");
			controlsDiv.appendChild(newGameButton);
			newGameButton.addEventListener("click",function(){
				createBoard(player1,player2);
			})
			
		}
	
})();