"use strict";

function Game(canvas){
  this.player = null; //null weil sonst variable gar nicht da wäre
  this.enemies = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
};


Game.prototype.startLoop = function(){

  this.player = new Player(this.canvas);
  const loop = () => { //setInterval setTimeout und requestAnimationFrame immer Arrow function nehmen: weil sie auch bei nested function sich auf parent function bezieht und this dann auf parent bezogen ist
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    console.log(this.player.direction);
    
    window.requestAnimationFrame(loop);

  }
  window.requestAnimationFrame(loop);
}



Game.prototype.clearCanvas = function(){
  this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height)
};



Game.prototype.updateCanvas = function(){
  this.player.update();
};



Game.prototype.drawCanvas = function(){
  this.player.draw();
};