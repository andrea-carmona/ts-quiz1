import React from 'react'

import Button from '@mui/material/Button'
import Chip  from '@mui/material/Chip' 

function TupleComponent() {
 
  const [state, setState] = React.useState<[boolean, string]>([false, '']);

  
  const updateState = (newState: boolean | string) => {
    if (typeof newState === 'boolean') {
      setState([newState, state[1]]);
    } else {
      
      setState([state[0], newState as string]);
    }
  };

  return (
    <div>
      <p>Estado Booleano: {state[0] ? 'Verdadero' : 'Falso'}</p>
      <p>Estado String: {state[1]}</p>
      <Button startIcon={<Chip label="Boleand" color="primary" />} onClick={() => updateState(!state[0])}></Button>
      <Button startIcon={<Chip label="String" color="secondary" />} onClick={() => updateState('Nuevo mensaje')}></Button>
    </div>
  );
}

export default TupleComponent;


