'use strict';

import  util from 'util';
    
class Character {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
    }
    damage() {
      this.health_ = this.health_ - 10;
    };
    getHealth() {
      return this.health_;
    };

    toString() {
      return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
    };


};
      
    
class Player extends Character{
    constructor(x, y, name) {
      super(x, y);
      this.name = name;
    };

    move(dx, dy){
      this.x += dx;
      this.y += dy;
    };

    toString() {
      return "name: " + this.name + " " + super.toString();
    };
};


    //util.inherits(Player, Character);

    var x = process.argv[2];
    var y = process.argv[3];
    var name = process.argv[4];
    var character = new Character(+x, +y);
    character.damage();
    console.log(character.toString());
    var player = new Player(+x, +y, name);
    player.damage();
    player.move(7, 8);
    console.log(player.toString());
   

/*

✓ Submission results match expected
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    'use strict';
    
    class Character {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.health_ = 100;
      }
      damage() {
        this.health_ -= 10;
      }
      getHealth() {
        return this.health_;
      }
      toString() {
        return "x: " + this.x + " y: " + this.y + " health: " + this.health_;
      }
    }
    
    class Player extends Character {
      constructor(x, y, name) {
        super(x, y);
        this.name = name;
      }
      move(dx, dy) {
        this.x += dx;
        this.y += dy;
      }
      toString() {
        return "name: " + this.name + " " + super.toString();
      }
    }
    
    var x = process.argv[2];
    var y = process.argv[3];
    var name = process.argv[4];
    var character = new Character(+x, +y);
    character.damage();
    console.log(character.toString());
    var player = new Player(+x, +y, name);
    player.damage();
    player.move(7, 8);
    console.log(player.toString());

*/