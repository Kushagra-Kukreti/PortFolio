import{ React,useState }from 'react'
import './contact.css'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
export default function Contact() {

    const obj1 = (e) => {
        let a = document.getElementById(e.target.id);
        a.style.background = "#0f0f0f";
        a.style.bottomBorder = "white";

    }

    const initialValues ={
        name:"",
        email:"",
        message:""
    }
     
        const {values,errors,handleBlur,handleChange,handleSubmit} = useFormik({
            initialValues:initialValues,
            validationSchema:signUpSchema,
            onSubmit:(values)=>{
            console.log(values)
            }
        })
    

    
       
  
    

    return (
        <>
            {/* <HomeHeader /> */}
            <div className='d-flex flex-row mt-2'>
                {/* left side  */}
                <div className="card col-4 ml-5 p-0 mr-0 theme-setting">
                    <img id="contact-image" src="./images/contactImage.jpg" class="card-img-top" alt="" />
                </div>

                {/* right side */}
                <div className="card col-8 theme-setting ">
                    <span id="cancel-btn-container" className='mr-5 mt-1'>
                        <Link to ={"/"}><button id="cancel-btn" class=" float-right btn col-1 m-0 p-0 btn-danger">back</button></Link>
                        </span>

                    <form onSubmit={handleSubmit} className='mr-0 ml-4'>
                        <h1 id="contact-heading" className='text-light mb-3 font-weight-bold'>Contact Us</h1>


                        <div className="form-group ">
                        

                            <label className='text-light' for="exampleInputEmail1">Full Name</label>
                            <input type="text" name='name'  className=" theme-color form-control col-9 p-0 text-light" id="name" aria-describedby="emailHelp" onClick={obj1} 
                            value = {values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            
                            />



                        </div>

                        <div className="form-group">


                            <label className='text-light' for="exampleInputPassword1">Email</label>
                            <input type="email" name='email' id="email" className=" theme-color form-control col-9 p-0 text-light"  onClick={obj1}
                            value = {values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />
                            

                        </div>


                        <div className="form-group">


                            <label className='text-light' for="exampleInputPassword1">Message</label>
                            <input type="text" name='message' className=" theme-color form-control col-9 p-0 text-light" id="msg" onClick={obj1} 
                            value = {values.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            />

                        </div>

                    <button type='submit'>Submit</button>
                    </form>

                </div>


            </div>
        </>
    )
}
