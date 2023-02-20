import PropTypes from 'prop-types';

const name = 'Cristian'; // es recomendado sacar del componente si no pertenece a la logica del componente
const persona = {
    nombre: 'cris',
    edad: 23,
}

export const FirstApp = ({car}) => {

  return (
    <>
        <h1> {name } : { car }</h1>
        <p>info de persona {persona.nombre}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores mollitia velit cum aliquam asperiores iste facilis, aut quod aliquid distinctio eum! Provident earum illum dicta corrupti fugit quibusdam corporis quod!</p>
    </>
  )
}

FirstApp.propTypes = {
    car: PropTypes.string.isRequired
}

// este regla entra primero que los propTypes
FirstApp.defaultProps = {
    car: 'No hay informacion que procesar'
}
