import React from 'react'

function TupleComponent() {
  // Definir el estado como una tupla que contiene un booleano y un string
  const [state, setState] = React.useState<[boolean, string]>([false, '']);

  // Ejemplo de función que utiliza aserción de tipo
  const updateState = (newState: boolean | string) => {
    if (typeof newState === 'boolean') {
      setState([newState, state[1]]);
    } else {
      // Aserción de tipo para tratar 'newState' como un string
      setState([state[0], newState as string]);
    }
  };

  return (
    <div>
      <p>Estado Booleano: {state[0] ? 'Verdadero' : 'Falso'}</p>
      <p>Estado String: {state[1]}</p>
      <button onClick={() => updateState(!state[0])}>Cambiar Booleano</button>
      <button onClick={() => updateState('Nuevo mensaje')}>Cambiar String</button>
    </div>
  );
}

export default TupleComponent;


