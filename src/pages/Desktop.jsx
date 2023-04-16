import React, { useState, useRef } from 'react'
import "../style/pages/desktop.scss"
import Button from '../components/Button'
import LeftDashboard from '../components/LeftDashboard'
import Header from '../components/Header'
const Desktop = () => {


    return (
        <div className='desktop'>
            <div className="container">
                <div className="all">
                    <LeftDashboard />
                    <div className='right'>
                        <Header />
                        <div className="right-side">



                            {/* Cards part */}
                            <div className="cards">
                                {/* First cards */}
                                <div className="card-enhancament">
                                    <div className='card-contentFlex'>
                                        <div className='one-message-count'>
                                            <img src="/images/greenvector.png" alt="" />
                                            <p>112</p>
                                        </div>
                                        <div>
                                            <p className='solutions'>Add tags for solutions</p>
                                            <p className='spesific'>Easier to search for solutions based on a specific stack.</p>
                                            <Button className="enhancementButton" text="Enhancement" />
                                        </div>
                                    </div>

                                    <div className='message-first'>
                                        <img className='message-one' src="/images/message.png" alt="" />
                                        <p className='message-count-one' >2</p>
                                    </div>
                                </div>
                                {/* First cards end */}

                                {/* second card */}
                                <div className="card-feature">
                                    <div className="card-contentFlextwo">
                                        <div className="two-message-count">
                                            <Button />
                                            <img src="/images/greenvector.png" alt="" />
                                            <p>99</p>
                                        </div>
                                        <div>
                                            <p className='options'>Add a dark theme option</p>
                                            <p className='darkmode'>It would help people with light sensitivities and who prefer dark mode.</p>
                                            <Button className="featureButton" text="Feature" />
                                        </div>
                                    </div>

                                    <div className='message-second'>
                                        <img className='message-two' src="/images/message.png" alt="" />
                                        <p className='message-count-two' >4</p>
                                    </div>
                                </div>
                                {/* second card end */}

                                {/* third card */}
                                <div className="card-feature-qa">
                                    <div className="card-contentFlexthree">

                                        <div className="third-message-count">
                                            <Button />
                                            <img src="/images/greenvector.png" alt="" />
                                            <p>65</p>
                                        </div>
                                        <div>
                                            <p className='hubs'>Q&A within the challenge hubs</p>
                                            <p className='referance'>Challenge-specific Q&A would make for easy reference.</p>
                                            <Button className="feature-qaButton" text="Feature" />
                                        </div>
                                    </div>

                                    <div className='message'>
                                        <img className='message-third' src="/images/message.png" alt="" />
                                        <p className='message-count-third' >1</p>
                                    </div>
                                </div>
                                {/* third card end */}

                                {/* fourth card */}
                                <div className="card-feature-image">
                                    <div className="card-contentFlexfour">

                                        <div className="fourth-message-count">
                                            <Button />
                                            <img src="/images/greenvector.png" alt="" />
                                            <p>51</p>
                                        </div>
                                        <div>
                                            <p className='feedback-two'>Allow image/video upload to feedback</p>
                                            <p className='images'>Images and screencasts can enhance comments on solutions.</p>
                                            <Button className="enhancament-videoButton" text="Enhancement" />
                                        </div>
                                    </div>

                                    <div className='message'>
                                        <img className='message-fourth' src="/images/message.png" alt="" />
                                        <p className='message-count-fourth' >2</p>
                                    </div>
                                </div>
                                {/* fourth card end */}

                                {/* fiveth card  */}
                                <div className="card-feature-preview">
                                    <div className="card-contentFlexfifth">
                                    <div className="sixeth-message-count">
                                        <Button />
                                        <img src="/images/greenvector.png" alt="" />
                                        <p>3</p>
                                    </div>
                                    <div>
                                    <p className='preview'>Ability to follow others</p>
                                    <p className='filter'>Stay updated on comments and solutions other people post.</p>
                                    <Button className="feature-filterButton" text="Feature" />
                                    </div>
                                    </div>

                                    <div className='message'>
                                        <img className='message-sixeth' src="/images/message.png" alt="" />
                                        <p className='message-count-sixeth' >0</p>
                                    </div>
                                </div>
                                {/* fiveth card end */}

                                {/* sixeth card */}

                                {/* sixeth card end */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Desktop