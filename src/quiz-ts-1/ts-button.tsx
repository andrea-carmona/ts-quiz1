import React from 'react'

interface CounterState {
  count: number;
}


function EventHandlingComponent() {
  // Estado inicializado con una interface
  const [state, setState] = React.useState<CounterState>({ count: 0 });

  // Manejador de eventos tipado con TypeScript
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Actualizar el estado para incrementar el contador
    setState(prevState => ({ count: prevState.count + 1 }));
  };

  return (
    <div>
      <p>Contador de clics: {state.count}</p>
      <button onClick={handleClick}>Hazme clic</button>
    </div>
  );
}

export default EventHandlingComponent;
