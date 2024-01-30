import Modal from '../../components/Modal' // "Require keyword customized export"
import { handleLogin } from '../../api' // "Require keyword customized export"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [, setUsername] = useState('')
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const handleShow = () => setShow(true)

  const login = async e => {

    e.preventDefault()
    e.persist()

    const user = { email, password }

    await handleLogin(user)
      .then(res => {
        const { token } = res.data
        setUsername('')
        setEmail('')
        setPassword('')
        window.localStorage.setItem('api_token', token)
        setModalContent("Welcome Back!!")
        handleShow()
        setTimeout(() => window.location = '/', 1500)
      })
      .catch(err => {
        console.log(err)
        setModalContent('Invalid Info or User not enrolled! Please Sign Up.')
        handleShow()
        setTimeout(() => window.location = '/signup', 1500)
      })
  }

  return (
    <div className='wrapper'>
      <div id="img">
        <div id="lightBox">
          <h1 className="mb-5 white">Login</h1>
          <form className="form mt-3" onSubmit={(e) => login(e)}>
            <div className="my-5">
              <h4 className="gold">Email</h4>
              <input type="email" className="form-control text-center mb-3" placeholder="Enter Email" name="username" onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="my-5">
              <h4 className="gold">Password</h4>
              <input type="password" className="form-control text-center mb-3" placeholder="Enter Password" name="username" onChange={e => setPassword(e.target.value)} required />
            </div>
            <button className="btn btn-dark my-4 gold"><span className="gold">Submit</span></button>
          </form>
          <h4 className="white mt-4">Dont have an account? <Link to='/signup' className='gold hover'>Sign up</Link> here.</h4>
        </div>
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
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </div>
  )

}

export default Login