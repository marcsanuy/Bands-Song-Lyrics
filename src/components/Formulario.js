import React, { useState } from 'react';

function Formulario({consultarAPILetra}) {

    const [busqueda, agregarBusqueda] = useState({
        artist: '',
        song: ''
    })

    //Function for update state inputs

    const actualizarState = e => {
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    // When we submit the form
    const enviarInformacion = e => {
        e.preventDefault();

        consultarAPILetra(busqueda);
    }

    return (
        <div className="bg-dark">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit={enviarInformacion}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Search Lyrics Songs</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artist" 
                                        placeholder="Artist Name" 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="song" 
                                        placeholder="Song name" 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-success float-right">Search</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;