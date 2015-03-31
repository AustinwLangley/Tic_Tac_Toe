angular
    .module("tictactoeApp")
    .controller("TictactoeController", TictactoeController);

    function TictactoeController(){
        var self = this;
        var playerTurn = "one";
        var winner;

        self.tictactoeBoard = [  {image: "", hasPlayer: false, playerOne: false, playerTwo: false},  
	      						 {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      						 {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      					     {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      						 {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      						 {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      						 {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      					     {image: "", hasPlayer: false, playerOne: false, playerTwo: false},
	      					     {image: "", hasPlayer: false, playerOne: false, playerTwo: false}
      	];

      	self.playerOneTurn = playerOneTurn;
      	self.playerTwoTurn = playerTwoTurn;
      	self.playerMove = playerMove;

			function playerMove($index){

				if (playerTurn === "one"){
					playerOneTurn($index);
				}
				else {
					playerTwoTurn($index);
					
				}
			};
			function playerOneTurn($index){
				if (self.tictactoeBoard[$index].hasPlayer === false){
					self.tictactoeBoard[$index].image = "./Tic_Tac_Toe_Images/x.png"  
					self.tictactoeBoard[$index].hasPlayer = true;
					self.tictactoeBoard[$index].playerOne = true;
					playerTurn = "two";
					winnerCheck();

					return playerTurn;
				}
			};
			function playerTwoTurn($index){
				if (self.tictactoeBoard[$index].hasPlayer === false){
					self.tictactoeBoard[$index].image= "./Tic_Tac_Toe_Images/o.png" 
					self.tictactoeBoard[$index].hasPlayer = true;
					self.tictactoeBoard[$index].playerTwo = true;
					playerTurn = "one"
					winnerCheck();
					return playerTurn;
				}			
			}; 

			function winnerCheck(){
				if (self.tictactoeBoard[0].playerOne === true && self.tictactoeBoard[1].playerOne === true && self.tictactoeBoard[2].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 
				   (self.tictactoeBoard[3].playerOne === true && self.tictactoeBoard[4].playerOne === true && self.tictactoeBoard[5].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[6].playerOne === true && self.tictactoeBoard[7].playerOne === true && self.tictactoeBoard[8].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[0].playerOne === true && self.tictactoeBoard[3].playerOne === true && self.tictactoeBoard[6].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[1].playerOne === true && self.tictactoeBoard[4].playerOne === true && self.tictactoeBoard[7].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[2].playerOne === true && self.tictactoeBoard[5].playerOne === true && self.tictactoeBoard[8].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[0].playerOne === true && self.tictactoeBoard[4].playerOne === true && self.tictactoeBoard[8].playerOne === true){
					winner = "one";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[6].playerOne === true && self.tictactoeBoard[4].playerOne === true && self.tictactoeBoard[2].playerOne === true){
					winner = "one";
					console.log(winner);
				}


				if (self.tictactoeBoard[0].playerTwo === true && self.tictactoeBoard[1].playerTwo === true && self.tictactoeBoard[2].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 
				   (self.tictactoeBoard[3].playerTwo === true && self.tictactoeBoard[4].playerTwo === true && self.tictactoeBoard[5].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[6].playerTwo === true && self.tictactoeBoard[7].playerTwo === true && self.tictactoeBoard[8].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[0].playerTwo === true && self.tictactoeBoard[3].playerTwo === true && self.tictactoeBoard[6].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[1].playerTwo === true && self.tictactoeBoard[4].playerTwo === true && self.tictactoeBoard[7].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[2].playerTwo === true && self.tictactoeBoard[5].playerTwo === true && self.tictactoeBoard[8].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[0].playerTwo === true && self.tictactoeBoard[4].playerTwo === true && self.tictactoeBoard[8].playerTwo === true){
					winner = "two";
					console.log(winner);
				}
				if 	
					(self.tictactoeBoard[6].playerTwo === true && self.tictactoeBoard[4].playerTwo === true && self.tictactoeBoard[2].playerTwo === true){
					winner = "two";
					console.log(winner);
				}

				if ((self.tictactoeBoard[0].hasPlayer === true) &&
					(self.tictactoeBoard[1].hasPlayer === true) &&
					(self.tictactoeBoard[2].hasPlayer === true) &&
					(self.tictactoeBoard[3].hasPlayer === true) &&
					(self.tictactoeBoard[4].hasPlayer === true) &&
					(self.tictactoeBoard[5].hasPlayer === true) &&
					(self.tictactoeBoard[6].hasPlayer === true) && 
					(self.tictactoeBoard[7].hasPlayer === true) &&
					(self.tictactoeBoard[8].hasPlayer === true) &&
					(winner !== "one") &&
					(winner !== "two")){
					winner = "cat";
					console.log(winner);
				}
			} //close winner function

}; //close TictactoeController	


