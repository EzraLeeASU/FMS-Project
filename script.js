let speed = 7;
let x = 300;       //1st projectile
let x1 = 300;
let x2 = 600;     //2nd projectile
let x3 = 800;      //3rd projectile
let x4 = 700;
let x5 = 400;
let x6 = 600;
let y = 0;
let block = 1;
let score = 0;
let coolDown = 0;
let timer = 60;
let check = 0;
let speedE1 = 7;      //easy mode speed tiers
let speedE2 = 8;
let speedE3 = 9;
let speedM1 = 10;      //medium mode speed tiers
let speedM2 = 11;
let speedM3 = 12;
let speedH1 = 13;      //hard mode speed tiers
let speedH2 = 14.5;
let speedH3 = 16;
let move = 0;


function preload(){
  font = loadFont('Font/medieval.TTF');
  bg = loadImage('Background/game1.jpg');
  paper = loadImage('Texture/scroll1.png');
  fire = loadImage('Texture/fireA.png');
  fireB = loadImage('Texture/fireB.png');
  dragon = loadImage('Texture/dragonhead.png');
  gold = loadImage('Texture/gold.png');
  silver = loadImage('Texture/silver.png');
  bronze = loadImage('Texture/bronze.png');
  shield = loadImage('Texture/shield.png');
  burn2 = loadImage('Texture/burn.png');
  fake = loadImage('Texture/fake2.png');
  old = loadImage('Texture/oldpaper.png');
  
  firesfx1 = loadSound('Sound/Fire1.mp3');
  firesfx2 = loadSound('Sound/Fire2.mp3');
  firesfx3 = loadSound('Sound/Fire3.mp3');
  firesfx4 = loadSound('Sound/Fire4.mp3');
  blocksfx1 = loadSound('Sound/Block1.mp3');
  blocksfx2 = loadSound('Sound/Block2.mp3');
  blocksfx3 = loadSound('Sound/Block3.mp3');
  explodesfx = loadSound('Sound/Hit1.mp3');
  click = loadSound('Sound/Button1.mp3');
  music = loadSound('Sound/Music2.mp3');
  music2 = loadSound('Sound/Music4.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
  music2.loop();
  x = width / 2;
  
  //easy mode
  btnE();

  //medium mode
  btnM();
  
  //hard mode
  btnH();
  
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(80);        
  fill('#613700');
  text("Block the real fireballs!", width/2, 50);
  
  exit();          //remove?
}

function draw() {
  if (check == 1){
    easyMode();
  }
  else if (check == 2){
    mediumMode();
  }
  else if (check == 3){
    hardMode();
  }
}

// gold
function gameOver(){
  noLoop();
  clearAll();
  background(bg); 
  image(paper, width/2-250, height/2-325, 500,700);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(60);                   
  text('GAME OVER', width/2, height/2-150);      
  textSize(40);                   
  text('Score: ' + score, width/2, height/2-50);      
  image(gold, width/2-100, height/2-30, 200,200);
  retry();
  exit();  
}

//bronze
function gameOver0(){
  noLoop();
  clearAll();
  background(bg); 
  image(paper, width/2-250, height/2-325, 500,700);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(60);                   
  text('GAME OVER', width/2, height/2-150);     
  textSize(40);                   
  text('Score: ' + score, width/2, height/2-50);      
  image(bronze, width/2-100, height/2-30, 200,200);
  retry();
  exit();  
}

//silver
function gameOver1(){
  noLoop();
  clearAll();
  background(bg); 
  image(paper, width/2-250, height/2-325, 500,700);
  textAlign(CENTER, CENTER);
  textFont(font);
  textSize(60);                   
  text('GAME OVER', width/2, height/2-150);      
  textSize(40);                   
  text('Score: ' + score, width/2, height/2-50);      
  image(silver, width/2-100, height/2-30, 200,200);
  retry();
  exit();  
}

// resets the game and page
function retry(){
  image(old, width/2-70, height/2+200, 140, 50);
  let btnColor = color(255,255,255);
  noStroke();
  //noFill();
  btnColor.setAlpha(0);                  //transparent color
  textAlign(CENTER, CENTER);
  retryBtn = createButton("");
  retryBtn.style('background-color', btnColor);
  retryBtn.position(width/2-70, height/2+200);
  retryBtn.size(140, 50);
  stroke('black');
  strokeWeight(4);
  fill('#f7eee1');
  rect(width/2-70, height/2+200, 140, 50);
  image(old, width/2-70, height/2+200, 140, 50);
  fill('black');
  noStroke();
  textFont(font);
  textSize(35); 
  text('Retry?', width/2, height/2+220);
  retryBtn.mouseClicked(game1);
}

//exit to main menu
function exit(){
  textAlign(CENTER, CENTER);
  exitBtn = createButton("X");
  exitBtn.position(width-42, 0);
  exitBtn.size(25, 25);
  exitBtn.style('background-color', 'red');
  exitBtn.mouseClicked(mainMenu);
}

// opens main menu window
function mainMenu(){  
  noLoop();          
  click.play();  
  music2.stop();
  music.stop();
  window.close();    
  window.open('https://editor.p5js.org/EzraLee/full/GQ4TIZms7');
}

//function to clear everything that is on screen
function clearAll(){
  clear();
  removeElements();
  background(bg);
}

// function to reload the game
function game1(){
  click.play();
  window.open('https://editor.p5js.org/EzraLee/full/1_TMb4t2m');
}

function easy(){
  click.play();
  check = 1;
  clearAll();
  music.loop();
  firesfx1.play();
}

function medium(){
  click.play();
  check = 2;
  clearAll();
  music.loop();
  firesfx1.play();
}

function hard(){
  click.play();
  check = 3;
  clearAll();
  music.loop();
  firesfx1.play();
}

function btnE(){
  textFont(font);
  let btnColor = color(0,0,0);    //transparent
  btnColor.setAlpha(0);
  noStroke();
  easyBtn = createButton("");
  easyBtn.position(width/2-100, height/2-200);
  easyBtn.size(300, 100);
  easyBtn.style('font-size', '20px');
  easyBtn.style('background-color', btnColor);
  fill('black');
  textSize(50);
  rect(width/2-100, height/2-200, 300, 100);
  image(old, width/2-100, height/2-200, 300, 100);
  text("Easy", width/2-10, height/2-135);
  easyBtn.mouseClicked(easy);
}

function btnM(){
  textFont(font);
  let btnColor = color(0,0,0);    //transparent
  btnColor.setAlpha(0);
  noStroke();
  medBtn = createButton("");
  medBtn.position(width/2-100, height/2);
  medBtn.size(300, 100);
  medBtn.style('font-size', '20px');
  medBtn.style('background-color', btnColor);
  fill('black');
  textSize(50);
  rect(width/2-100, height/2, 300, 100);
  image(old, width/2-100, height/2, 300, 100);
  text("Medium", width/2-45, height/2+65);
  medBtn.mouseClicked(medium);
}

function btnH(){
  textFont(font);
  let btnColor = color(0,0,0);    //transparent
  btnColor.setAlpha(0);
  noStroke();
  hardBtn = createButton("");
  hardBtn.position(width/2-100, height/2+200);
  hardBtn.size(300, 100);
  hardBtn.style('font-size', '20px');
  hardBtn.style('background-color', btnColor);
  fill('black');
  textSize(50);
  rect(width/2-100, height/2+200, 300, 100);
  image(old, width/2-100, height/2+200, 300, 100);
  text("Hard", width/2-20, height/2+265);
  hardBtn.mouseClicked(hard);
}













//*************** EASY MODE***************************
function easyMode(){
  music2.stop();
  block = int(random(1,4));    //random block sound
  
  if (coolDown > 0) {
    background(bg);
    image(burn2, 300, 300, width-200,height-250);    // when player fails to catch
    firesfx1.stop();
    firesfx2.stop();
    firesfx3.stop();
    firesfx4.stop();
  } else {
    background(bg); 
    image(fireB,x2-32, y-90, 100,200);      //fake
    image(fireB,x3-32, y+20, 75,150);      //fake
    image(fireB,x4, y-55, 40,80);        //fake
    image(fireB,x5, y+30, 80,160);        //fake
    image(fireB,x6, y+20, 90,180);        //fake
    ellipse(x, y+50, 20, 20);            // FireA
    image(fire,x-32, y-29, 50,100);      // FireA image
    image(dragon, x-80, 0, 100,80);
    y = y + speed;
  }
  
  //catcher
  image(shield, mouseX - 20, height - 80, 160, 80);
  
  fill(0);
  textAlign(CENTER, CENTER);
  // SCORE
  textSize(40);
  textFont(font);
  text("Score", 75, 25);
  // SCORE value
  textSize(40);
  text(score, 75, 50);
  
  //TIMER
  textSize(40);
  text("Timer", 75, 100);
  // Timer value
  textSize(40);
  text(timer, 75, 125);
  
  //TIMER calculation
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
    if (timer > 30)          //adjust speed of fire sound
      firesfx1.play();
    else if (timer <= 30 && timer > 10)
      firesfx2.play();
    else if (timer <= 10 && timer > 5)
      firesfx3.play();
    else if (timer <= 5 && timer > 0)
      firesfx4.play();
  }
  if (timer == 0){      // check points and give rewards accordingly
    firesfx1.stop();
    firesfx2.stop();
    firesfx3.stop();
    firesfx4.stop();
    music.stop();
    blocksfx1.stop();
    blocksfx2.stop();
    blocksfx3.stop();
    explodesfx.stop();
    
    if (score <= 10)
      gameOver0();
    else if (score > 10 && score < 50) 
      gameOver1();
    else if (score >= 50)
      gameOver();
  }
  
  // speed up the projectile based on amount of time left
  if (timer > 30)
    speed = speedE1;
  else if (timer <= 30 && timer > 10)
    speed = speedE2;
  else if (timer <= 10)
    speed = speedE3;
  
  // If player fails to catch, give them a second to think
  if (coolDown > 0) {
    coolDown--;
    return;
  }
  //80, 40
  if (y > height -150 && x > mouseX - 80 && x < mouseX + 80){    //if it collides
    y = -20;
    score += 1;
    if (block == 1)
      blocksfx1.play();
    else if (block == 2)
      blocksfx2.play();
    else if (block == 3)
      blocksfx3.play();
  } else if (y > height) {  //fail to catch
    coolDown = 30;
    y = -20;
    score -= 1;           // deduct points
    explodesfx.play();  //explode sfx plays when fail to catch
    if (score < 0)       // prevents score from being less than 0
      score = 0;    
  }
  if (y == -20) {
    x = random(width);          // gives projectile 1 a random position
    x1 = random(width);         // gives fireB a random pos
    x2 = random(width);         // gives projectile 2 a random position
    x3 = random(width);         // gives projectile 3 a random position
    x4 = random(width);         // gives projectile 4 a random position
    x5 = random(width);         // gives projectile 5 a random position
    x6 = random(width);         // gives projectile 6 a random position
    if (x - x2 <= 50 || x - x3 <= 50)
      x = x + 50;
    else if (x - x2 >= -50 || x - x3 >= -50)
      x = x -50;
  }
}



