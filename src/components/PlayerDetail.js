import React from 'react'

function PlayerDetail(props) {
    return (
        <div className="playerdetails">
            <div className="playerdetail__img">
                <img src={props.song.img_src} alt=""/>
            </div>
            <h3 className="playerdetail__title">{props.song.title}</h3>
            <h4 className="plaerdetail__artist">{props.song.artist}</h4>
        </div>
    )
}

export default PlayerDetail
