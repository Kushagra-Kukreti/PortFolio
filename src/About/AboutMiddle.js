import React from 'react'
import './About.css'

export default function AboutMiddle() {
    const style3 = {
        height: "10vh",
        backgroundColor: "#0f0f0f",
    }
    return (

        <div>
            <div  className="card mt-1" style={style3}>
                <div className="card-body d-flex flex-row">

                    <p id="moving-text" className='text-info'>I believe coding is fundamental to literacy in the future.</p>

                </div>
            </div>

        </div>
    )
}
