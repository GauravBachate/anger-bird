class pig {
    constructor (x,y,width,height){
        var option = {
        restituition : 1.1,
        friction : 1,
        density : 1.2
        }
        this.body = Bodies.rectangle (x,y,width,height,option)

        this.width = width 
        this.height = height
     World.add (world,this.body)
    }
    display (){
    push ()
    translate (this.body.position.x,this.body.position.y)
    rotate (this.body.angle)
    rectMode (CENTER)
    rect (0,0,this.width,this.height)
    pop ()
    }
}