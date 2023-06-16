import React from 'react'
import './skills.css';
export default function Skills() {
  return (
    <div className=' main'>

      <h1 className='heading'>MY SKILLS</h1>
      
     
      <div className='row col-9 '>
      <a href="https://www.w3schools.com/html/">
        <div class="card mt-5 ml-5 skill" style={{ "width": " 10rem" }}>
          <img src="./images/html.jpg" class="card-img-top" alt="..." />
        </div>
        </a>

       
       <a href="https://www.w3schools.com/css/">
        <div class="card mt-5 ml-5 skill" style={{ "width": " 10rem" }}>
          <img src="./images/css.png" class="card-img-top" alt="..." />
        </div>
        </a>

        <a href="https://www.w3schools.com/js/">
        <div class="card mt-5 ml-5 skill" style={{ "width": " 10rem" }}>
          <img src="./images/js.jpg" class="card-img-top" alt="..." />
        </div>
        </a>


        <a href="https://www.w3schools.com/bootstrap/">
        <div class="card mt-5 ml-5 skill" style={{ "width": " 10rem" }}>
          <img src="./images/bootstrap.png" class="card-img-top" alt="..." />
        </div>
        </a>

        
        <a href="https://www.w3schools.com/whatis/whatis_github.asp">
        <div class="card mt-5 ml-5 skill" style={{ "width": " 10rem" }}>
          <img src="./images/git.png" class="card-img-top" alt="..." />
        </div>
        </a>
        
        <a href="https://www.w3schools.com/REACT/DEFAULT.ASP">
        <div class="card mt-5 ml-5 skill" style={{ "width": " 10rem" }}>
          <img src="./images/react.png" class="card-img-top" alt="..." />
        </div>
        </a>
      </div>





    </div>
  )
}
