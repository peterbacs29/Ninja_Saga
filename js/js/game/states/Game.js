Mygame.Game = function(){
	this.enemyRate = 2000;
 	this.enemyTimer =0;
 	this.cloudRate = 2000;
 	this.cloudTimer =0;
 	this.shootbulletTime=0;


};

Mygame.Game.prototype = {

	create: function(){

		this.dirt=this.game.add.tileSprite(0, this.game.height-73, this.game.width,73, 'dirt');
		



		this.player=this.add.sprite(100, this.game.height/2,'player');		
 	 	this.player.anchor.setTo(1);
   		this.player.scale.setTo(0.3);
   		this.game.physics.arcade.enableBody(this.player);
   		this.player.body.collideWorldBounds = true;

   		this.player.animations.add('left', [0,1,0]);

   		this.player.animations.add('right', [3,4,3]);
	
       

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		
   		this.game.physics.arcade.gravity.y = 500;

   		this.game.physics.arcade.enableBody(this.dirt);
		this.dirt.body.allowGravity = false;
	    this.dirt.body.immovable = true;

	    this.enemies = this.game.add.group();
	    this.clouds = this.game.add.group();

	    this.bullets = game.add.group();

	    // this.game.physics.arcade.enableBody(this.bullet);

        this.bullets.enableBody = true; //enable ang physics sa bullet along with the player
        //enable physics sa bullet
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(1, 'bullet');// how many bullet mugawas every press sa key
        this.bullets.callAll('events.onOutOfBounds.add', 'events.onOutOfBounds', this.resetBullet, this); //mg generate ug bullet kada press e call ang function na(resetBullet)
        this.bullets.setAll('checkWorldBounds', true); 

        this.left = game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.jump = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        

	    
		
	},
	update: function(){
		
		if (this.left.isDown){
			this.player.body.velocity.x +=4;
			this.player.animations.play('left',8);
			this.dirt.autoScroll(-50,0);
		
		}

		else if(this.right.isDown){
			this.player.body.velocity.x -=4;
			this.player.animations.play('right',8);
			this.dirt.autoScroll(+50,0);
		
		}
				
		else{
			this.player.body.velocity.x = 0;
			this.dirt.autoScroll(0,0);

		}
		if (this.jump.isDown){
			this.player.body.velocity.y = -300;
			
		}
		if(this.enemyTimer < this.game.time.now){
      		this.createEnemy();
     		this.enemyTimer = this.game.time.now + this.enemyRate;
  		}
  		if(this.cloudTimer < this.game.time.now){
      		this.createCloud();
     		this.cloudTimer = this.game.time.now + this.cloudRate;
  		}
  		if (this.spaceKey.isDown){
            this.fireBullet();


        }
	
		this.game.physics.arcade.collide(this.player, this.dirt, this.groundHit, null, this);

		this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyHit, null, this);

		this.game.physics.arcade.overlap(this.player, this.clouds, this.enemyHit, null, this);


		this.game.physics.arcade.overlap(this.enemies, this.bullets, null, this);
		


	},
	groundHit: function(player, dirt){
    	player.body.velocity.y = -10;
    },
    createEnemy: function(){
	    var x = this.game.width;
	    var y = this.game.height -120;

	    var enemy = this.enemies.getFirstExists(false);
	    if(!enemy){
	      enemy = new Enemy(this.game, 0, 0);
	      this.enemies.add(enemy);
	    }
	    enemy.reset(x,y);
	    enemy.revive();
  	},
  	createCloud: function(){
	    var a = this.game.width;
	    var b = this.game.rnd.integerInRange(50, this.game.world.height - 400);

	    var cloud = this.clouds.getFirstExists(false);
	    if(!cloud){
	      cloud= new Cloud(this.game, 0, 0);
	      this.clouds.add(cloud);
	    }
	    cloud.reset(a,b);
	    cloud.revive();
  	},
  	fireBullet:function(){ //recycle bullet and add to bullet group
        if (this.game.time.now > this.bulletTime){
        bullet = this.bullets.getFirstExists(false);

            if (bullet){
                bullet.reset(this.player.x - 20 , this.player.y ,'player','bullet'); // position sa bullet from player
                bullet.body.velocity.x =1000,0; //position of bullet ug ang velocity sa ground
            }
        }
    },
    resetBullet: function(bullet){
        bullet.kill();

    },
    enemyHit: function(player, enemy, cloud ){
     	player.kill();


     	this.game.add.bitmapText(80, 100, 'minecraftia', 'GAME OVER',100);
    }
    
  	


    
	


};