var Mygame=function(){};

Mygame.Boot= function(){};

Mygame.Boot.prototype={
	preload:function(){
		this.load.image('logo','assets/images/logo.png');
        this.load.image('preloadbar','assets/images/preloader-bar.png');

	},


	create:function(){

		this.game.stage.backgroundColor='555555';
        this.input.maxPointers=3;

        if(this.game.device.desktop){
            this.scale.pageAlignHorizontally=true;
        }else{
            this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth=650;
            this.scale.minheight=600;
            this.scale.maxWidth=2048;
            this.scale.maxheight=1536;
            this.scale.forceLandscape=true;
            this.scale.pageAlignHorizontally=true;
            this.scale.setScreenSize(true);

        }
        this.state.start('Preloader');

	},
};