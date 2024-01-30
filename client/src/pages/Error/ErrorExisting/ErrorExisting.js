import { Link } from 'react-router-dom'
import React from 'react'

const ErrorExisting = () => {

  return (
    <>
      <div id="img">
        <div id="lightBox">
          <h1 className="red">ERROR!!</h1>
          <h4 className="my-5 white"><b>Something went HORRIBLY wrong!!</b></h4>
          <h2 className="my-5 white">The Content You Entered Already Exists!!</h2>
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

export default ErrorExisting