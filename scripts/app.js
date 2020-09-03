console.log('Javascript is working');

const playerOne = {
    score: 0,
    stones: 0,
    name: 'Player 1',
    store: {
        name: 'player1Store',
        numStones: 0,
        stones: [],
        $location: '#player1-store>ul'
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
        $location: '#player2-store>ul'
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
        $location: '#player1Pocket1>ul',
        //DOM location for opposite side of board
        $across: '#player2Pocket6>ul'
    },

    player1Pocket2: {
        name: 'player1Pocket2',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 2,
        $location: '#player1Pocket2>ul',
        $across: '#player2Pocket5>ul'
    },

    player1Pocket3: {
        name: 'player1Pocket3',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 3,
        $location: '#player1Pocket3>ul',
        $across: '#player2Pocket4>ul'
    },

    player1Pocket4: {
        name: 'player1Pocket4',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 4,
        $location: '#player1Pocket4>ul',
        $across: '#player2Pocket3>ul'
    },

    player1Pocket5: {
        name: 'player1Pocket5',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 5,
        $location: '#player1Pocket5>ul',
        $across: '#player2Pocket2>ul'
    },

    player1Pocket6: {
        name: 'player1Pocket6',
        owner: playerOne,
        numStones: 0,
        stones: [],
        fromStore: 6,
        $location: '#player1Pocket6>ul',
        $across: '#player2Pocket1>ul'
    },

    player2Pocket1: {
        name: 'player2Pocket1',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 1,
        $location: '#player2Pocket1>ul',
        $across: '#player1Pocket6>ul'
    },

    player2Pocket2: {
        name: 'player2Pocket2',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 2,
        $location: '#player2Pocket2>ul',
        $across: '#player1Pocket5>ul'
    },

    player2Pocket3: {
        name: 'player2Pocket3',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 3,
        $location: '#player2Pocket3>ul',
        $across: '#player1Pocket4>ul'
    },

    player2Pocket4: {
        name: 'player2Pocket4',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 4,
        $location: '#player2Pocket4>ul',
        $across: '#player1Pocket3>ul'
    },

    player2Pocket5: {
        name: 'player2Pocket5',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 5,
        $location: '#player2Pocket5>ul',
        $across: '#player1Pocket2>ul'
    },

    player2Pocket6: {
        name: 'player2Pocket6',
        owner: playerTwo,
        numStones: 0,
        stones: [],
        fromStore: 6,
        $location: '#player2Pocket6>ul',
        $across: '#player1Pocket1>ul'
    }
};


