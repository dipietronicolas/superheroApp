import { SuperheroSearchBar } from './components/SuperheroSearchBar/SuperheroSearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Estoy usando un proxy para que funcione la superheroAPI en desarrollo.
// Se llama local-cors-proxy, lo instale de manera global en mi pc.
// Y lo corro en otra terminal a la hora de correr mi proyecto.

function App() {

  return (
    <div className="App mx-auto">
      <SuperheroSearchBar />
    </div>
  );
}

export default App;
