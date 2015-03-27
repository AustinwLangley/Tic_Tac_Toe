angular
    .module("tictactoeApp")
    .controller("TictactoeController", TictactoeController);

    function TictactoeController(){
        var self = this;

        self.tictactoeBoard = [ {space: " "},  {space: " "},  {space: " " },
						        {space: " " }, {space: " " }, {space: " " },
						        {space: " " }, {space: " " }, {space: " " }
      
    ];
      
}