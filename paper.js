class paper
{
    constructor()
    {
        var options={
            restitution:0.1,
            friction:0.3,
            density:1.2

        }
        this.body=Bodies.circle(100,100,20,options)
        this.x=100
        this.y=650
        this.radius=20
        World.add(world,this.body)
    }

    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        fill("magenta")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}