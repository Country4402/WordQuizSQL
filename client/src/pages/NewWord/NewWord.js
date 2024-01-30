import React from 'react'

const NewWord = () => {

  return (
    <>
      <div id="img">
        <div id="lightBox">
          <div className="text-center">
            <h1 className="white my-4">Add A New Word</h1>
            <form action="http://localhost:3000/api/new-word" method="post">
              <div className="row my-5">
                <h2 className="col-12 gold mb-3">Word</h2>
                <input className="col-8 offset-2 text-center mb-3 py-2" id="word" placeholder="Word" name="newWord" required />
              </div>
              <div className="row my-4">
                <h2 className="col-12 gold mb-3">Definition</h2>
                <input className="col-8 offset-2 text-center mb-3 py-2" id="definition" placeholder="definition" name="definition" required />
              </div>
              <button className="btn btn-dark mb-4"><span className="gold hover">Submit</span></button>
            </form>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </>
  )

}

export default NewWord