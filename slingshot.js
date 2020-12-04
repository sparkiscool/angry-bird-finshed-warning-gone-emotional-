class slingshot{
constructor(bodyA,pointB){




var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness:0.04,
    length: 5
}
this.sling1 = loadImage("sprites/sling1.png")
this.sling2 = loadImage("sprites/sling2.png")
this.sling3 = loadImage("sprites/sling3.png")
this.pointB = pointB;
this.sling = Constraint.create(options)
World.add(world,this.sling)


}
fly(){
    this.sling.bodyA = null
}
attatch(body){
    this.sling.bodyA = body
}
display(){

    
    image(this.sling1,200,20)
    image(this.sling2,170,20)
    if(this.sling.bodyA){
        var painA = this.sling.bodyA.position 
        var painB = this.pointB
    if(painA.x < 200){
        stroke(48,22,8)
        strokeWeight(8)
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
        line(this.sling.bodyA.position.x-20,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
        image(this.sling3,this.sling.bodyA.position.x-30,this.sling.bodyA.position.y-10,15,30)

    }
    else{
        stroke(48,22,8)
        strokeWeight(4)
        line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x-10,this.pointB.y)
        line(this.sling.bodyA.position.x+25,this.sling.bodyA.position.y,this.pointB.x+30,this.pointB.y)
        image(this.sling3,this.sling.bodyA.position.x+25,this.sling.bodyA.position.y-10,15,30)
    }

  
}
}
}

