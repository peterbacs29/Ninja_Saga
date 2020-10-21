Mygame.Preload=function(){
    this.ready=false;
};

Mygame.Preload.prototype={
	preload: function(){
		this.splash=this.add.sprite(this.game.world.centerX,this.game.world.centerY, 'logo' );
		this.splash.anchor.setTo(0.5);

		this.preloadBar=this.add.sprite(this.game.world.centerX,this.game.world.centerY+130, 'preloadbar' );
    	this.preloadBar.anchor.setTo(0.5);

    	this.load.setPreloadSprite(this.preloadBar);

		this.load.image('dirt','assets/images/Dirt.png');


		this.load.spritesheet('player','assets/images/ninja5.png',195,200,5);
		this.load.spritesheet('tree','assets/images/tree.png',195,200,3);
		this.load.spritesheet('bullet','assets/images/shoot.png',195,200,2);
		this.load.spritesheet('cloud','assets/images/evilcloud.png',200,200);





		this.load.bitmapFont('minecraftia','assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml')


		this.load.onLoadComplete.add(this.onLoadComplete, this);

	},

	create: function(){
      this.preloadBar.cropEnable=false;
    },

    update: function(){
        if (this.ready === true) {
            this.state.start('MainMenu');
        }
    },

	onLoadComplete: function(){
		this.ready=true;



	},



};