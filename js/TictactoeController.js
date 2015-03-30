angular
    .module("tictactoeApp")
    .controller("TictactoeController", TictactoeController);

    function TictactoeController(){
        var self = this;
        var playerTurn = "one"

        self.tictactoeBoard = [  {image: "" , hasPlayer: false},  
	      						 {image: "" , hasPlayer: false},
	      						 {image: "" , hasPlayer: false},
	      					     {image: "" , hasPlayer: false},
	      						 {image: "" , hasPlayer: false},
	      						 {image: "" , hasPlayer: false},
	      						 {image: "" , hasPlayer: false},
	      					     {image: "" , hasPlayer: false},
	      					     {image: "" , hasPlayer: false}
      	];

      	self.gameInit = gameInit
      	self.playerOneTurn = playerOneTurn;
      	self.playerTwoTurn = playerTwoTurn;
      	self.playerMove = playerMove
	
    //Starts the game  	
	gameInit();

	function gameInit() {
	
		function playerMove(playerTurn){
			if (playerTurn === "one"){
				playerOneTurn();
			}

			else {
				playerTwoTurn();
			}
		}

		function playerOneTurn(){
			if (hasPlayer === false){
				self.tictactoeBoard[].image= "./TicTacToe_Images/x.png"  
				playerTurn ="two";
			}
		};

		function playerTwoTurn(){
			if (hasPlayer === false){
				self.tictactoeBoard[].image= "./TicTacToe_Images/o.png" 
				playerTurn = "one"
			}			
		}; 

	} //end of function gameInit

} //close TictactoeController	
