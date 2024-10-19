const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class BattleshipGame {
    constructor(grid, ships) {
        this.grid = grid; // Inject the grid object.
        this.ships = ships; // Inject the ships array.
        this.aliveShips = this.ships.length;
        this.placeShips();
    }

    placeShips() {
        this.ships.forEach(ship => this.grid.placeShip(ship));
    }

    handleHit(ship) {
        ship.hit(); // Reduce the remaining hits of the ship. 

        if (ship.isDestroyed()) {
            this.aliveShips -= 1;
            console.log(`${ship.name} is destroyed`);
        }
    }

    askForShot() {
        rl.question('Enter coordinates to fire (row, column): ', (input) => {
            const [row, col] = input.split(',').map(Number);

            if (row >= 0 && row < this.grid.size && col >= 0 && col < this.grid.size) {
                const ship = this.grid.fireShot(row, col);

                if (ship) {
                    this.handleHit(ship);
                }

                this.grid.printGrid();

                if (this.aliveShips > 0) {
                    this.askForShot();
                } else {
                    console.log('You sank all the ships! You win!');
                    rl.close();
                }
            } else {
                console.log('Invalid Input. Please enter valid coordinates');
                this.askForShot();
            }
        });
    }

    starGame(){
        console.log('Welcome to Battleship!');
        this.grid.printGrid();
        this.askForShot();
    }
}

module.exports = BattleshipGame; 
