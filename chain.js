class chain {

    constructor(bodyA,bodyB){
    var options={
    bodyA:bodyA,bodyB:bodyB,stiffness:0.3,length:10


    }
    this.chain=Constraint.create(options);
    World.add(world,this.chain);



    }

 display(){
   var PointA=this.chain.bodyA.position;
   var PointB=this.chain.bodyB.position;
   strokeWeight(8);
   line(PointA.x,PointA.y,PointB.x,PointB.y);







 }
    







    








}