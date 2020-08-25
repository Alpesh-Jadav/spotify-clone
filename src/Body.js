import React from 'react'
import './Body.css'
import Header from './Header'
function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify}/>

            <div className="body__info">
                <img src="https://i.pinimg.com/236x/ab/ee/ce/abeecee4d179e06f29f343fe43969ba1.jpg" alt="Discovery Weekly"/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description...</p>

                </div>
            </div>
        </div>
    )
}

export default Body
