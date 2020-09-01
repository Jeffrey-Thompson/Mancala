console.log('Javascript is working');

const playerOne = {
    score: 0,
    stones: 24,
    name: 'Player 1',
    store: {
        name: 'player1Store',
        owner: playerOne,
        numStones: 0,
        stones: [],
        $location: $('#player1-store')
    },
};

const playerTwo = {
    score: 0,
    stones: 24,
    name: 'Player 2',    
    store: {
        name: 'player2Store',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        $location: $('#player2-store')
    }
};

const pockets = {
    dropSequence: [],
    player1Pocket1: {
        name: 'player1Pocket1',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 1,
        //DOM location
        $location: $('#player1-pocket1'),
        //DOM location for opposite side of board
        $across: $('#player2-pocket6')
    },

    player1Pocket2: {
        name: 'player1Pocket2',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 2,
        $location: $('#player1-pocket2'),
        $across: $('#player2-pocket5')
    },

    player1Pocket3: {
        name: 'player1Pocket3',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 3,
        $location: $('#player1-pocket3'),
        $across: $('#player2-pocket4')
    },

    player1Pocket4: {
        name: 'player1Pocket4',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 4,
        $location: $('#player1-pocket4'),
        $across: $('#player2-pocket3')
    },

    player1Pocket5: {
        name: 'player1Pocket5',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 5,
        $location: $('#player1-pocket5'),
        $across: $('#player2-pocket2')
    },

    player1Pocket6: {
        name: 'player1Pocket6',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 6,
        $location: $('#player1-pocket6'),
        $across: $('#player2-pocket1')
    },

    player2Pocket1: {
        name: 'player2Pocket1',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 1,
        $location: $('#player2-pocket1'),
        $across: $('#player1-pocket6')
    },

    player2Pocket2: {
        name: 'player2Pocket2',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 2,
        $location: $('#player2-pocket2'),
        $across: $('#player1-pocket5')
    },

    player2Pocket3: {
        name: 'player2Pocket3',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 3,
        $location: $('#player2-pocket3'),
        $across: $('#player1-pocket4')
    },

    player2Pocket4: {
        name: 'player2Pocket4',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 4,
        $location: $('#player2-pocket4'),
        $across: $('#player1-pocket3')
    },

    player2Pocket5: {
        name: 'player2Pocket5',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 5,
        $location: $('#player2-pocket5'),
        $across: $('#player1-pocket2')
    },

    player2Pocket6: {
        name: 'player2Pocket6',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 1,
        $location: $('#player2-pocket6'),
        $across: $('#player1-pocket1')
    }
};

class Stone {
    constructor(idNum) {
        this.idNum = idNum;
        this.color = 'red';
        this.$location = null;
        this.shape = 'circle';
        this.class = 'stone';
    }
}

class Factory {
    constructor() {
        this.idNum = 0;
        this.color = 'red';
        this.$location = null;
        this.shape = 'circle';
        this.class = 'stone';
        this.stones = [];
    }
    makeStones() {
        console.log('making stones');
        for (let player = 1; player <= 2; player++) {        //Player loop
            for (let pocket = 1; pocket <= 6; pocket++) {    //Pocket loop
                const $ul = $('<ul />');
                for (let stone = 1; stone <= 4; stone++) {  //Stone loop
                    const $li = $('<li></li>');
                    const newStone = new Stone();
                    let currentTarget = "player"+player+"Pocket"+pocket;
                    console.log(currentTarget);
                    newStone.idNum = `${player}${pocket}${stone}`;
                    newStone.$location = $(`#player${player}-pocket${pocket}`);
                    pockets[currentTarget].stones.push(newStone);
                    pockets[currentTarget].numStones++;
                    $ul.append($li);
                }
                $(`#player${player}-pocket${pocket}`).append($ul)
            }
        }
    }
};

const stoneFactory = new Factory();

const game = {
    activePlayer: playerOne,
    passivePlayer: playerTwo,
    start() {
        console.log('game started');
        stoneFactory.makeStones();
        $('.player1-pockets').on('click', generateSequence);
        $('#player1-turn').removeClass('hidden');
    },
    scoreboard() {
        $('#player1-score').text(playerOne.score);
        $('#player2-score').text(playerTwo.score);
    },
    changePlayer() {

    },
    gameOver() {

    }
};

const generateSequence = function() {
    console.log('generating sequence');
    console.log(event);
    //TODO find how to make target = the pocket clicked on
    let remainingStones = pockets[target].stones;
    let fromStore = pockets[target].fromStore;
    const player = game.activePlayer;
    const opponent = game.passivePlayer;
    //while remainingStones > 0
    //test if remainingStones is less than fromStore
    //if true sequence is on players side only loop through remainingStones-- and build sequence and return dropStones(pockets.dropSequence)
    //if false loop through fromStore-- and build sequence to player store remainingStones--
    //add player store to sequence
    pockets.dropSequence.push(player.store);
    remainingStones--;
    //set fromStore to 6
    //test if remainingStones is less than fromStore
    //if true rest of sequence is on opponents side only loop through remainingStones-- and build sequence and return dropStones(pockets.dropSequence)
    //if false loop through fromStore-- and build sequence to player store remainingStones--
    //end while loop
}

$('#game-start').on('click', game.start);