angular
    .module("tictactoeApp")
    .controller("TictactoeController", TictactoeController);

    function TictactoeController(){
        var self = this;
        var playerTurn = "one";

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
					playerTurn = "two";
					return playerTurn;
				}
			};
			function playerTwoTurn($index){
				if (self.tictactoeBoard[$index].hasPlayer === false){
					self.tictactoeBoard[$index].image= "./Tic_Tac_Toe_Images/o.png" 
					self.tictactoeBoard[$index].hasPlayer = true;
					playerTurn = "one"
					return playerTurn;
				}			
			}; 

}; //close TictactoeController	
