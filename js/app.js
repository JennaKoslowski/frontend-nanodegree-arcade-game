// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
        //xpos
        //ypos
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //automated movement
        //move forward if on board
        //if not on board reset pos to start
    //push enemy into allEnemies array- maybe earlier or an outside thing- one by one (for loop)- this may create multiple of the same enemy to be in array at same time
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.render = function() {
    ctx
} 
/*function checkCollision() {
    if () //pos player 1 == pos player 2
    {

    }
    //else keep going- no need to write code
}*/
 
 class Hero {  
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sprite = 'images/char-princess-girl.png';}

   /* update: function();
        checkCollison();*/
   render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
   // handleInput: function();
       // recieve user input
}
 
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var allEnemies = [];
var player = player; //object

// Now instantiate your objects. (isn't that what the above lines are??)
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Hero();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
