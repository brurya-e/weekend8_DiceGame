import React from 'react';
import './winMsg.css';
import Button from '../btn/btn'
function WinMsg(props){
    let v = '';
    (props.winMsgVisibility ? v = 'visible' : v ='hidden');
    //בגלל בעיה בתזמון שולח לכאן אחרי שמחליף שחקן
    //עד לפתרון נכון נבצע כאן שינוי של השחקן
    let temp = '';
    props.winner === '1' ? temp = '2' : temp = '1'
    return (
      <div className="winning-message" style={{visibility:v}}>
        <h3>WE HAVE A WINNER!</h3>
        <h1>Player {temp} has won!</h1>
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