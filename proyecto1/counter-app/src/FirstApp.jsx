import PropTypes from 'prop-types';

/*

function App(){
    //document.createElement ...
    return <h1>Hola mundo</h1>;
}

export default App; // cuando tiene default en el 
fichero destino no se pone {}, pero si no tiene default
se tiene que poner {}

*/
const saludo= ()=>{
    return <h1>imprimiendo desde un metodo </h1>;
}
//Es importante que el metodo saludo y los demas metodos esten fuera porque
// a la hora de renderizar este se llamara una unica vez y no dos veces
// en el caso de que este dentro del componente.

export const FirstApp = ({ title, author, anio}) =>{

    return (
        <>hola
            {saludo()}
            Este es el primer elemento : {title} <br/>
            Este es el segundo elemento : {author} <br/>
            Este es el tercer elemento : {anio}   <br/>

            <h1>Soy subtitulo</h1>
        </>
    );
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    anio :PropTypes.number
}