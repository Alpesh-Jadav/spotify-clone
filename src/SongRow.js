import React from 'react'
import './SongRow.css'
import msToTime from './util'
function SongRow({ track, add }) {

    return (

        <div className="songRow">

            <img className="songRow__album" src={track.album.images[0].url} alt="poster" />
            <div className="songRow__info">
                <div className="songRow__details">

                    <h1>{track.name}</h1>
                    {!add && <h5>{msToTime(track.duration_ms)}</h5>}
                </div>
                <p>
                    {track.artists.map((artist) => artist.name).join(", ").substring(0,40) + " ..."}
                    {' • '}{track.album.name.substring(0,22) + " ..."}
                </p>

            </div>
            {add === true && <button className="songRow__addBtn">ADD</button>}
        </div>

    )
}

export default SongRow
