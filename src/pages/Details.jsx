import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button';
import "../style/pages/details.scss"
const Details = () => {

    const [showInput, setShowInput] = useState(false);
    const [showInputtwo, setShowInputtwo] = useState(false);
    const [showInputthree, setShowInputhree] = useState(false);
    const [showInputfourth, setShowInpufourth] = useState(false);



    const [xettTop, setXettTop] = useState(30);

    function handleReplyClick() {
        setShowInput((prev) => !prev); // toggle the showInput state
        setShowInputtwo(false); // close the other reply inputs
        setShowInputhree(false);
        setShowInpufourth(false);
        setXettTop(225); // move the line down when the input is open
    }

    function handleReplyClicktwo() {
        setShowInputtwo((prev) => !prev); // toggle the showInput state
        setShowInput(false); // close the other reply inputs
        setShowInputhree(false);
        setShowInpufourth(false);
        setXettTop(225); // move the line down when the input is open
    }

    function handleReplyClickthree() {
        setShowInputhree((prev) => !prev); // toggle the showInput state
        setShowInput(false); // close the other reply inputs
        setShowInputtwo(false);
        setShowInpufourth(false);
        setXettTop(225); // move the line down when the input is open
    }

    function handleReplyClickfourth() {
        setShowInpufourth((prev) => !prev); // toggle the showInput state
        setShowInput(false); // close the other reply inputs
        setShowInputtwo(false);
        setShowInputhree(false);
        setXettTop(225); // move the line down when the input is open
    }



    return (
        <div className="details">
            <div className="container">
                <div className="all">
                    {/* one */}
                    <div className="backandEdit">
                        <div className='image'>
                            <Link to="/empty"><p><img src="/images/kicikdir.png" alt="" />    Go Back </p></Link>
                        </div>
                        <Link to="/editing"> <Button className="editButton" text="Edit Feedback" /></Link>
                    </div>
                    {/* two */}
                    <div className="message">
                        <div className="message-count">
                            <img src="/images/greenvector.png" alt="" />
                            <p>99</p>
                        </div>
                        <div>
                            <h3>Add a dark theme option</h3>
                            <p className='darkmode'>It would help people with light sensitivities and who prefer dark mode.</p>
                            < Button text="Feature" className="featureButton" />
                            </div>
                            <div className='message-count-four'>
                                <img className='message-fourth' src="/images/message.png" alt="" />
                                <p className='message-count-fourth' >4</p>
                            </div>
                        
                    </div>
                    <div className="comments">
                        {/* one comments */}
                        <div>
                            <p>4 Comments</p>

                            <div className="moss">
                                <img src="/images/Moss.png" alt="" />
                                <h3>Elijah Moss</h3>
                                <h4>@hexagon.bestagon</h4>
                                <p>Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor
                                    in the evening after my device’s dark mode turns on without the bright background it currently has.</p>
                            </div>
                            <p>
                                <span onClick={handleReplyClick} className="reply">Reply</span>
                            </p>
                            {showInput && (
                                <div>
                                    <input type="text" className="moss-reply" />
                                    <Button text="Post Reply" className="postReply" onClick={handleReplyClick} />
                                </div>
                            )}

                            <div className="xett"></div>

                        </div>


                        {/* two comments*/}
                        <div className='two-comments'>

                            <div className="skinner">

                                <span onClick={handleReplyClicktwo} className="reply-two">Reply</span>
                                <img src="/images/person2.png" alt="" />

                                <h3>James Skinner</h3>
                                <h4>@hummingbird1</h4>
                                <h5 className='Second'>Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result.
                                    It’s also quite a trend with modern apps and  apparently saves battery life.</h5>

                            </div>


                            {showInputtwo && (
                                <div>
                                    <input type="text" className="moss-replytwo" placeholder="Add your comment here..." />
                                    <Button text="Post Reply" className="postReplytwo" onClick={handleReplyClicktwo} />
                                </div>
                            )}


                        </div>
                        {/* third */}
                        <div className='third-comments'>

                            <div className="darktheme">

                                <span onClick={handleReplyClickthree} className="reply-three">Reply</span>
                                <img src="/images/Anne.png" alt="" />

                                <h3>James Skinner</h3>
                                <h4>@hummingbird1</h4>
                                <h5 className='Second'><span> @hummingbird1  </span>While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser.
                                    There might be a need to turn off the extension for sites with naturally black backgrounds though.</h5>

                            </div>


                            {showInputthree && (
                                <div>
                                    <input type="text" className="moss-replythree" placeholder="Add your comment here..." />
                                    <Button text="Post Reply" className="postReplythree" onClick={handleReplyClickthree} />
                                </div>
                            )}


                        </div>
                        <div className="fourth-comments">
                            <div className="darktheme">

                                <span onClick={handleReplyClickfourth} className="reply-fourth">Reply</span>
                                <img src="/images/Ryan.png" alt="" />

                                <h3>Ryan Welles</h3>
                                <h4>@voyager.344</h4>
                                <h5 className='Second'><span> @annev1990  </span> Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness.
                                    I'd prefer not to use one of such extensions, however, for security and privacy reasons.</h5>

                            </div>


                            {showInputfourth && (
                                <div>
                                    <input type="text" className="moss-replyfourth" placeholder="Add your comment here..." />
                                    <Button text="Post Reply" className="postReplyfourth" onClick={handleReplyClickfourth} />
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="addComment">
                        <span>Add Comment</span>
                        <input type="text" className="moss-replyfourth" placeholder="Add your comment here..." />
                        <p>225 characters left</p>
                        <Button text="Post Reply" className="postcomment" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details