import Home from './pages/home/Home';
import Single from "./pages/single/Single";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import "./dark.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeCtx';
import WordleMain from './wordle-game/WordleMain';
import PokeMon from './pokemonApi/Pokemon';
import ReduxApp from './to-doList/ReduxApp';



function App() {
  const {darkMode } = useContext(DarkModeContext)

  return (
    <div className={ darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index  element={<Home/>} />
            <Route path='wordle' element={<WordleMain/>} />
            <Route path='pokemon-api' element={<PokeMon/>} />
            <Route path='todo' element={<ReduxApp/>} />

            <Route path='login'  element={<Login/>} />
            <Route path='users'  >
              <Route index  element={<List/>} />
              <Route path=':userId'  element={<Single/>} />
              <Route path='new'  element={<New/>} />
            </Route>
            <Route path='products'  >
              <Route index  element={<List/>} />
              <Route path=':productId'  element={<Single/>} />
              <Route path='new'  element={<New/>} />
            </Route>
            

          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
