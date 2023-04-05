import {useEffect, useState} from "react"
import Board from "./componenets/Board"
import Timer from "./componenets/Timer"
function App() {
  const [board, setBoard] = useState([
      [1,2],
      [3,4]
  ])

  const [bool, setBool] = useState(false)


  useEffect( () => {
    // create new board
    const newBoard = []
    let counter = 1
    // iterate 10 times to fill rows
    for (let row = 0; row < 10; row++) {
      let row = [];


      for (let col = 0; col < 10; col++) {
        let square = {
          id: counter,
          wasClicked: false,
          isBomb: true,
          flagged: true
        }

        row.push(square);
        counter++;
      }

      newBoard.push(row)
    }

    setBoard(newBoard)
    setBool(true)

    // iterate 10 times to fill columns
  }, [])

  return (
   <div>
    <Timer/>
    <Board board={board}/>
   </div>
  );
}

export default App;
