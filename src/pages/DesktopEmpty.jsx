import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import "../style/pages/desktopempty.scss"

import LeftDashboard from '../components/LeftDashboard'

const DesktopEmpty = () => {
  return (
    <div className='desktop'>
    <div className="container">
        <div className="all">
        <LeftDashboard/>
        <div className="feedback-column">
        <Header/>

        <div className="feedback">
            <div className="small-feedback">
            <img src="images/empty.png" alt="" />
                <h3>There is no feedback yet.</h3>
                <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
               <Link to="/details"><Button className="addFeedback" text="+ Add Feedback"/></Link>
            </div>
        </div>
        </div>
        </div>
    </div>

</div>

  )
}

export default DesktopEmpty