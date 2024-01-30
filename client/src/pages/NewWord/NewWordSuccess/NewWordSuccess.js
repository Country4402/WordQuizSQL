import { Link } from 'react-router-dom'
import React from 'react'

const NewWordSuccess = () => {

  return (
    <>
      <div id="img">
        <div id="lightBox">
          <h1 className="green">SUCCESS!!</h1>
          <h2 className="my-5 white">Your Word Was Successfully Added To Word Quiz!!</h2>
          <div className="row">
            <Link to="/" className="btn hover gold col-4 offset-4"><h4>Home</h4></Link>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </>
  )

}

export default NewWordSuccess