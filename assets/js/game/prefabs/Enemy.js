var Enemy = function(game, x, y, key, frame){
  key = 'tree';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(0.5);
  this.anchor.setTo(0.5);

  this.animations.add('walk');

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;

  this.events.onRevived.add(this.onRevived, this)
};
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.onRevived = function(){
  this.game.add.tween(this).to({y: this.y}, 0, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

  this.body.velocity.x = -100;
  this.animations.play('walk', 5, true);
};
