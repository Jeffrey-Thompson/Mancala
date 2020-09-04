# Mancala
MVP Pitch 
The user will be able to play a basic two-player game of mancala, according to the following rules. 
" The Objective:
Get more stones into your store than your opponent.
The Rules:
Players take turn picking up stones from their pockets 
and dropping them one at a time counter-clockwise around the board, including your store. 
Do not drop one of your stones into your opponent's store.
If your last stone lands in your store, take another turn. 
If your last stone lands in one of your empty pockets, 
place this stone and any of your opponent's stones directly across from it into your store. 
The game ends when all of one player's pockets are empty."
The game will track and display both player's scores and announce the winner.
The stones and pockets will be tracked as objects and if statements will trigger functions based on how the last stone falls.


User Story
The game will be played on a rectangular board with 6 small ovals representing the player's pockets on each side as well as 1 larger oval along each end of the board representing the stone. 
When the user presses the start button, the game board will be populated with 4 stones in each of the 12 pockets on the game board and 
player 1 will be prompted to play. Player 1 will play by clicking on one of his pockets on the game board. 
The stones will be removed from that pocket and placed one at a time counter-clockwise around the board, including the player's store, but not his opponent's.
If the last stone falls into the player's store, the player will be prompted to play again and will do so by clicking on one of their pockets.
If the last stone falls into an empty pocket on Player 1's side of the board, the game will check if there are any stones on Player 2's side 
of the board directly across from the stone any stones in that pocket as well as Player 1's last stone will be moved from their pockets and into Player 1's store. 
Following the conclusion of Player 1's turn, Player 2 will be prompted to play. Player 2 will click on one of their pockets to play and the game will precede with the logic above.
Then Player 1 will play again and the game will precede in this manner until one of the players has no stones in their pockets.
During the game, a counter near the players stores will increase each time a stone is placed in it. Rules will be displayed on screen to help the user understand the game.
When the game ends, the final score and the winner will be announced.

Stretch Goals
Additional rule variants that the user can choose.
User option to increase or decrease the number of starting stones.
CSS styling with a wood-grain board and irregularly shaped stones to simulate playing with natural materials.
Game reset button and multi-game score tracking.
Board turning animation between player turns so that the active player is always playing like looking at a physical board.
One player mode- computer pickes their pocket at random.

Wireframe
<img src="Screen Shot 2020-09-04 at 8.59.36 AM.png" alt='wireframe'>

Flowchart
<img src="Screen Shot 2020-09-04 at 9.00.17 AM.png" alt="flowchart">
