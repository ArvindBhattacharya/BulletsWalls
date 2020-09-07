//Sketch.js|start|
Const world = Matter.World
Const engine = Matter.Engine
Const body = Matter.Body

Var speed,weight,Deformation;
Var bullet,wall;

Function setup(){
CreateCanvas(1600,400)
speed = random(30,52);
weight = random(223,321);
bullet = CreateSprite(50,200,50,50)
wall = CreateSprite(1500,200,random(22,83),height/2);
bullet.velocityX = speed;
}

Function draw(){
Damage = 0.5 * weight * speed / (wall.width * wall.width * wall.width)
If (damage < 10){
Wall.color = Color(255,0,0)
}
else{
Wall.color = Color(0,255,0)
}
}

bullet.display()
wall.display()
}
//Sketch.js|end|