//*************** MEDIUM MODE***************************
function mediumMode(){
    music2.stop();
    block = int(random(1,4));    //random block sound
  
  if (coolDown > 0) {
    background(bg);
    image(burn2, 300, 300, width-200,height-250);    // when player fails to catch
    firesfx1.stop();
    firesfx2.stop();
    firesfx3.stop();
    firesfx4.stop();
  } else {
    background(bg); 
    image(fake,x2-32, y-90, 100,200);      //fake
    image(fake,x3-32, y+20, 75,150);      //fake
    image(fake,x4, y-55, 40,80);        //fake
    image(fake,x5, y+30, 80,160);        //fake
    image(fake,x6, y+20, 90,180);        //fake
    ellipse(x, y+50, 20, 20);            // REAL projectile
    image(fire,x-32, y-29, 50,100);      // REAL fireball
    image(dragon, x-80, 0, 100,80);
    y = y + speed;
  }
  
  //catcher
  image(shield, mouseX - 20, height - 80, 160, 80);
  
  fill(0);
  textAlign(CENTER, CENTER);
  // SCORE
  textSize(40);
  textFont(font);
  text("Score", 75, 25);
  // SCORE value
  textSize(40);
  text(score, 75, 50);
  
  //TIMER
  textSize(40);
  text("Timer", 75, 100);
  // Timer value
  textSize(40);
  text(timer, 75, 125);
  
  //TIMER calculation
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
    if (timer > 30)          //adjust speed of fire sound
      firesfx1.play();
    else if (timer <= 30 && timer > 10)
      firesfx2.play();
    else if (timer <= 10 && timer > 5)
      firesfx3.play();
    else if (timer <= 5 && timer > 0)
      firesfx4.play();
  }
  if (timer == 0){      // check points and give rewards accordingly
    firesfx1.stop();
    firesfx2.stop();
    firesfx3.stop();
    firesfx4.stop();
    music.stop();
    blocksfx1.stop();
    blocksfx2.stop();
    blocksfx3.stop();
    explodesfx.stop();
    
    if (score <= 10)
      gameOver0();
    else if (score > 10 && score < 50) 
      gameOver1();
    else if (score >= 50)
      gameOver();
  }
  
  // speed up the projectile based on amount of time left
  if (timer > 30)
    speed = speedM1;
  else if (timer <= 30 && timer > 10)
    speed = speedM2;
  else if (timer <= 10)
    speed = speedM3;
  
  // If player fails to catch, give them a second to think
  if (coolDown > 0) {
    coolDown--;
    return;
  }
  //80, 40
  if (y > height -150 && x > mouseX - 80 && x < mouseX + 80){    //if it collides
    y = -20;
    score += 1;
    if (block == 1)
      blocksfx1.play();
    else if (block == 2)
      blocksfx2.play();
    else if (block == 3)
      blocksfx3.play();
  } else if (y > height) {  //fail to catch
    coolDown = 30;
    y = -20;
    score -= 2;           // deduct points
    explodesfx.play();   //explode sfx plays when fail to catch
    if (score < 0)       // prevents score from being less than 0
      score = 0;    
  }
  if (y == -20) {
    x = random(width);          // gives projectile 1 a random position
    x2 = random(width);         // gives projectile 2 a random position
    x3 = random(width);         // gives projectile 3 a random position
    x4 = random(width);         // gives projectile 4 a random position
    x5 = random(width);         // gives projectile 5 a random position
    x6 = random(width);         // gives projectile 6 a random position
    if (x - x2 <= 50 || x - x3 <= 50)
      x = x + 50;
    else if (x - x2 >= -50 || x - x3 >= -50)
      x = x -50;
  }
}

