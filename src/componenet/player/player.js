import React from "react";
import "./player.css";

function Player(props) {
    let className = '';
    (props.state)+1 == props.player ? className = 'active' : className = '';
    return (
        <div className={`player container ${className}`} >
            <div className="player">
                <h1>Player {props.player}</h1>
            </div>
            <div className="player scores">
                <div className="total">
                    <p>Total:</p>
                    <h4>{props.total}</h4>
                </div>
                <div className="player count">
                    <h1>{props.count}</h1>
                </div>
            </div>
        </div>
    );
}

export default Player;
