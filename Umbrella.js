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