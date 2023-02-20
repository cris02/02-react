import PropTypes from 'prop-types'
import { useState } from 'react';

// se saco del componente porque no tiene nada que ver con el componente para que cuando se renderice de nuevo no vuelva a referenciar de nuevo la funcion y se ahorra la memoria
// const handleAdd = (event) => {
//     console.log(event);
// }

export const CounterApp = ({value}) => {

    // nota: cuando hay un cambio de estado se renderizar de nuevo todo el componente
    const [counter, setCounter] = useState(value);

    const handleAdd = (event) => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        setCounter(counter - 1)
    }

    const handleReset = () => setCounter(value)

  return (
    <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>

        <button onClick={handleAdd}>+</button>
        <button onClick={handleRestar}>-</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