let dropSequence =[];
playerOne.pocketOrder = [playerOne.store, pockets.player1Pocket1, pockets.player1Pocket2, pockets.player1Pocket3, pockets.player1Pocket4, pockets.player1Pocket5, pockets.player1Pocket6];
playerOne.opponentPocketOrder = [pockets.player2Pocket1, pockets.player2Pocket2, pockets.player2Pocket3, pockets.player2Pocket4, pockets.player2Pocket5, pockets.player2Pocket6];
playerTwo.pocketOrder = [playerTwo.store, pockets.player2Pocket1, pockets.player2Pocket2, pockets.player2Pocket3, pockets.player2Pocket4, pockets.player2Pocket5, pockets.player2Pocket6];
playerTwo.opponentPocketOrder = [pockets.player1Pocket1, pockets.player1Pocket2, pockets.player1Pocket3, pockets.player1Pocket4, pockets.player1Pocket5, pockets.player1Pocket6];
pockets.player1Pocket1.across = pockets.player2Pocket6;
pockets.player1Pocket2.across = pockets.player2Pocket5;
pockets.player1Pocket3.across = pockets.player2Pocket4;
pockets.player1Pocket4.across = pockets.player2Pocket3;
pockets.player1Pocket5.across = pockets.player2Pocket2;
pockets.player1Pocket6.across = pockets.player2Pocket1;
pockets.player2Pocket1.across = pockets.player1Pocket6;
pockets.player2Pocket2.across = pockets.player1Pocket5;
pockets.player2Pocket3.across = pockets.player1Pocket4;
pockets.player2Pocket4.across = pockets.player1Pocket3;
pockets.player2Pocket5.across = pockets.player1Pocket2;
pockets.player2Pocket6.across = pockets.player1Pocket1;


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
                    //console.log(currentTarget);
                    newStone.idNum = `${player}${pocket}${stone}`;
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
        $('.player-score-area').removeClass('hidden');
    },
    scoreboard() {
        console.log('changing score');
        $('#player1-score').text(playerOne.score);
        $('#player2-score').text(playerTwo.score);
    },
    changePlayer() {
        console.log('changing players');
        playerOne.numStones = pockets.player1Pocket1.numStones+pockets.player1Pocket2.numStones+pockets.player1Pocket3.numStones+pockets.player1Pocket4.numStones+pockets.player1Pocket5.numStones+pockets.player1Pocket6.numStones;
        playerTwo.numStones = pockets.player2Pocket1.numStones+pockets.player2Pocket2.numStones+pockets.player2Pocket3.numStones+pockets.player2Pocket4.numStones+pockets.player2Pocket5.numStones+pockets.player2Pocket6.numStones;
        if (playerOne.numStones === 0 || playerTwo.numStones === 0){
            return game.gameOver();
        }
        if (game.activePlayer === playerOne) {
            game.activePlayer = playerTwo;
            game.passivePlayer = playerOne;
            $('#player1-turn').text('');
            $('#player2-turn').text("Player 2: It's Your Turn!");
            $('.player1-pockets').off('click');
            $('.player2-pockets').on('click', generateSequence);
            //console.log(game.activePlayer);
            return;
        }
        if (game.activePlayer === playerTwo) {
            game.activePlayer = playerOne;
            game.passivePlayer = playerTwo;
            $('#player2-turn').text('');
            $('#player1-turn').text("Player 1: It's Your Turn!");
            $('.player2-pockets').off('click');
            $('.player1-pockets').on('click', generateSequence);
            //console.log(game.activePlayer);
            return;
        }
    },
    gameOver() {
        console.log('game over');
        $('#player2-turn').addClass('hidden');
        $('#player1-turn').addClass('hidden');
        $('#player-pocket-area').html('<div id = "game-over"><h3>Game Over</h3><h2 id ="winner"></h2><h3 id ="final-score"></h3>');
        $('#final-score').text(`Player 1: ${playerOne.score}\nPlayer 2: ${playerTwo.score}`);
        if (playerOne.score > playerTwo.score){
            $('#winner').text('Player 1 wins!');
        } else if (playerTwo.score > playerOne.score) {
            $('#winner').text('Player 2 wins!');
        } else {
            $('#winner').text("It's a tie. Play Again!");
        }
    }
};

const generateSequence = function(event) {
    console.log('generating sequence');
    const curTarget = event.currentTarget.id;
    const target = pockets[curTarget];
    //console.log(target);
    let remainingStones = target.stones.length;
    let fromStore = target.fromStore;
    const player = game.activePlayer;
    target.numStones = 0;
    let loopRounds = 0;
    //while remainingStones > 0
    while (remainingStones > 0) {
        if (loopRounds > 0) {
            console.log('reseting fromStore');
            fromStore = 7;
        }
        //console.log('remainingStones' + remainingStones);
        //console.log('fromStore' + fromStore);
        //loop to build sequence to drop stones and return dropSones(pockets.dropSequence)
            while (fromStore > 0 && remainingStones > 0) {
                fromStore--;
                remainingStones--;
                let currentPocket = player.pocketOrder[fromStore];
                //console.log(currentPocket);
                dropSequence.push(currentPocket);
                //console.log(dropSequence);
            }
        //set fromStore to 6
        fromStore = 6;
        //loop to build sequence to drop stones and return dropSones(pockets.dropSequence)
            while (fromStore > 0 && remainingStones > 0) {
                console.log("fromStore !== 0 && remainingStones > 0",fromStore !== 0 && remainingStones > 0);
                console.log("from store is not zero",fromStore !== 0,"remaining stones greater than zero", remainingStones >0);
                fromStore--;
                remainingStones--;
                let currentPocket = player.opponentPocketOrder[fromStore];
                //console.log(currentPocket);
                dropSequence.push(currentPocket);
                //console.log(dropSequence);
                console.log("from store",fromStore);
                console.log("remaining stones",remainingStones);
            }
        loopRounds++;
    }
    console.log(dropSequence);
    return dropStones(dropSequence , target);
}

