import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';


function App() {

  //Use useState with 3 states
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  // Method to consult the song lyrics API
  const consultarAPILetra = async  busqueda => {
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    // Consult API
    const resultado = await axios(url);

    // Store Artist searched
    agregarArtista(artista);

    // Store Lyrics in the state
    agregarLetra(resultado.data.lyrics);

  }

  // Method to consult the Info API
  const consultarAPIInfo = async () => {
    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    const resultado = await axios(url);
    
    agregarInfo(resultado.data.artists[0]);
    //console.log(info);
    

  }

  useEffect(
    () => {
      consultarAPIInfo();
    }, [artista]
  )

  return (
    <Fragment>
        <Formulario 
          consultarAPILetra={consultarAPILetra}
        />

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">

                </div>
                <div className="col-md-6">
                    <Cancion 
                      letra={letra}
                    />
                </div>
            </div>
        </div>

    </Fragment>
  )
  
}

export default App;