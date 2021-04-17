class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
      
       
        this.sling = Constraint.create(options);
        this.pointB = pointB
        
        World.add(world, this.sling);
    }
    attach(body){this.SlingShot.bodyA=body}


    fly(){
        this.sling.bodyA = null;
    }

    display(){
      
        
        if(this.sling.bodyA){
            
          //  var pointB = this.pointB;
          //  push ();
          //  strokeWeight(4);
          ///  stroke("blue")
            // fill ("red")
          //   line (pointA.x,pointA.y,pointB.x,pointB.y)       
          //   imageMode (CENTER)
          //   image();
           
  

            }
            pop ();
           
    
        }
    }
    
