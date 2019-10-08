import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';


function App() {

  //Use useState with 3 states
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  // Method to consult the song lyrics API
  const consultarAPILetra = busqueda => {
    console.log(busqueda);
  }

  return (
    <Fragment>
        <Formulario 
          consultarAPILetra={consultarAPILetra}
        />

    </Fragment>
  )
  
}

export default App;