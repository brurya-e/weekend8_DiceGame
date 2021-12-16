import React from "react";
import "./failMsg.css";

const gif = ["https://giphy.com/gifs/rareltd-rare-ltd-replay-Q5ooUwFhNCD1iSsapw",
"https://giphy.com/gifs/soultrain-soul-train-bad-luck-3ohjV5uukLAvnhS7vy",
"https://giphy.com/clips/mrnigelng-cooking-show-uncle-roger-y7YHCpOwuYcLio0BP1"]

function FailMsg(props) {
    let v = '';
    (props.failMsgVisibility ? v = 'visible' : v ='hidden');
  return (
    <div className="fail-msg" style={{ visibility: v }}>
      <img
        className="gif"
        alt = ''
        src={gif[Math.floor(Math.random()*gif.length)]}
      />
      <div>
        <h1>"you got 6 twice!"</h1>
        <h3>"you lost all your current amount and your turn."</h3>
      </div>
    </div>
  );
}

export default FailMsg;
