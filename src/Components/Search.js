import React from 'react'

export default function Search(props) {
  return (
    <div style={{ backgroundColor: "rgb(240,240,250)", borderRadius: "10px" }}>
      <div className='container p-5 m-5'>
        <div className='row'>
          <div className='col-lg-5'>
            <label>Enter City Name</label><br /><br />
            <input type='text' className='form-control border-0' name='city' id='city' onChange={props.change} value={props.city}
              aria-describedby='helpId' placeholder='Enter City Name' />
          </div>
          <div className='col-lg-1 text-muted'>
            <label htmlFor=''></label>
            <h5>Or</h5>
          </div>
          <div className='col-lg-5'>
            <div className='form-group'>
              <label htmlFor=''>Get Co-ordinate</label>
              <button className='btn fa fa-crosshairs' onClick={props.location}></button>
              <div className='row '>
                <div className='form-floating mb-3'>
                  <input type='number' step="any" className='form-control col border-0' id="floatingInput let" name="lat" aria-describedby='helpId' onChange={props.change} value={props.lat} placeholder="Lat:" />
                  <label className="ps-4" htmlFor="floatingInput">Lat:-</label>
                </div>
                <div className='form-floating mb-3'>
                  <input type='number' step="any" className='form-control col border-0' id="floatingInput let" name="lon" aria-describedby='helpId' onChange={props.change} value={props.lon} placeholder="Lon:" />
                  <label className="ps-4" htmlFor="floatingInput">Lon:-</label>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='text-center'>
          <button className='btn btn-primary fa fa-search d-inline-block' style={{letterSpacing:"2px"}} onClick={props.search}> search</button>
        </div>
      </div>
    </div>
  )
}
