import { SuperheroSearchBar } from './components/SuperheroSearchBar/SuperheroSearchBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SuperheroSheet } from './components/SuperheroSheet/SuperheroSheet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Estoy usando un proxy para que funcione la superheroAPI en desarrollo.
// Se llama local-cors-proxy, lo instale de manera global en mi pc.
// Y lo corro en otra terminal a la hora de correr mi proyecto.

function App() {

  return (
    <BrowserRouter>
      <div className="App mx-auto">
        <Switch>
          <Route path="/" exact>
            <SuperheroSearchBar />
          </Route>
          <Route path="/superhero/:id" exact>
            <SuperheroSheet />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
