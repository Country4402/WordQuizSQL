import { handleSignup } from '../../api/index' // "Require keyword customized export"
import Modal from '../../components/Modal' // "Require keyword customized export"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleShow = () => setShow(true)

  const signup = async e => {
    e.preventDefault()
    e.persist()
    const newUser = {
      username,
      email,
      password
    }
    await handleSignup(newUser)
      .then(res => {
        setUsername('')
        setEmail('')
        setPassword('')
        const { token } = res.data
        window.localStorage.setItem('api_token', token)
        window.location = '/'
      })
      .catch(() => {
        setModalContent(`User already exists! Please Login.`)
        handleShow()
        setTimeout(() => window.location = '/login', 2000)
      })
  }

  return (
    <div className='wrapper'>
      <div id="img">
        <div id="lightBox">
          <h1 className="mb-4 white">Sign Up</h1>
          <form className="form" onSubmit={(e) => signup(e)}>
            <div>
              <h4 className="gold">Username</h4>
              <input type="text" className="form-control text-center" name="username" placeholder="Enter Username" onChange={e => setUsername(e.target.value)} required />
            </div>
            <div className="my-4">
              <h4 className="mt-2 gold">Email</h4>
              <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                className="form-control text-center"
                placeholder="Enter Email"
                name="username"
                required />
            </div>
            <div>
              <h4 className="mt-2 gold">Password</h4>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                className="form-control text-center"
                placeholder="Enter Password"
                name="username"
                required />
            </div>
            <button className="btn btn-dark mt-5"><span className="gold">Submit</span></button>
          </form>
          <div className="white mt-4">Already a user? <Link to='/login' className='gold hover'>Login</Link> here.</div>
          {
            show ? (
              <Modal>
                <div id="modalDiv">
                  <h3 className="gold">{modalContent}</h3>
                </div>
              </Modal>
            ) : null
          }
        </div>
      </div>
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </div>
  )

}

export default Signup