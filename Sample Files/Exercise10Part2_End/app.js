/*For a possible game, set up the creation of an object that uses a prototype.  Use Object.create(), a constructor function, or a class, to create a game character object. Set up the prototype to have the following properties:
-speed (default value: 6)
-stregnth (default value: 8)
-hitpoints (default value 150)
-a method that determines damage per second and returns it. That is equal to speed * stregnth
Create one object providing values for speed and hitpoints. Let stregnth use default value. Then display damage per second*/

/*var gameCharacter = {
    speed: 6,
    stregnth: 8,
    hitpoints: 150,
    damagePerSec: function() {
        return this.speed * this.stregnth;
    }
};

var char1 = Object.create(gameCharacter);
char1.speed = 9;
char1.hitpoints = 205;

console.log(char1.damagePerSec());*/

function GameCharacter(speed, stregnth, hitpoints) {
    if (speed) {
        this.speed = speed;
    }
    if (stregnth) {
        this.stregnth = stregnth;
    }
    if (hitpoints) {
        this.hitpoints = hitpoints;
    }
}

GameCharacter.prototype.speed = 6;
GameCharacter.prototype.stregnth = 8;
GameCharacter.prototype.hitpoints = 150;
GameCharacter.prototype.damagePerSec = function() {
    return this.speed * this.stregnth;
};

var char1 = new GameCharacter(9,null,205);
console.log(char1.damagePerSec());

