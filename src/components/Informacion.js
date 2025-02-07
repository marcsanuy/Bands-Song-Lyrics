import React from 'react';

function Informacion ({info}) {

    if(Object.keys(info).length === 0 ) return null;
    
    return (
        <div className="card border-dark">
            <div className="card-header bg-dark text-white text-center font_weight-bold">
                Artist Information:
            </div>
            <div className="card-body bg-secondary">
                <img src={info.strArtistThumb} alt="Artist Logo" />
                <p className="card-text text-center">Musical Genre: {info.strGenre}</p>
                <h2 className="card-text text-center">Biography</h2>
                <p className="card-text">{info.strBiographyEN}</p>
                <p className="card-text">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>            
            </div>
        </div>
    )
}

export default Informacion;