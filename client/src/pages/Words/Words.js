import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { findWords } from '../../api'
import './Words.css'

const Words = () => {

  const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  const wordsArr = []
  const [words, setWords] = useState([])

  useEffect(() => { getWords() })

  const query = useParams()

  const getWords = async () => {
    await findWords(query.id)
      .then(words => {
        words.data.map(word => {
          return (wordsArr.push([word.word, word.define]))
        })
        setWords(wordsArr)
      })
  }

  return (
    <>
      <div id="linkDiv">
        {
          alpha.map(char => <Link className="charLink link gold" id={char} to={`/words/${char}`} key={char}>{char}</Link>)
        }
      </div>
      <div>
        <div id="wordLightBox" className="pb-5">
          <div>
            <h1 className="mb-3 gold"><u>Words List</u></h1>
            {words.map(word => {
              return (
                <div key={word[0]}>
                  <hr />
                  <h2 className="gold my-4">{word[0]}</h2>
                  <h4 className="white">{word[1]}</h4>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div id="linkDiv">
        {
          alpha.map(char => <Link className="charLink link gold" id={char} to={`/words/${char}`} key={char}>{char}</Link>)
        }
      </div>
    </>
  )

}
export default Words