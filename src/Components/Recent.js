import React from 'react'

function Recent(props) {
    let data;
    if (props.recent == null) {
        data = "";
    }
    else {
        data = props.recent.map(
            (recentData, id) => {
                return <li key={id} onClick={() => props.reSearch(recentData.lat, recentData.lon) }>{recentData.city}</li>
            })
    }
    return (
        <div>
            <h3>Recent Data</h3>
            <ul className='text-start list-unstyled'>{data}</ul>
        </div>
    )
}

export default Recent