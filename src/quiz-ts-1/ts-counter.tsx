import React from 'react';

function Counter() {
  const [count, setCount] = React.useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  // Modificar esta función para prevenir que count sea menor que 0
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
      {/* Deshabilitar el botón si count es 0 */}
      <button onClick={decrement} disabled={count === 0}>Decrementar</button>
    </div>
  );
}

export default Counter;


