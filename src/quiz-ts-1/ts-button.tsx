import React from 'react'

import { Button } from '@mui/material';

interface CounterState {
  count: number;
}


function EventHandlingComponent() {
  
  const [state, setState] = React.useState<CounterState>({ count: 0 });

  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    setState(prevState => ({ count: prevState.count + 1 }));
  };

  return (
    <div>
      <p>Contador de clics: {state.count}</p>
      <Button variant='contained' color='error' onClick={handleClick}>Hazme clic</Button>
    </div>
  );
}

export default EventHandlingComponent;
