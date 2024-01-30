import { Link } from 'react-router-dom'
import React from 'react'

const Home = () => {

  return (
    <>
      <div id="img">
        <div id="wordLightBox">
          <h1 className="gold my-3"><u>Word Quiz</u></h1>
          <div id="homeText" className="wordText white">
            <p>Word recognition, according to Literacy information and Communication System (LINCS) is "the ability of a reader to recognize written words correctly and virtually effortlessly." It is sometimes referred to as "isolated word recognition" because it involves a reader's ability to recognize words individually from a list without needing similar words for contextual help. LINCS continues to say that "rapid and effortless word recognition is the main component of fluent reading" and explains that these skills can be improved by "practic[ing] with flashcards, lists, and word grids."</p>

            <p>The article "The Science of Word Recognition" says that "evidence from the last 20 years of work in cognitive psychology indicates that we use the letters within a word to recognize a word." Over time, other theories have been put forth proposing the mechanisms by which words are recognized in isolation, yet with both speed and accuracy. These theories focus more on the significance of individual letters and letter-shape recognition (ex. serial letter recognition and parallel letter recognition). Other factors such as saccadic eye movements and the linear relationship between letters also affect the way we recognize words.</p>

            <p>An article in ScienceDaily suggests that "early word recognition is key to lifelong reading skills." There are different ways to develop these skills. For example, creating flash cards for words that appear at a high frequency is considered a tool for overcoming dyslexia. It has been argued that prosody, the patterns of rhythm and sound used in poetry, can improve word recognition.</p>

            <p>Word recognition is a manner of reading based upon the immediate perception of what word a familiar grouping of letters represents. This process exists in opposition to phonetics and word analysis, as a different method of recognizing and verbalizing visual language (i.e. reading). Word recognition functions primarily on automaticity. On the other hand, phonetics and word analysis rely on the basis of cognitively applying learned grammatical rules for the blending of letters, sounds, graphemes, and morphemes.</p>

            <p>Word recognition is measured as a matter of speed, such that a word with a high level of recognition is read faster than a novel one. This manner of testing suggests that comprehension of the meaning of the words being read is not required, but rather the ability to recognize them in a way that allows proper pronunciation. Therefore, context is unimportant, and word recognition is often assessed with words presented in isolation in formats such as flash cards Nevertheless, ease in word recognition, as in fluency, enables proficiency that fosters comprehension of the text being read.</p>

            <p>The intrinsic value of word recognition may be obvious due to the prevalence of literacy in modern society. However, its role may be less conspicuous in the areas of literacy learning, second-language learning, and developmental delays in reading. As word recognition is better understood, more reliable and efficient forms of teaching may be discovered for both children and adult learners of first-language literacy. Such information may also benefit second-language learners with acquisition of novel words and letter characters. Furthermore, a better understanding of the processes involved in word recognition may enable more specific treatments for individuals with reading disabilities.</p>
          </div>
          <Link to='/login'><h6 className="gold hover mt-5"><u>Please log in to Play Word Quiz</u></h6></Link>
        </div>
      </div>

      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </>
  )

}

export default Home