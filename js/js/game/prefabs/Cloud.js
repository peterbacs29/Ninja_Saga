var Cloud = function(game, x, y, key, frame){
  key = 'cloud';
  Phaser.Sprite.call(this, game, x, y, key, frame);

  this.scale.setTo(0.5);
  this.anchor.setTo(0.5);

  this.game.physics.arcade.enableBody(this);
  this.body.allowGravity = false;

  this.events.onRevived.add(this.onRevived, this)
};
Cloud.prototype = Object.create(Phaser.Sprite.prototype);
Cloud.prototype.constructor = Cloud;

Cloud.prototype.onRevived = function(){
  this.game.add.tween(this).to({y: this.y}, 0, Phaser.Easing.Linear.NONE, true, 0, Infinity, true);

  this.body.velocity.x = -100;

};
