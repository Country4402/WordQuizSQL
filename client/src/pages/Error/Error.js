import { Link } from 'react-router-dom'
import React from 'react'
import './Error.css'

const Error = () => {

  return (
    <>
      <div id="img">
        <div id="lightBox">
          <h1 className="red">ERROR!!</h1>
          <h4 className="my-5 white"><b>Something went HORRIBLY wrong!!</b></h4>
          <Link to="/" className="btn hover gold"><h4>Back Home</h4></Link>
        </div>
      </div>
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </>
  )

}

export default Error