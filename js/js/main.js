var game = new Phaser.Game(800, 500, Phaser.AUTO,'');

game.state.add('Boot',Mygame.Boot);
game.state.add('Preloader',Mygame.Preload);
game.state.add('MainMenu',Mygame.MainMenu);
game.state.add('Game',Mygame.Game);

game.state.start('Boot');
