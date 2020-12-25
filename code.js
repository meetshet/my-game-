var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1f545d2c-02b9-44b7-acdc-c78be1e35ccb","a749105a-a64c-43f8-940d-e25829d14723","9b1481f7-220a-4c82-8dd9-2066da888ff6","15235325-3727-45f0-a727-fdf6493926ce","c2551b9d-bf17-4dd4-9854-c94ffce7a69b","72d55aa0-3ae3-4184-9021-436d9a468d03"],"propsByKey":{"1f545d2c-02b9-44b7-acdc-c78be1e35ccb":{"name":"rocket","sourceUrl":"assets/v3/animations/mGYja0i9NHIGpqlPewh9FCLW9064PrESaWGfaWdLtVQ/1f545d2c-02b9-44b7-acdc-c78be1e35ccb.png","frameSize":{"x":97,"y":66},"frameCount":1,"looping":true,"frameDelay":4,"version":"St8NA3EAY0V8HpBr7QVtN9dCSEoKuVJB","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":66},"rootRelativePath":"assets/v3/animations/mGYja0i9NHIGpqlPewh9FCLW9064PrESaWGfaWdLtVQ/1f545d2c-02b9-44b7-acdc-c78be1e35ccb.png"},"a749105a-a64c-43f8-940d-e25829d14723":{"name":"ufo","sourceUrl":"assets/v3/animations/mGYja0i9NHIGpqlPewh9FCLW9064PrESaWGfaWdLtVQ/a749105a-a64c-43f8-940d-e25829d14723.png","frameSize":{"x":464,"y":267},"frameCount":1,"looping":true,"frameDelay":4,"version":"7IBzcQgMkBOrJRO7R8V1MUo1mf.wT0B1","loadedFromSource":true,"saved":true,"sourceSize":{"x":464,"y":267},"rootRelativePath":"assets/v3/animations/mGYja0i9NHIGpqlPewh9FCLW9064PrESaWGfaWdLtVQ/a749105a-a64c-43f8-940d-e25829d14723.png"},"9b1481f7-220a-4c82-8dd9-2066da888ff6":{"name":"meteor","sourceUrl":"assets/v3/animations/mGYja0i9NHIGpqlPewh9FCLW9064PrESaWGfaWdLtVQ/9b1481f7-220a-4c82-8dd9-2066da888ff6.png","frameSize":{"x":234,"y":205},"frameCount":1,"looping":true,"frameDelay":4,"version":"x4wQ71CWOvwe5DAe6tz.vpDCIkbhWhX9","loadedFromSource":true,"saved":true,"sourceSize":{"x":234,"y":205},"rootRelativePath":"assets/v3/animations/mGYja0i9NHIGpqlPewh9FCLW9064PrESaWGfaWdLtVQ/9b1481f7-220a-4c82-8dd9-2066da888ff6.png"},"15235325-3727-45f0-a727-fdf6493926ce":{"name":"space","sourceUrl":null,"frameSize":{"x":300,"y":216},"frameCount":1,"looping":true,"frameDelay":12,"version":"kefUJ6y.ZkLgVyLoufXNtZ0qopxDCG_7","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":216},"rootRelativePath":"assets/15235325-3727-45f0-a727-fdf6493926ce.png"},"c2551b9d-bf17-4dd4-9854-c94ffce7a69b":{"name":"rocket_explosion-removebg-preview.png_1","sourceUrl":"assets/v3/animations/Qrd76HO_6vyBBBQkNiP_1z2haMY2Fouq28tO48EFzEE/c2551b9d-bf17-4dd4-9854-c94ffce7a69b.png","frameSize":{"x":101,"y":91},"frameCount":1,"looping":true,"frameDelay":4,"version":"U8xySS5yKa85XQnHVeDw8jE2PN36K8Zy","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":91},"rootRelativePath":"assets/v3/animations/Qrd76HO_6vyBBBQkNiP_1z2haMY2Fouq28tO48EFzEE/c2551b9d-bf17-4dd4-9854-c94ffce7a69b.png"},"72d55aa0-3ae3-4184-9021-436d9a468d03":{"name":"game_over-removebg-preview.png_1","sourceUrl":null,"frameSize":{"x":481,"y":69},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lgad8yWnVVkxtfcD3tgiQMI4avpJA6ot","loadedFromSource":true,"saved":true,"sourceSize":{"x":481,"y":69},"rootRelativePath":"assets/72d55aa0-3ae3-4184-9021-436d9a468d03.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,200,400,400);
bg.scale=2;
bg.setAnimation("space");
var rocket=createSprite(25,250,10,10);
rocket.setAnimation("rocket");
rocket.setCollider("circle",0,0,20);
var PLAY = 1;
var END = 0;
var gameState=PLAY
var meteorGroup=createGroup();
var ufoGroup=createGroup();
var gameOver=createSprite(200,200,30,30);
gameOver.scale=0.7;
gameOver.setAnimation("game_over-removebg-preview.png_1");
gameOver.visible=false;
var count = 0;
function draw(){
  
  if(gameState===PLAY){
    
     count =count + Math.round(World.frameRate/60);
     
    
  
  if(keyDown("UP_ARROW")){
    rocket.velocityY=-4;
    rocket.velocityX=0;
  }
  if(keyDown("DOWN_ARROW")){
    rocket.velocityY=4;
    rocket.velocityX=0;
  }
  if(keyDown("LEFT_ARROW")){
    rocket.velocityX=-4;
    rocket.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    rocket.velocityY=0
    rocket.velocityX=4;
  }
   createEdgeSprites();
    rocket.bounceOff(edges);
  
  ufos();
  meteors();
  if(meteorGroup.isTouching(rocket)||ufoGroup.isTouching(rocket)){
    playSound("assets/category_explosion/retro_game_classic_explosion_1.mp3");
 gameState=END;
  }
  }
  else if(gameState===END){
rocket.velocityX=0;
rocket.velocityY=0;
meteorGroup.destroyEach();
ufoGroup.destroyEach();
rocket.setAnimation("rocket_explosion-removebg-preview.png_1");
gameOver.visible=true;

}
  drawSprites();
  textSize(25);
  fill ("yellow");
  text("use arrow keys to move ",30,30);
  text("Score: "+ count, 250, 100);
}
function meteors (){
  if(World.frameCount % 100 === 0){
    var meteor=createSprite(randomNumber(250,400),10,10,10);
    meteor.scale=0.5;
    meteor.setAnimation("meteor");
    meteor.velocityX=-2;
    meteor.velocityY=3;
    meteor.setCollider("circle",0,0,70)
    meteorGroup.add(meteor);
  }
}
function ufos (){
  if(World.frameCount % 200 === 0){
    var ufo=createSprite(400,randomNumber(0,395),10,10);
    ufo.scale=0.2;
    ufo.setAnimation("ufo");
    ufo.velocityX=-2;
    ufoGroup.add(ufo);
  
    
  }
}
function secondLevel(){
  
}
function thirdLevel(){
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
