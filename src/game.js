class Ship {
    constructor(name, size){
        this.name = name;
        this.size = size;
        this.hitsRemaining = size;
        this.positions = [] // To store the ship's positions on the grid.
    }

    setPosition(positions) {
        this.positions = positions;
    }

    hit(){
        if(this.hitsRemaining > 0) {
            this.hitsRemaining -= 1;
            console.log(`${this.name} was hit`);
        }
    }

    isDestroyed(){
        return this.hitsRemaining === 0;
    }
}

module.exports = Ship; 