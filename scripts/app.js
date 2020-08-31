console.log('Javascript is working');

const playerOne = {
    score: 0,
    stones: 24,
    name: 'Player 1'
};

const playerTwo = {
    score: 0,
    stones: 24,
    name: 'Player 2'
};

const player1Pocket1 = {
    name: 'player1Pocket1',
    owner: playerOne,
    numStones: 0,
    stones: [],
    fromStore: 1,
    //DOM location
    $location: $('#player1-pocket1'),
    //DOM location for opposite side of board
    $across: $('#player2-pocket6')
};

const player1Pocket2 = {
    name: 'player1Pocket2',
    owner: playerOne,
    numStones: 0,
    stones: [],
    fromStore: 2,
    $location: $('#player1-pocket2'),
    $across: $('#player2-pocket5')
};

const player1Pocket3 = {
    name: 'player1Pocket3',
    owner: playerOne,
    numStones: 0,
    stones: [],
    fromStore: 3,
    $location: $('#player1-pocket3'),
    $across: $('#player2-pocket4')
};

const player1Pocket4 = {
    name: 'player1Pocket4',
    owner: playerOne,
    numStones: 0,
    stones: [],
    fromStore: 4,
    $location: $('#player1-pocket4'),
    $across: $('#player2-pocket3')
};

const player1Pocket5 = {
    name: 'player1Pocket5',
    owner: playerOne,
    numStones: 0,
    stones: [],
    fromStore: 5,
    $location: $('#player1-pocket5'),
    $across: $('#player2-pocket2')
};

const player1Pocket6 = {
    name: 'player1Pocket6',
    owner: playerOne,
    numStones: 0,
    stones: [],
    fromStore: 6,
    $location: $('#player1-pocket6'),
    $across: $('#player2-pocket1')
};

const player2Pocket1 = {
    name: 'player2Pocket1',
    owner: playerTwo,
    numStones: 0,
    stones: [],
    fromStore: 1,
    $location: $('#player2-pocket1')
};

const player2Pocket2 = {
    name: 'player2Pocket2',
    owner: playerTwo,
    numStones: 0,
    stones: [],
    fromStore: 2,
    $location: $('#player2-pocket2')
};

const player2Pocket3 = {
    name: 'player2Pocket3',
    owner: playerTwo,
    numStones: 0,
    stones: [],
    fromStore: 3,
    $location: $('#player2-pocket3')
};

const player2Pocket4 = {
    name: 'player2Pocket4',
    owner: playerTwo,
    numStones: 0,
    stones: [],
    fromStore: 4,
    $location: $('#player2-pocket4')
};

const player2Pocket5 = {
    name: 'player2Pocket5',
    owner: playerTwo,
    numStones: 0,
    stones: [],
    fromStore: 5,
    $location: $('#player2-pocket5')
};

const player2Pocket6 = {
    name: 'player2Pocket6',
    owner: playerTwo,
    numStones: 0,
    stones: [],
    fromStore: 1,
    $location: $('#player2-pocket6')
};

class Stones {
    constructor(number) {
        this.idNum = number;
        this.color = 'red';
        this.$location = null;
        this.shape = 'circle';
        this.class = 'stone';
    }
}

const game = {
    activePlayer: playerOne,
    passivePlayer: playerTwo,
    start() {

    },
    makeStones() {

    },
    scoreboard() {

    },
    changePlayer() {

    },
    gameOver() {

    }
};