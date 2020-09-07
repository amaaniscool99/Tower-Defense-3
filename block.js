class Block extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    
    Matter.Body.setAngle(this.body, angle);
  }

  display(){
    console.log(this.body.speed);
    
    if(this.body.speed<5){
    super.display();
    
    }
    
    else{
      World.remove(world,this.body);
      push()
      this.visibility = this.visibility-5;
      tint(255,this.visibility);
      pop()
    
    }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }

};
