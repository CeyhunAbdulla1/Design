import React from 'react'
import { Link } from 'react-router-dom'
import "../style/pages/editing.scss"
import DropdownMenuthree from '../components/Dropdownthree'
import DropdownMenutwo from '../components/Dropdowntwo'
import Button from "../components/Button"
const Editing = () => {
    return (
        <div className='createnewFeedback'>
          
            <div className="container">
            <Link to="/details"> <span> Go Back</span>
                <img className='vector' src="/images/kicikdir.png" alt="" /></Link>
                <img className='plus' src="/images/edit.png" alt="" />

                <div className="feedBackedit">

                    <h2 className='newFeedback'>Editing ‘Add a dark theme option’</h2>
                    <div className="flexEdit">
                        <div>
                            <h4>Feedback Title</h4>
                            <h5>Add a short, descriptive headline</h5>
                            <input type="text" className='input' />
                        </div>
                        <div>
                            <h2 className='category'>Category</h2>
                            <p className='categoryFeedback'>Choose a category for your feedback</p>
                            <DropdownMenuthree />
                        </div>
                        <div>
                            <h2 className='update'>Update Status</h2>
                            <h3 className='changeState'>Change feedback state</h3>
                            <DropdownMenutwo />
                        </div>
                        <div className='all-information'>
                            <h3 className='feedbackDetail'>Feedback Detail</h3>
                            <h4 className='specific'>Include any specific comments on what should be improved, added, etc.</h4>
                            <input type="text" className='information' />
                            <div className='button'>
                                <Button text="Delete" className="delete" />
                                <div className='button-flex'>
                                    <Button text="Cancel" className='cancel' />
                                    <Button text="Add Feedback" className="addFeedback" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Editing