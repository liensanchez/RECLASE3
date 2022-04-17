import logo from './logo.svg';
import NavBar from './Componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './Componentes/Titulo/Titulo';


function App() {

  let variableTitulo = '10% Descuento'
  //ESTADOS PARA PROPS

  let variableSubtitulo = 'Con pago en efectivo'

  return (
  
    <div>

      <NavBar/>

      <Titulo titulo={variableTitulo} subtitulo={variableSubtitulo}/> 
      {/*PROPS QUE SE KUEGO SE RECUPERAN EN TITULO Y SE APLICAN*/}

    </div>
 
 );

}

export default App;