const dropStones = function(dropSequence, target) {
    console.log('dropping stones');
    const player = game.activePlayer;
    let stoneArray = target.stones;
    if (stoneArray.length === 1) {
        console.log('skipping to last stone');
        //console.log(dropSequence);
        //checkStoneCount();
        return lastStone(dropSequence, target);
    }
    //for loop dropSequence pushing stoneArray
    for (let i = 0; i < stoneArray.length-1; i++) {
        let currentPocket = dropSequence[i];
        let stoneTarget = currentPocket.stones
        //stores DOM location to append to
        let $ul = $(currentPocket.$location);
        //console.log($ul);
        //store DOM location of list item
        let $li = $(`${target.$location}>li`).eq(0);
        //console.log($li);
        $($ul).append($li);
        stoneTarget.push(stoneArray[i]);
        currentPocket.numStones++;
        //checkStoneCount();        
        if (currentPocket.name === 'player1Store' || currentPocket.name === 'player2Store') {
            player.score++;
            //console.log(`Player 1 score: ${playerOne.score} Player 2 score: ${playerTwo.score}`);
            game.scoreboard();
        }
    }
    return lastStone(dropSequence, target);
}

const lastStone = function(sequence, target) {
    console.log('dropping the last stone...what will happen?');
    const finalPocket = sequence[sequence.length-1];
    const finalStone = target.stones[sequence.length-1];
    const stoneSpot = finalPocket.stones;
    const pocketName = finalPocket.name;
    const player = game.activePlayer;
    let owner = false;
    let empty = false;
    if (finalPocket.owner === player) {
        owner = true;
    }
    if (finalPocket.numStones === 0) {
        empty = true;
    }
    //console.log(owner);
    //console.log(empty);
    dropSequence = [];
    //console.log(dropSequence);
    //last stone in player1 store
    console.log(pocketName);
    if (pocketName === 'player1Store') {
        console.log('player 1 gets extra turn');
        stoneSpot.push(finalStone);
        let $ul = $(finalPocket.$location);
        let $li = $(`${target.$location}>li`).eq(0);
        $($ul).append($li);
        player.score++;
        player.store.numStones++;
        //console.log(`Player 1 score: ${playerOne.score} Player 2 score: ${playerTwo.score}`);
        game.scoreboard();
        $('#player1-turn').text('Play Again, Player 1!');
        target.stones = [];
        //checkStoneCount();
        playerOne.numStones = pockets.player1Pocket1.numStones+pockets.player1Pocket2.numStones+pockets.player1Pocket3.numStones+pockets.player1Pocket4.numStones+pockets.player1Pocket5.numStones+pockets.player1Pocket6.numStones;
        playerTwo.numStones = pockets.player2Pocket1.numStones+pockets.player2Pocket2.numStones+pockets.player2Pocket3.numStones+pockets.player2Pocket4.numStones+pockets.player2Pocket5.numStones+pockets.player2Pocket6.numStones;
        if (playerOne.numStones === 0 || playerTwo.numStones === 0){
            return game.gameOver();
        }   
        return
    }
    //last stone in player2 store
    else if (pocketName === 'player2Store') {
        console.log('player 2 gets extra turn');
        stoneSpot.push(finalStone);
        let $ul = $(finalPocket.$location);
        let $li = $(`${target.$location}>li`).eq(0);
        $($ul).append($li);
        player.score++;
        player.store.numStones++;
        //console.log(`Player 1 score: ${playerOne.score} Player 2 score: ${playerTwo.score}`);
        game.scoreboard();
        $('#player2-turn').text('Play Again, Player 2!');
        target.stones = [];
        //checkStoneCount();
        playerOne.numStones = pockets.player1Pocket1.numStones+pockets.player1Pocket2.numStones+pockets.player1Pocket3.numStones+pockets.player1Pocket4.numStones+pockets.player1Pocket5.numStones+pockets.player1Pocket6.numStones;
        playerTwo.numStones = pockets.player2Pocket1.numStones+pockets.player2Pocket2.numStones+pockets.player2Pocket3.numStones+pockets.player2Pocket4.numStones+pockets.player2Pocket5.numStones+pockets.player2Pocket6.numStones;
        if (playerOne.numStones === 0 || playerTwo.numStones === 0){
            return game.gameOver();
        }
        return
    }
    //last stone in empty pocket of active player
    else if (owner && empty) {
        console.log('capture chance');
        target.stones = [];
        return capture(finalPocket, finalStone, target);
    }
    //else
    else {
        console.log('nothing much');
        stoneSpot.push(finalStone);
        finalPocket.numStones++;
        let $ul = $(finalPocket.$location);
        let $li = $(`${target.$location}>li`).eq(0);
        $($ul).append($li);
        target.stones = [];
        //checkStoneCount();
        return game.changePlayer();
    }
}

