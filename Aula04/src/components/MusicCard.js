import React from 'react';
import editIcon from '../assets/images/edit-icon.png';
import deleteIcon from '../assets/images/delete-icon.png';
import starSolidIcon from '../assets/images/star-solid.png';

function MusicCard(props) {
    return (
        <div className="music-box">
            <div className="img-music"></div>
            <div className="music-data">
                <div className="icons">
                    <img src={editIcon} alt="" className="edit" />
                    <img src={deleteIcon} alt="" className="delete" />
                    <img src={starSolidIcon} alt="" className="stars" />
                </div>
                <div className="name">
                    <label> Nome:
                        <input type="text" value={props.name}/>
                    </label>
                </div>
                <div className="genre">
                    <label> Genêro:
                        <input type="text" value={props.genre}/>
                    </label>
                </div>
                <div className="release">
                    <label> Lançamento:
                        <input type="text" value={props.year}/>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default MusicCard;