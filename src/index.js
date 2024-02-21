import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from "./store/UserStore";
import TeamStore from "./store/TeamStore";


const root = ReactDOM.createRoot(document.getElementById('root'));


export const Context = createContext(null)

root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      team: new TeamStore(),
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