const capture = function(finalPocket, finalStone, target) {
    console.log('trying to capture');
    const opponentPocket = finalPocket.across;
    const capturedStones = opponentPocket.stones;
    const player = game.activePlayer;
    const $storeul = $(player.store.$location);
    player.store.stones.push(finalStone);
    let $ul = $(player.store.$location);
    let $li = $(`${target.$location}>li`).eq(0);
    player.score++;
    player.store.numStones++;
    console.log(`Player 1 score: ${playerOne.score} Player 2 score: ${playerTwo.score}`);
    $($ul).append($li);
    //checkStoneCount();
    for (let i = 0; i < capturedStones.length; i++) {
        console.log('capture loop');
        player.store.stones.push(capturedStones[i]);
        let $li = $(`${opponentPocket.$location}>li`).eq(0);
        $($storeul).append($li);
        player.score++;
        player.store.numStones++;
        console.log(`Player 1 score: ${playerOne.score} Player 2 score: ${playerTwo.score}`);
        //checkStoneCount();
    }
    opponentPocket.numStones = 0;
    opponentPocket.stones = [];
    //checkStoneCount();
    game.scoreboard();
    return game.changePlayer();
} 

/* const checkStoneCount = function() {
    let player1stones = pockets.player1Pocket1.numStones+pockets.player1Pocket2.numStones+pockets.player1Pocket3.numStones+pockets.player1Pocket4.numStones+pockets.player1Pocket5.numStones+pockets.player1Pocket6.numStones;
    let player2stones = pockets.player2Pocket1.numStones+pockets.player2Pocket2.numStones+pockets.player2Pocket3.numStones+pockets.player2Pocket4.numStones+pockets.player2Pocket5.numStones+pockets.player2Pocket6.numStones;
    let player1Objectstones = pockets.player1Pocket1.stones.length+pockets.player1Pocket2.stones.length+pockets.player1Pocket3.stones.length+pockets.player1Pocket4.stones.length+pockets.player1Pocket5.stones.length+pockets.player1Pocket6.stones.length;
    let player2Objectstones = pockets.player2Pocket1.stones.length+pockets.player2Pocket2.stones.length+pockets.player2Pocket3.stones.length+pockets.player2Pocket4.stones.length+pockets.player2Pocket5.stones.length+pockets.player2Pocket6.stones.length;
    let pocketstones = player1stones + player2stones;
    let storeStones = playerOne.store.numStones + playerTwo.store.numStones;
    console.log("player 1:" + player1stones, 'stone objects:' + player1Objectstones);
    console.log("player 2:" + player2stones, 'stone objects:' + player2Objectstones);
    console.log('pocket stones:' + pocketstones);
    console.log('store stones:' + storeStones);
    if (storeStones + pocketstones != 48) {
        console.warn('stone count wrong')
    }
} */
$('#game-start').on('click', game.start);