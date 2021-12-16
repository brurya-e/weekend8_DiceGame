import React from "react";
import FunctionalityBoard from '../functionalityBoard/functionalityBoard';
import Player from '../player/player';
import WinnMsg from '../wimMsg/winMsg';
import FailMsg from '../failMsg/failMsg';

class GameBord extends React.Component {

    state = {
        pointToWin: 100,
        dices: [6, 6],
        playerTurn: '1',
        winner: false,
        failSix: false,
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

    resetScore = () => {
        if (this.state.playerTurn === '1') {
            this.setState({
                players: [
                    {
                        currentScore: 0,
                        totalScore: this.state.players[0].totalScore
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
                        totalScore: this.state.players[1].totalScore
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
        //check if dices=6
        if ((firstDice === secondDice) && (secondDice === 6)) {
            //msg
            this.setState({ failSix: true });
            //clear
            this.resetScore();
            //turn
            this.switchTurn();
            //remove msg
            setTimeout(() => { this.setState({ failSix: false }); }, 4000);
        }
        else {
            //update player score
            this.updateCurrentPlayerAmount(firstDice + secondDice);
        }
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
        this.switchTurn();//מגיע לכאן לפני הרינדור של הזוכה ולכן מציג זוכה שגוי גם הAWAIT לא עזר
    };

    checkIfWinner = () => {
        if (this.state.players[this.state.playerTurn - 1].totalScore >= this.state.pointToWin) {
            this.setState({ winner: true });
            //showe winner div  becouse render +//newGame?!
        }
    };

    newGame = () => { // resetting details
        this.setState({
            pointToWin: 100,
            dices: [6, 6],
            playerTurn: '1',
            winner: false,
            failSix: false,
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
                    <FailMsg
                        failMsgVisibility={this.state.failSix}
                    />
                    <WinnMsg
                        newGame={this.newGame}
                        winner={this.state.playerTurn}
                        winMsgVisibility={this.state.winner}
                    />
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

