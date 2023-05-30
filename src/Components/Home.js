import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className='d-flex justify-content-center bg-white content-container' style={{height:"500px"}} >
        <div className='align-self-center p-5 p-5' style={{backgroundColor: "rgb(240,240,250)",borderRadius:"10px"}}>
            <div className='p-5'>
                <h1 className='d-inline pe-3' style={{color:"#3c4048"}}>Weather App</h1>
                <i className="fa-solid fa-cloud h1" style={{color:"#81c6e8"}}></i>
                <br />
                <p style={{color:"#81c6e8"}}>Free Weather App</p>
                <Link to="/Weather" className='text-decoration-none' style={{color:"#3c4048"}}>Check Weather</Link>
            </div>
            </div>
        </div>
    </div>
  )
}
