"use strict";

function main (){
  
  const mainElement = document.querySelector("main");
  function buildDom(html){
    mainElement.innerHTML = html;
    return mainElement;
  }

  function buildSplashScreen(){
    const splashScreen = buildDom(`
    <section>
    <h1>Eternal Enemies</h1>
    <button class="start-button">Start</button>
    </section>
    `);

    const startButton = document.querySelector(".start-button");

    startButton.addEventListener("click", buildGameScreen);
    }
  




  function buildGameScreen(){
    const splashScreen = buildDom(`
    <section class="game-container">
    <canvas></canvas>
    </section>
    `);

    const gameContainerElement = document.querySelector(".game-container")

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    console.log(width, height);

    const canvasElement= document.querySelector("canvas");

    canvasElement.setAttribute("width", width);
    canvasElement.setAttribute("height", height);



    const game = new Game(canvasElement);
    game.startLoop();


    document.addEventListener("keydown", function(){
      if (event.keyCode === 38){
        game.player.setDirection(-1);
      }
      else if (event.keyCode === 40){
        game.player.setDirection(1);
      }
    })

    document.addEventListener("keyup", function(event){
      if (event.keyCode === 38 || event.keyCode === 40){
        game.player.setDirection(0);
      }
    })
  }






  function buildGameOverScreen(){
    const gameOverScreen = buildDom(`
    <section>
    <h1>Game over</h1>
    <button class="restart-button">Restart</button>
    </section>
    `)

    const restartButton = document.querySelector(".restart-button");
    restartButton.addEventListener("click", buildGameScreen);
  }

buildSplashScreen();
};

window.addEventListener("load", main); // main wird geladen bevor alles andere lädt -> aicherer zugriff