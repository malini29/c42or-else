class Drop(){
constructor{
    var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:1.2
			}
this.x=x;
this.y=y;
this.body=Bodies.circle(this.x, this.y, this.r/2, options)
}
if (this.rain.position.y > height) {
  Matter.Body.setPosition(this.rain,{x:random(0.400)y:random(0,400)})  
}
var maxDrops=100;
for (var i=0; i<maxDrops; i++) {
    drops.push(new createDrop(random(0,400), random(0,400)));
    
}
display()
	{
			var drop=this.body.position;		
			translate(stonepos.x, stonepos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			pop()
			
	}

}