import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
import AboutMiddle from './AboutMiddle'
export default function AboutContent() {
    const style = {
        height: "100vh",
        backgroundColor: "#0f0f0f"
    }

    const style1 = {
        height: "40vh",
        backgroundColor: "#0f0f0f"
    }

    const style2 = {
        height: "48vh",
        backgroundColor: "#0f0f0f",
    }

   

    return (

        // left-sidebar
        <div className='d-flex flex-row mt-3'>
            <div className="card col-3" style={style}>
                <div className="card-body">


                    {/* PHOTO-SECTION */}

                    <div>
                        <div className='d-flex justify-content-center'>
                            <img id="about-profile-photo" src="./images/mainImage.jpg" class="card-img-top" />
                        </div>

                        <div className='text-light d-flex justify-content-center mt-1'>Kushagra Kukreti</div>

                    </div>

                    {/* PROGRESS BAR VISUAL FOR SKILLS */}
                    <div className='mt-3 '>
                        <p className='text-light'>SKILLS</p>
                        <hr className='bg-light' />
                        <p className='text-light'>HTML</p>
                        <div className="progress mb-2">
                            <div id="progress-1" class="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className='text-light'>CSS</p>
                        <div class="progress mb-2">
                            <div id="progress-2" class="progress-bar bg-info" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className='text-light'>JAVASCRIPT</p>
                        <div class="progress mb-2">
                            <div id="progress-3" class="progress-bar bg-warning" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className='text-light'>DATA STRUCTURES</p>
                        <div class="progress mb-2">
                            <div id="progress-4" class="progress-bar bg-primary" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <p className='text-light'>ALGORITHMS</p>
                        <div class="progress mb-2">
                            <div id="progress-4" class="progress-bar bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* right-section */}
            <div className='d-flex flex-column col-9'>

                {/* right section upper part */}
                <div className="card" style={style1}>
                    <div className="card-body">
                        <span id="cancel-btn-container" className='mr-0 mt-0'>
                            <Link to={"/"}> 


                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-x-circle-fill float-right btn  m-0 p-0" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                </svg>


                            </Link>
                        </span>
                        <p className="text-light mt-0" id="top-content"> Discover my development and problem solving skills</p>
                    </div>
                </div>

                {/* right section middle part */}
                <AboutMiddle/>

                {/* right section lower part */}
                <div className='d-flex flex-row mt-1'>
                    <div className="card col-4" style={style2}>
                        <div className="card-body text-light">
                            <h5 class="card-title text-primary">Web Development</h5>
                            <p class="card-text"> How amazing it is when we can create what we think, click below to see my Web Development work. A very known yet interesting work with a lot of memories connected to it.</p>

                            <div className='mt-4'>
                                <a href="https://github.com/stars/Kushagra-Kukreti/lists/projects">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="blue" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                </a>
                              
                            </div>



                        </div>
                    </div>
                    <div className="card col-4 ml-1" style={style2}>
                        <div className="card-body text-light">
                            <h5 class="card-title text-success">Data Strucures & Algorithms</h5>
                            <p class="card-text">Everyone can write a code but important are those people who write efficient one,click below to see my acheivements in Data Structures & Algorithms.</p>

                            <div className='mt-5'>
                                <a href="https://leetcode.com/Kushagra_Kukreti/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="card col-4 ml-1" style={style2}>
                        <div className="card-body text-light">
                            <h5 class="card-title text-danger">Problem Solving Skills</h5>
                            <p class="card-text">Problem is not the problem ,problem is solution to the problem.Problem solving is a skill developed over time, click below to see my problem solving skills.</p>

                            <div className='mt-5'>
                                <a href="https://auth.geeksforgeeks.org/user/kukretikushagra">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                                    <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                </svg>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
