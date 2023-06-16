import React from 'react'
import LowerContent from './LowerContent'
import './home.css';
 
export default function HomeContent() {

  return (
    <div>
      <div className='d-flex flex-row ml-4'>

        <div id ="top-heading" class="card">
          <div class="card-body">
            <p class="card-text">UNLIMITED PRETENCIOUS YOUR IDEAS</p>
          </div>
        </div>

        <div id="top-square" class="card bg-primary">
          <img src="./images/mainImage.jpg" class="card-img-top" alt="" />
        </div>

      </div>

      <div className='d-flex flex-row w-50 ml-4 p-0 mt-0'>
        <div class="card-body text-light p-1 h-0">
          FULL STACK DEVELOPER
        </div>

        <div class="card-body text-light p-1 ml-8 mr-0 h-0">
          PROBLEM SOLVER
        </div>
      </div>

      {/* Section for information */}

      <div className='d-flex flex-row'>

      

        <LowerContent/>

      </div>

    </div>


  )
}
