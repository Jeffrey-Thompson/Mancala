console.log('Javascript is working');

const playerOne = {
    score: 0,
    stones: 0,
    name: 'Player 1',
    store: {
        name: 'player1Store',
        numStones: 0,
        stones: [],
        $location: $('#player1-store')
    },
};

playerOne.store.owner = playerOne;

const playerTwo = {
    score: 0,
    stones: 0,
    name: 'Player 2',    
    store: {
        name: 'player2Store',
        numStones: 0,
        stones: [],
        $location: $('#player2-store')
    }
};

playerTwo.store.owner = playerTwo;

const pockets = {
    player1Pocket1: {
        name: 'player1Pocket1',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 1,
        //DOM location
        $location: $('#player1Pocket1'),
        //DOM location for opposite side of board
        $across: $('#player2Pocket6')
    },

    player1Pocket2: {
        name: 'player1Pocket2',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 2,
        $location: $('#player1Pocket2'),
        $across: $('#player2Pocket5')
    },

    player1Pocket3: {
        name: 'player1Pocket3',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 3,
        $location: $('#player1Pocket3'),
        $across: $('#player2Pocket4')
    },

    player1Pocket4: {
        name: 'player1Pocket4',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 4,
        $location: $('#player1Pocket4'),
        $across: $('#player2Pocket3')
    },

    player1Pocket5: {
        name: 'player1Pocket5',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 5,
        $location: $('#player1Pocket5'),
        $across: $('#player2Pocket2')
    },

    player1Pocket6: {
        name: 'player1Pocket6',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 6,
        $location: $('#player1Pocket6'),
        $across: $('#player2Pocket1')
    },

    player2Pocket1: {
        name: 'player2Pocket1',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 1,
        $location: $('#player2Pocket1'),
        $across: $('#player1Pocket6')
    },

    player2Pocket2: {
        name: 'player2Pocket2',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 2,
        $location: $('#player2Pocket2'),
        $across: $('#player1Pocket5')
    },

    player2Pocket3: {
        name: 'player2Pocket3',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 3,
        $location: $('#player2Pocket3'),
        $across: $('#player1Pocket4')
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
        $location: $('#player2Pocket5'),
        $across: $('#player1Pocket2')
    },

    player2Pocket6: {
        name: 'player2Pocket6',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 1,
        $location: $('#player2Pocket6'),
        $across: $('#player1Pocket1')
    }
};

let dropSequence =[];
playerOne.pocketOrder = [playerOne.store, pockets.player1Pocket1, pockets.player1Pocket2, pockets.player1Pocket3, pockets.player1Pocket4, pockets.player1Pocket5, pockets.player1Pocket6];
playerOne.opponentPocketOrder = [pockets.player2Pocket1, pockets.player2Pocket2, pockets.player2Pocket3, pockets.player2Pocket4, pockets.player2Pocket5, pockets.player2Pocket6];
playerOne.pocketOrder = [playerTwo.store, pockets.player2Pocket1, pockets.player2Pocket2, pockets.player2Pocket3, pockets.player2Pocket4, pockets.player2Pocket5, pockets.player2Pocket6];
playerOne.opponentPocketOrder = [pockets.player1Pocket1, pockets.player1Pocket2, pockets.player1Pocket3, pockets.player1Pocket4, pockets.player1Pocket5, pockets.player1Pocket6];

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
                    newStone.$location = $(`#player${player}Pocket${pocket}>ul>li:eq(${stone-1})`);
                    pockets[currentTarget].numStones++;
                    pockets[currentTarget].stones.push(newStone);
                    $ul.append($li);
                }
                $(`#player${player}Pocket${pocket}`).append($ul)
            }
        }
        playerOne.numStones = pockets.player1Pocket1.numStones+pockets.player1Pocket2.numStones+pockets.player1Pocket3.numStones+pockets.player1Pocket4.numStones+pockets.player1Pocket5.numStones+pockets.player1Pocket6.numStones;
        playerTwo.numStones = pockets.player2Pocket1.numStones+pockets.player2Pocket2.numStones+pockets.player2Pocket3.numStones+pockets.player2Pocket4.numStones+pockets.player2Pocket5.numStones+pockets.player2Pocket6.numStones;
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
        $('#player1-turn').text("Player 1: It's Your Turn!");
        $('#game-start').addClass('hidden');
    },
    scoreboard() {
        $('#player1-score').text(playerOne.score);
        $('#player2-score').text(playerTwo.score);
    },
    changePlayer() {
        console.log('changing players');
        if (playerOne.numStones === 0 || playerTwo.numStones === 0){
            return game.gameOver();
        }
        if (game.activePlayer === playerOne) {
            game.activePlayer = playerTwo;
            game.passivePlayer = playerOne;
            $('#player1-turn').text('');
            $('#player2-turn').text("Player 2: It's Your Turn!");
            $('#player1-pockets').off('click');
            $('player2-pockets').on('click', generateSequence);
            return;
        }
        if (game.activePlayer === playerTwo) {
            game.activePlayer = playerOne;
            game.passivePlayer = playerTwo;
            $('#player2-turn').text('');
            $('#player1-turn').text("Player 1: It's Your Turn!");
            $('#player2-pockets').off('click');
            $('player1-pockets').on('click', generateSequence);
            return;
        }
    },
    gameOver() {

    }
};

const generateSequence = function(event) {
    console.log('generating sequence');
    const curTarget = event.currentTarget.id;
    const target = pockets[curTarget];
    console.log(target);
    //TODO find how to make target = the pocket clicked on
    let remainingStones = target.stones.length;
    let fromStore = target.fromStore;
    const player = game.activePlayer;
    //while remainingStones > 0
    while (remainingStones > 0) {
        console.log('remainingStones' + remainingStones);
        console.log('fromStore' + fromStore);
        //loop to build sequence to drop stones and return dropSones(pockets.dropSequence)
            while (fromStore > 0 && remainingStones > 0) {
                fromStore--;
                remainingStones--;
                let currentPocket = player.pocketOrder[fromStore];
                //console.log(currentPocket);
                dropSequence.push(currentPocket);
                console.log(dropSequence);
            }
    //set fromStore to 6
        fromStore = 6;
        //loop to build sequence to drop stones and return dropSones(pockets.dropSequence)
            while (fromStore > 0 && remainingStones > 0) {
                fromStore--;
                remainingStones--;
                let currentPocket = player.opponentPocketOrder[fromStore];
                //console.log(currentPocket);
                dropSequence.push(currentPocket);
                console.log(dropSequence);
            }
    }
    return dropStones(dropSequence);
}

const dropStones = function(dropSequence) {
    console.log('dropping stones');
}

$('#game-start').on('click', game.start);