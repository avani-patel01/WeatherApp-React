import React from 'react'

export default function Result(props) {
  const {weatherData:data} = props;
  if(!data){
    return null;
  }
  function kToc(k){
    return (k - 273.15).toFixed(2) + " C";
  }
  return (
    <div>
      <div className='row'>
        <div className='col'>
            <div className='card border-primary'>
                <div className='card-body'>
                    <h4 className='card-title'>
                      <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='' /> {data.name} ({kToc(data.main.temp)})<span className='ps-2'>{data.weather[0].description}</span>
                    </h4>
                    <div className='row'>
                      <div className='col'>
                        <div className='row'>
                          <table className='table'>
                            <tbody>
                              <tr>
                                <th>Feels Like</th>
                                <td>{kToc(data.main.feels_like)}</td>
                              </tr>
                              <tr>
                                <th>Min. Temp</th>
                                <td>{kToc(data.main.temp_min)}</td>
                              </tr>
                              <tr>
                                <th>Max. Temp</th>
                                <td>{kToc(data.main.temp_max)}</td>
                              </tr>
                              <tr>
                                <th>Sun Rise</th>
                                <td>{data.sys.sunrise}</td>
                              </tr>
                              <tr>
                                <th>Sun Set</th>
                                <td>{data.sys.sunset}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
