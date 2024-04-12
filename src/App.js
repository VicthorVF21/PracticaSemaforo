import React, { useState } from 'react';
import './App.css'; 

function App() {

  const [RojoON, setRojoOn] = useState(false);
  const [AmarilloON, setAmarilloON] = useState(false);
  const [VerdeON, setVerdeOn] = useState(false);

  const EncenderLuz = (color) => {
    setRojoOn(color === 'Rojo');
    setAmarilloON(color === 'Amarillo');
    setVerdeOn(color === 'Verde');
  };


  return (
    <div className="Semaforo">
      <div
        className={`luz roja ${RojoON ? 'on' : ''}`}
        onClick={() => EncenderLuz('Rojo')}
      ></div>
      <div
        className={`luz amarilla ${AmarilloON ? 'on' : ''}`}
        onClick={() => EncenderLuz('Amarillo')}
      ></div>
      <div
        className={`luz verde ${VerdeON ? 'on' : ''}`}
        onClick={() => EncenderLuz('Verde')}
      ></div>
    </div>
  );
}

export default App;
