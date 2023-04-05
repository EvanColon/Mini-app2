import App from "../App"
import {board, setBoard} from "../App"




export default function Board( {board} ) {

return (

  <div className='container'>
    {board.map( (row, index) => {
      return <div key={index} className="row" style={{ height:'50px', width:'502px', border:'1px solid black'}}>
        {
          row.map( (num, ind) => {
            console.log('HELP ME', num)

            // <input type="button" OnClick={() => ()}/>

            return <div key={ind} 
                        className='col-sm' 
                        style={{width:'502px', height:'50px', border:'1px solid gray'}}
                        onClick={ () => (console.log({num}))}
                      >
                        {num.id}
                    </div>
          })
        }
    </div>
    })}
  </div>
)
}