// Components
import { SuperheroSearchBar } from './components/SuperheroSearchBar/SuperheroSearchBar';
import { SuperheroSheet } from './components/SuperheroSheet/SuperheroSheet';
import { SuperheroTeam } from './components/SuperheroTeam/SuperheroTeam';
import { LoginForm } from './components/LoginForm/LoginForm';
// Router
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Context
import { AuthProvider } from './context/AuthContext';
import { SuperheroProvider } from './context/SuperheroContext';
// Estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

// Estoy usando un proxy para que funcione la superheroAPI en desarrollo.
// Se llama local-cors-proxy, lo instale de manera global en mi pc.
// Y lo corro en otra terminal a la hora de correr mi proyecto.

function App() {

  return (
    <AuthProvider>
      <SuperheroProvider>
        <BrowserRouter>
          <div className="App mx-auto pt-5">
            <Switch>
              <Route path="/" exact>
                <LoginForm />
              </Route>
              <Route path="/search">
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
    </AuthProvider>
  );
}

export default App;
