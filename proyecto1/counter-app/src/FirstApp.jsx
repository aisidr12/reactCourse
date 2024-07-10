import { Fragment } from "react";
/*

function App(){
    //document.createElement ...
    return <h1>Hola mundo</h1>;
}

export default App; // cuando tiene default en el 
fichero destino no se pone {}, pero si no tiene default
se tiene que poner {}

*/

export const FirstApp = () =>{

    return (
        <Fragment>
        <h1>Hola mundo esta es mi first app</h1>
        <p>Anadiendo otra linea para usar Fragmentos</p>
        <p>Otra forma de usar fragmento es con los mayor o menor</p>
        </Fragment>
    );
}
