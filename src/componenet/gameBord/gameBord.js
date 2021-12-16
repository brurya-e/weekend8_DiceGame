import React from "react";
import FunctionalityBoard from '../functionalityBoard/functionalityBoard';
import Player from '../player/player';
// import WinningMessage from "./components/WinningMessage/WinningMessage.Component";
// import HiddenMessage from "./components/HiddenMessage/HiddenMessage.Component";

class GameBord extends React.Component {

    state = {
        pointToWin: 20,
        dices: [6, 6],
        playerTurn: '1',
        winner: false,
        players: [
            {
                currentScore: 0,
                totalScore: 0
            },
            {
                currentScore: 0,
                totalScore: 0
            }
        ]
    };

    // winner: ["", "hidden"], // hidden for still no winner -> when winner change to visible for winner message
    // isSixSix: ["hidden", false], // show you got 6 6 message, and disable=true for roll dice while 6 6 message

    updateCurrentPlayerAmount = (value) => {
        if (this.state.playerTurn === '1') {
            this.setState({
                players: [
                    {
                        currentScore: this.state.players[0].currentScore + value,
                        totalScore: this.state.players[0].totalScore,
                    },
                    this.state.players[1]]
            });
        }
        else {
            this.setState({
                players: [
                    this.state.players[0],
                    {
                        currentScore: this.state.players[1].currentScore + value,
                        totalScore: this.state.players[1].totalScore,
                    }]
            });
        }
    }

    throwDice = () => {
        //thrw twice
        let firstDice = Math.floor(Math.random() * 6 + 1);
        let secondDice = Math.floor(Math.random() * 6 + 1);
        //update dices on state to render and update on page
        this.setState({
            dices: [firstDice, secondDice],
        });
        //update player score
        this.updateCurrentPlayerAmount(firstDice + secondDice);
        //check win before hold?
        // this.checkIfWinner(this.state.pointToWin);
    };

    switchTurn = () => {
        if (this.state.playerTurn === '1')
            this.setState({ playerTurn: '2' });
        else
            this.setState({ playerTurn: '1' });
    }

    addToTotal = () => {
        if (this.state.playerTurn === '1') {
            this.setState({
                players: [
                    {
                        currentScore: 0,
                        totalScore: this.state.players[0].totalScore + this.state.players[0].currentScore
                    },
                    this.state.players[1]]
            });
        }
        else {
            this.setState({
                players: [
                    this.state.players[0],
                    {
                        currentScore: 0,
                        totalScore: this.state.players[1].totalScore + this.state.players[1].currentScore
                    }]
            });
        }
    }

    playerHold = async () => { //לא עובד נכון בלי await למרות שכתוב שהוא מיותר
        // add to total
        await this.addToTotal();
        //check win
        await this.checkIfWinner();
        //change player 
        this.switchTurn();
    };

    checkIfWinner = () => {
        if (this.state.players[this.state.playerTurn - 1].totalScore >= this.state.pointToWin) {
            this.setState({ winner: true });
            //showe winner div 
            console.log('winner', this.state.playerTurn)
            //newGame?!
        }
    };

    newGame = () => { // resetting details
        this.setState({
            pointToWin: 100,
            dices: [6, 6],
            playerTurn: '1',
            winner: false,
            players: [
                {
                    currentScore: 0,
                    totalScore: 0
                },
                {
                    currentScore: 0,
                    totalScore: 0
                }
            ]
        })
    }

    //   adjustAmountToWin = (e) => {
    //     this.state.pointToWin = e.target.value;
    //   };

    render() {
        return (
            <div>
                <div className="players">
                    {/* <HiddenMessage
            mainText="you got 6 * 6!"
            secondaryText="you lost all your current amount and your turn."
            mesVisibility={this.state.isSixSix[0]}
          />
          <WinningMessage
            newGameFunction={this.newGame}
            winner={this.state.winner[0]}
            winMesVisibility={this.state.winner[1]}
          /> */}
                    <Player
                        player="1"
                        count={this.state.players[0].currentScore}
                        total={this.state.players[0].totalScore}
                        state={this.state.playerTurn}
                    />
                    <Player
                        player="2"
                        count={this.state.players[1].currentScore}
                        total={this.state.players[1].totalScore}
                        state={this.state.playerTurn}
                    />
                </div>
                <FunctionalityBoard
                    firstDice={this.state.dices[0]}
                    secondDice={this.state.dices[1]}
                    throwDice={this.throwDice}
                    playerHold={this.playerHold}
                    newGame={this.newGame}
                //   onChangefunc={this.adjustAmountToWin}
                />
            </div>
        );
    }
}

export default GameBord;

