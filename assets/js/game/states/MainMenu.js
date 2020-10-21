Mygame.MainMenu= function(){};

Mygame.MainMenu.prototype={

	create:function(){
  

               
        this.splash=this.add.sprite(this.game.world.centerX,this.game.world.centerY, 'logo');
                this.splash.anchor.setTo(0.5);

	},


	

	update: function(){
        if(this.game.input.activePointer.justPressed()){
            this.game.state.start('Game');
        };
    }
    


};