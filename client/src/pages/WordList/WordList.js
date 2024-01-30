import { Link } from 'react-router-dom'
import React from 'react'
import './WordList.css'

const WordList = () => {

  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <>
      <div id="linkDiv">
        {
          alpha.map(char => <Link className="charLink link gold" to={`/words/${char}`} key={char}>{char}</Link>)
        }
      </div>
      <div id="img"></div>
      <footer className="py-4">
        <h5 className="gold"><b>Choose the first letter for the words list</b></h5>
      </footer>
    </>
  )

}

export default WordList