import React from 'react'
import "../style/pages/roadmap.scss"
import { Link } from 'react-router-dom'
import Button from "../components/Button"
const Roadmap = () => {
    return (
        <div className='roadmap'>
            <div className="container">
                {/* header */}
                <div className="header">
                    <div className='headerAlign'>
                        <div>
                          <Link to="/editing"> <img src="/images/whitevector.png" alt="" /></Link>  
                            <Link to="/editing"><span>Go Back</span></Link>
                        </div>
                        <h2>Roadmap</h2>
                    </div>
                    <div>
                        <Link to="/details">   <Button text="+Add Feedback" className="addButton" /></Link>
                    </div>
                </div>
                {/* Headerend */}

                {/* Content */}
                <div className="allContent">
                    <div className="contentYellow">
                        <h3 className='plan'>Planned (2)</h3>
                        <span className='ideas'>Ideas prioritized for research</span>
                    </div>
                    <div className="contentPurple">
                        <h3 className='progress'>In-Progress (3)</h3>
                        <span className='developed'>Currently being developed</span>
                    </div>
                    <div className="contentGreen">
                        <h3 className='live'>Live (1)</h3>
                        <span className='features'>Released features</span>
                    </div>
                </div>
                {/* EndContent */}

                {/* All cards */}

                <div className="cards">
                    {/* First card */}
                    <div className="first-cardsYellow">
                        <div className='yellowCard'>
                            {/* 1111111 */}
                            <div className='aroundFlex'>
                                <div className="cevre"></div>
                                <p className='onePlan'>Planned</p>
                            </div>

                            <div>
                                <h2 className='comprehensive'>More comprehensive reports</h2>
                                <p className='detailed'>It would be great to see a more detailed breakdown of solutions.</p>
                            </div>

                            <div>
                                <Button text="Feature" className="feature" />
                            </div>

                            <div className='reports'>
                                <div className='one-message-count'>
                                    <img src="/images/greenvector.png" alt="" />
                                    <p className='count112'>123</p>
                                </div>

                                <div className='messageFlex'>
                                    <img className='message-one' src="/images/message.png" alt="" />
                                    <p className='message-count-one' >2</p>
                                </div>
                            </div>

                            {/* Firtscardend */}
                        </div>

                        <div className='yellowCard'>
                        <div className='aroundFlex'>
                                <div className="cevre"></div>
                                <p className='onePlan'>Planned</p>
                            </div>

                            <div>
                                <h2 className='comprehensive'>Learning paths</h2>
                                <p className='detailed'>Sequenced projects for different goals to help people improve.</p>
                            </div>

                            <div>
                                <Button text="Feature" className="feature" />
                            </div>

                            <div className='reports'>
                                <div className='one-message-count'>
                                    <img src="/images/greenvector.png" alt="" />
                                    <p className='count112'>28</p>
                                </div>

                                <div className='messageFlex'>
                                    <img className='message-one' src="/images/message.png" alt="" />
                                    <p className='message-count-one' >1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2-ci hisse */}
                    <div className="first-cardsYellow">
                        {/* 1-------1 */}
                        <div className='purpleCard'>
                            {/* 1111111 */}
                            <div className='aroundFlex'>
                                <div className="cevre"></div>
                                <p className='onePlan'>In Progress</p>
                            </div>

                            <div>
                                <h2 className='comprehensive'>One-click portfolio generation</h2>
                                <p className='detailed'>Add ability to create professional looking portfolio from profile.</p>
                            </div>

                            <div>
                                <Button text="Feature" className="feature" />
                            </div>

                            <div className='reports'>
                                <div className='one-message-count'>
                                    <img src="/images/greenvector.png" alt="" />
                                    <p className='count112'>62</p>
                                </div>

                                <div className='messageFlex'>
                                    <img className='message-one' src="/images/message.png" alt="" />
                                    <p className='message-count-one' >1</p>
                                </div>
                            </div>

                            {/* Firtscardend */}
                        </div>
                        {/* 1111111end */}

                        {/* 2222222 */}
                        <div className='purpleCard'>
                            {/* 1111111 */}
                            <div className='aroundFlex'>
                                <div className="cevre"></div>
                                <p className='onePlan'>In Progress</p>
                            </div>

                            <div>
                                <h2 className='comprehensive'>One-click portfolio generation</h2>
                                <p className='detailed'>Add ability to create professional looking portfolio from profile.</p>
                            </div>

                            <div>
                                <Button text="Feature" className="feature" />
                            </div>

                            <div className='reports'>
                                <div className='one-message-count'>
                                    <img src="/images/greenvector.png" alt="" />
                                    <p className='count112'>62</p>
                                </div>

                                <div className='messageFlex'>
                                    <img className='message-one' src="/images/message.png" alt="" />
                                    <p className='message-count-one' >1</p>
                                </div>
                            </div>

                            {/* Firtscardend */}
                        </div>
                        {/* 222222end */}

                        {/* 33333333333 */}
                        <div className='purpleCard'>
                            {/* 1111111 */}
                            <div className='aroundFlex'>
                                <div className="cevre"></div>
                                <p className='onePlan'>In Progress</p>
                            </div>

                            <div>
                                <h2 className='comprehensive'>Bookmark challenges</h2>
                                <p className='detailed'>Be able to bookmark challenges to take later on.</p>
                            </div>

                            <div>
                                <Button text="Bug" className="feature" />
                            </div>

                            <div className='reports'>
                                <div className='one-message-count'>
                                    <img src="/images/greenvector.png" alt="" />
                                    <p className='count112'>9</p>
                                </div>

                                <div className='messageFlex'>
                                    <img className='message-one' src="/images/message.png" alt="" />
                                    <p className='message-count-one' >0</p>
                                </div>
                            </div>

                            {/* Firtscardend */}
                        </div>
                        {/* 33333end */}
                    </div>


                    {/* two partend */}



                    {/*3 part  */}
                    <div className="first-cardsYellow">
                        {/* 1-------1 */}
                        <div className='greenCard'>
                            {/* 1111111 */}
                            <div className='aroundFlex'>
                                <div className="cevre"></div>
                                <p className='onePlan'>In Progress</p>
                            </div>

                            <div>
                                <h2 className='comprehensive'>Animated solution screenshots</h2>
                                <p className='detailed'>Screenshots of solutions with animations don’t display content.</p>
                            </div>

                            <div>
                                <Button text="Enhancement" className="feature" />
                            </div>

                            <div className='reports'>
                                <div className='one-message-count'>
                                    <img src="/images/greenvector.png" alt="" />
                                    <p className='count112'>71</p>
                                </div>

                                <div className='messageFlex'>
                                    <img className='message-one' src="/images/message.png" alt="" />
                                    <p className='message-count-one' >2</p>
                                </div>
                            </div>

                            {/* Firtscardend */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap