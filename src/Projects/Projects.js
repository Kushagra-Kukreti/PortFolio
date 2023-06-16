import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

export default function Projects() {
    return (
        <div className='row' >


                <div class="card ml-5 mt-5 " style={{"width": "18rem"}}>
                    <img src="./images/mario.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body bg-danger">
                            <h5 class="card-title">MARIO GAME</h5>
                            <p class="card-text">This is a web version of a well known and a very popular game called mario.</p>
                            <a href="https://kushagra-kukreti.github.io/Mario/" class="btn btn-secondary">Lets Play</a>
                        </div>
                </div>

                <div class="card ml-5 mt-5 " style={{"width": "18rem"}}>
                    <img src="./images/portfolio.png" class="card-img-top" alt="..."/>
                        <div class="card-body bg-secondary">
                            <h5 class="card-title">PORTFOLIO</h5>
                            <p class="card-text">ThiS is my personal portfolio website showing my work and my skills.</p>
                            <Link to ={"/"} class="btn btn-info">Lets Explore</Link>
                        </div>
                </div>

                <div class="card ml-5 mt-5 " style={{"width": "18rem"}}>
                    <img src="./images/todos.png" class="card-img-top" alt="..."/>
                        <div class="card-body bg-success">
                            <h5 class="card-title">TODOS LIST</h5>
                            <p class="card-text">This is a web version of a very useful todos app to keep the track of all your work.</p>
                            <a href="https://mytodonoter.netlify.app/" class="btn btn-warning">Lets Add</a>
                        </div>
                </div>






        </div>
    )
}
