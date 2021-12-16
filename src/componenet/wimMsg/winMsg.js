import React from 'react';
import './winMsg.css';
import Button from '../btn/btn'
function WinMsg(props){
    let v = '';
    (props.winMsgVisibility ? v = 'visible' : v ='hidden');
    return (
      <div className="winning-message" style={{visibility:v}}>
        <h3>WE HAVE A WINNER!</h3>
        <h1>Player {props.winner} has won!</h1>
        <i className="fas fa-trophy fa-7x win-icon"></i>
        <Button
            i="fas fa-redo-alt"
            buttonText="New Game"
            onClickFunc={props.newGame}
          />
      </div>
    );
}

export default WinMsg;