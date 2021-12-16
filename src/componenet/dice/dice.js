import './dice.css'
import React from "react";

function Dice(props){
    //לקבל CALLBACK
    //לבצע את החישוב כאן
    //ולהחזיר את הערך הCALLBACK
    //.הבעיה שיופעל בלחיצה על הכפתור ולא בלחיצה כאן
    return (
    <div className='dice'>
        <img src={props.src1} alt =''></img>
        <img src={props.src2} alt =''></img>
    </div>
    )
}

export default Dice;
//האם לשנות שיעשה את הפונקציונאליות כאן? כלומר שיעשה הגרלה פה בפנים או שזה כרגע רק ויזואלי