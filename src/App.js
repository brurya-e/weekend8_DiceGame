import React from "react";
import Dice from "./componenet/dice/dice";
import Btn from './componenet/btn/btn'
import GameBord from './componenet/gameBord/gameBord'

// this.setState(
//     {
//       todos: [
//         ...this.state.todos,
//         {
//           id: new Date().valueOf(),
//           mission,
//         },
//       ],
//     },
//     () => {
//       window.localStorage.setItem('todos', JSON.stringify(this.state.todos));
//     }
//   );

class App extends React.Component {

    // state = {
    //     pointToWin: 20,
    //     dices: [null, null],
    //     playerTurn: 0,
    //     winner: false,

    //     players: [
    //         {
    //             currentScore: 0,
    //             totalScore: 0
    //         },
    //         {
    //             currentScore: 0,
    //             totalScore: 0
    //         }
    //     ]
    // };

    // updateDice = (id, value) => {
    //     console.log(this.state.dices)
    //     if (id==1)
    //     this.setState({ dices: [value, this.state.dices[1]] })
    //     else
    //     this.setState({ dices: [this.state.dices[0],value] })
    //     console.log('Dice' , value , 'id' ,id)
    //     console.log(this.state.dices)

    // }
    
    render() {

        return (
            <GameBord/>

            // <>
            //     <Dice
            //         callBack={this.updateDice}
            //         id = {0}

            //     />
            //       <Dice
            //         callBack={this.updateDice}
            //         id = {1}

            //     />
                /* <InputText
                    name={lName.name}
                    text={lName.text}
                    input={this.state.lName}
                    callBack={this.update}

                />
                <Select
                    value={this.state.age}
                    callBack={this.update}
                />

                <TextErea
                    name={fText.name}
                    text={fText.text}
                    input={this.state.fText}
                    callBack={this.update}
                // row={fText.row}
                // col={fText.col}  
                /> */
            // </>
        );

    }

}

export default App;