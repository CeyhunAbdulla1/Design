import React from 'react'
import { Link } from 'react-router-dom'
import "../style/pages/newfeedback.scss"
import DropdownMenu from '../components/Dropdown'
import Button from "../components/Button"
const NewFeedback = () => {
    return (
        <div className='createnewFeedback'>
            <div className="container">
                <Link to="/details"> <span className='goBack'> Go Back</span>
                    <img className='newvector' src="/images/kicikdir.png" alt="" /></Link>
                <div className="newfeedBack">
                    <img className='newplus' src="/images/plus.png" alt="" />
                    <h2>Create New Feedback</h2>
                    <div>
                        <h4>Feedback Title</h4>
                        <h5>Add a short, descriptive headline</h5>
                        <input type="text" />
                    </div>
                    <div>
                        <h2 className='newcategory'>Category</h2>
                        <p className='newcategoryFeedback'>Choose a category for your feedback</p>
                        <DropdownMenu />
                    </div>
                    <div>
                        <h3 className='newfeedbackDetail'>Feedback Detail</h3>
                        <h4 className='newspecific'>Include any specific comments on what should be improved, added, etc.</h4>
                        <input type="text" className='newinformation' />
                        <div className='newButton'>
                            <Button text="Cancel" className='newcancel' />
                            <Button text="Add Feedback" className="newaddFeedback" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewFeedback