import React, { useContext, useEffect } from 'react'
import UserContext from '../../assets/UserContext'
import { userInfo } from '../../api/index'
import './Dashboard.css'

const Dashboard = () => {

  const [user, setUser] = useContext(UserContext)

  useEffect(() => {
    userInfo().then(res => {
      const { user } = res.data
      setUser(user[0])
    })
  }, [])

  return (
    <>
      <div className='wrapper'>
        <div id="img">
          <div id="wordLightBox">
            <h1 className="gold"><b><u>Welcome to Word Quiz!!</u></b></h1>
            <h2 className="my-4 gold"><b>{user.username}</b></h2>
            <div className="white mt-5">
              <h2 className="mb-5"><u>The importance of a vocabulary</u></h2>
              <h3>An extensive vocabulary aids expression and communication. Vocabulary size has been directly linked to reading comprehension. Linguistic vocabulary is synonymous with thinking vocabulary. A person may be judged by others based on his or her vocabulary. Wilkins (1972) once said, "Without grammar, very little can be conveyed, without vocabulary, nothing can be conveyed."</h3>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-4">
        <h6 className="gold"><b>"Developer: William Erickson" @ "william.erickson.3007892@tlm.cloud"</b></h6>
      </footer>
    </>
  )

}

export default Dashboard