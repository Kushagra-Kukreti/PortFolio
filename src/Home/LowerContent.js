import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
export default function LowerContent() {

    return (
        <div className='d-flex flex-row mt-5'>
            <div className='d-flex flex-column col m-auto'>
                <a href="./docs/Kushagra_Kukreti.pdf" target='_main'><button id="cv-btn" type="button" class="btn btn-success p-3 btn-sm"  ><b>View Resume</b></button></a>
                <a href="./docs/Kushagra_Kukreti.pdf" download> <button id="download-btn" type="button" class="btn btn-outline-secondary p-3 mt-3 btn-sm"  ><b>Download Resume</b></button></a>
            </div>
            <div className="card bg-secondary col home-lower-cards" >

                <div className="card-body">

                    <div class="d-flex justify-content-end">
                        <Link to={"Projects"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
                            </svg>
                        </Link>
                    </div>

                    <h2 className="card-title text-align-right sections-heading">PROJECTS</h2>
                </div>
            </div>
            <div className="card bg-warning col home-lower-cards"  >

                <div className="card-body">
                    <div class="d-flex justify-content-end">
                        <Link to={"Info"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
                            </svg>
                        </Link>
                    </div>



                    <h2 className="card-title sections-heading ">ACHIEVEMENTS</h2>


                </div>
            </div>
            <div className="card bg-danger col home-lower-cards"  >

                <div className="card-body">
                    <div class="d-flex justify-content-end">
                        <Link to={"Skills"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z" />
                            </svg>
                        </Link>

                    </div>
                    <h2 className="card-title sections-heading">SKILLS</h2>
                </div>
            </div>

        </div>
    )
}
