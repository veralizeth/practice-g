const BattleshipGame = require('./src/game');
const Grid = require('./src/grid');
const Ship = require('./src/ship');

const ships = [
    new Ship('Destroyer', 2),
    new Ship('Submarine', 3)
]

// Set Possitions:
ships[0].setPosition([{ x: 1, y: 1 }, { x: 1, y: 2 }]);
ships[1].setPosition([{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }]);

const grid = new Grid(5);

const game = new BattleshipGame(grid, ships); 

game.starGame(); 