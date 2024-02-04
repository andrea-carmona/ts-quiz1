import React from 'react';
import Button from '@mui/material/Button';

function Counter() {
  const [count, setCount] = React.useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <Button variant='contained' color='primary' onClick={increment}>Incrementar</Button>
      {/* Deshabilitar el botón si count es 0 */}
      <Button variant='contained' color='secondary' onClick={decrement} disabled={count === 0}>Decrementar</Button>
    </div>
  );
}

export default Counter;


