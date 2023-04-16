import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import "../style/components/leftdashboard.scss"
const LeftDashboard = () => {
    return (
        <div className="left-side">
            <div className="card-one">
                <h3>Frontend Mentor</h3>
                <p>Feedback Board</p>
            </div>
            <div className="card-two">
                <div className='buttonsOnepart'>
                    <Button className="buttonAll" text="All" />
                    <Button className="button" text="UI" />
                    <Button className="button" text="UX" />
                </div>
                <div className='buttonsTwopart'>
                    <Button className="button" text="Enhancement" />
                    <Button className="button" text="Bug" />
                </div>
                <div className='buttonsThreepart'>
                    <Button className="button" text="Feature" />
                </div>
            </div>

            <div className="card-three">
               
                <div className='roadmapHeader'>
                    <h3>Roadmap</h3>
                    <Link to="/roadmap"><li>View</li></Link>
                </div>  
                <div className="roadmapPlanned">
                    <li><div className='colorYellow'></div> Planned</li>
                    <li>2</li>
                </div>
                <div className="roadmapProgress">
                    <li><div className='colorPurple'></div> In-Progress</li>
                    <li>3</li>
                </div>
                <div className="roadmapLive">
                    <li><div className='colorGreen'></div> Live</li>
                    <li>2</li>
                </div>

            </div>
        </div>
    )
}

export default LeftDashboard