//*************** HARD MODE***************************
function hardMode(){
    music2.stop();
    block = int(random(1,4));    //random block sound
  
  if (coolDown > 0) {
    background(bg);
    image(burn2, 300, 300, width-200,height-250);    // when player fails to catch
    firesfx1.stop();
    firesfx2.stop();
    firesfx3.stop();
    firesfx4.stop();
  } else {
    background(bg); 
    image(fire,x2-32, y-90, 100,200);      //fake
    image(fire,x3-32, y+20, 75,150);      //fake
    image(fire,x4, y-55, 40,80);        //fake
    image(fire,x5, y+30, 80,160);        //fake
    image(fire,x6, y+20, 90,180);        //fake
    ellipse(x, y+50, 20, 20);            // REAL projectile
    image(fire,x-32, y-29, 50,100);      // REAL fireball
    image(dragon, x-80, 0, 100,80);
    y = y + speed;
  }
  
  //catcher
  image(shield, mouseX - 20, height - 80, 160, 80);
  
  fill(0);
  textAlign(CENTER, CENTER);
  // SCORE
  textSize(40);
  textFont(font);
  text("Score", 75, 25);
  // SCORE value
  textSize(40);
  text(score, 75, 50);
  
  //TIMER
  textSize(40);
  text("Timer", 75, 100);
  // Timer value
  textSize(40);
  text(timer, 75, 125);
  
  //TIMER calculation
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
    if (timer > 30)          //adjust speed of fire sound
      firesfx1.play();
    else if (timer <= 30 && timer > 10)
      firesfx2.play();
    else if (timer <= 10 && timer > 5)
      firesfx3.play();
    else if (timer <= 5 && timer > 0)
      firesfx4.play();
  }
  if (timer == 0){      // check points and give rewards accordingly
    firesfx1.stop();
    firesfx2.stop();
    firesfx3.stop();
    firesfx4.stop();
    music.stop();
    blocksfx1.stop();
    blocksfx2.stop();
    blocksfx3.stop();
    explodesfx.stop();
    
    if (score <= 10)
      gameOver0();
    else if (score > 10 && score < 50) 
      gameOver1();
    else if (score >= 50)
      gameOver();
  }
  
  // speed up the projectile based on amount of time left
  if (timer > 30)
    speed = speedH1;
  else if (timer <= 30 && timer > 10)
    speed = speedH2;
  else if (timer <= 10)
    speed = speedH3;
  
  // If player fails to catch, give them a second to think
  if (coolDown > 0) {
    coolDown--;
    return;
  }
  //80, 40
  if (y > height -150 && x > mouseX - 80 && x < mouseX + 80){    //if it collides
    y = -20;
    score += 1;
    if (block == 1)
      blocksfx1.play();
    else if (block == 2)
      blocksfx2.play();
    else if (block == 3)
      blocksfx3.play();
  } else if (y > height) {  //fail to catch
    coolDown = 30;
    y = -20;
    score -= 5;           // deduct points
    explodesfx.play();   //explode sfx plays when fail to catch
    if (score < 0)       // prevents score from being less than 0
      score = 0;    
  }
  if (y == -20) {
    x = random(width);          // gives projectile 1 a random position
    x2 = random(width);         // gives projectile 2 a random position
    x3 = random(width);         // gives projectile 3 a random position
    x4 = random(width);         // gives projectile 4 a random position
    x5 = random(width);         // gives projectile 5 a random position
    x6 = random(width);         // gives projectile 6 a random position
    if (x - x2 <= 50 || x - x3 <= 50)
      x = x + 50;
    else if (x - x2 >= -50 || x - x3 >= -50)
      x = x -50;
  }
}

