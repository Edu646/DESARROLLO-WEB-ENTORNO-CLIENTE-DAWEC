class coche{
    constructor(model, milesgalon){
        this.model = model;
        this.milesgalon = milesgalon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank = gallons
    }

    drive(dist){
        let maxdist = this.tank * this.milesgalon;
        if(dist < maxdist){
            this.odometer = dist
            this.tank -= (dist/this.milesgalon)
        }
        else{
            this.odometer += maxdist
            this.tank = 0;
            return console.log("No tiene gaslolina")
        }
    }
}