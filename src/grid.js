class Grid {
    constructor(size) {
        this.size = size;
        this.grid = this.createGrid();
    }

    createGrid() {
        // "~" Represents water.
        return Array(this.size).fill(null).map(() => Array(this.size).fill('~'));
    }

    placeShip(ship) {
        ship.positions.forEach(pos => {
            this.grid[pos.x][pos.y] = ship;
        });
    }

    fireShot(x, y) {
        if (typeof this.grid[x][y] === 'object') {
            const ship = this.grid[x][y];
            this.grid[x][y] = 'X';
            console.log('Hit!');
            return ship;
        } else if (this.grid[x][y] === "~") {
            console.log('Miss!');
            this.grid[x][y] = 'O'
            return null;
        } else {
            console.log('You already fire here!');
            return null;
        }
    }

    printGrid() {
        console.log('This is your board:');
        this.grid.forEach(row => {
            console.log(row.map(cell => (typeof cell === 'object' ? '~' : cell)).join(' '));
        })
    }

}

module.exports = Grid;