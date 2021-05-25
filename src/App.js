import { SuperheroSearchBar } from './components/SuperheroSearchBar/SuperheroSearchBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SuperheroSheet } from './components/SuperheroSheet/SuperheroSheet';
import { SuperheroProvider } from './context/SuperheroContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { SuperheroTeam } from './components/SuperheroTeam/SuperheroTeam';

// Estoy usando un proxy para que funcione la superheroAPI en desarrollo.
// Se llama local-cors-proxy, lo instale de manera global en mi pc.
// Y lo corro en otra terminal a la hora de correr mi proyecto.

function App() {

  return (
    <SuperheroProvider>
      <BrowserRouter>
        <div className="App mx-auto pt-5">
          <Switch>
            <Route path="/" exact>
              <SuperheroSearchBar />
              <SuperheroTeam />
            </Route>
            <Route path="/superhero/:id">
              <SuperheroSheet />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </SuperheroProvider>
  );
}

export default App;
