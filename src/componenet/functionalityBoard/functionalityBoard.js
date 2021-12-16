import React from 'react';
import './functionalityBoard.css';
import Dice from '../dice/dice'
import Button from '../btn/btn'

import dice1 from "../../img/1.png";
import dice2 from "../../img/2.png";
import dice3 from "../../img/3.png";
import dice4 from "../../img/4.png";
import dice5 from "../../img/5.png";
import dice6 from "../../img/6.png";


function FunctionalityBoard(props){
    const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
    return (
      <div className="func-container">
        <div className="main-container">
          <Button
            i="fas fa-dice fa-2x"
            buttonText="Roll Dice"
            onClickFunc={props.throwDice}
          />
          <Dice src1={dice[props.firstDice-1]} src2={dice[props.secondDice-1]} />
          <Button
            i="fas fa-hand-holding fa-2x"
            buttonText="Hold"
            onClickFunc={props.playerHold}
          />
        </div>
        <div className="foot-container">
          <Button
            i="fas fa-redo-alt"
            buttonText="New Game"
            onClickFunc={props.newGame}
          />
        </div>
      </div>
    );
}

export default FunctionalityBoard;