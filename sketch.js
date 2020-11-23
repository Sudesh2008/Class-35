var database;
var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var form, player, game;




function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();

    game = new Game();

    game.getState();
    game.start();
    
   
}

function draw(){
    
    
    
}





//for referring to the database = .ref();
//for reading from the database - .on();
//for writing back to the database - .set();