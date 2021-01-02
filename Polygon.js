class Polygon   {                

    constructor(x,y,r){              
        var option=  {                         
    
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:0.2
            
        }
        
    this.x=x;
    this.y=y;
    this.r=r;
    polygonobj = Bodies.circle(50,200,20);
    this.image=loadImage("polygon.png");
    World.add(world,this.body);
    
    
     slingshot = new Slingshot(this.body,{x:100,y:200});
    
    
    }
    display(){                                          

var polygon=this.body.position;
push();
ellipseMode(RADIUS);
strokeWeight(3)
stroke("white");
fill("pink");
ellipse(0,0,this.r,this.r);
imageMode(CENTER);
image(polygon_img,polygon.position.x,polygon.position.y,40,40);
pop();
  }
}
