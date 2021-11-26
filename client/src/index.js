
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
import { StyledEngineProvider } from '@mui/material/styles';

export const Context = createContext(null)

ReactDOM.render(
    <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
    }}>
        <App />
    </Context.Provider>
    </StyledEngineProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

