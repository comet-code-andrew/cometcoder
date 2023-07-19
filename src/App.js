import logo from './logo.svg';
import './App.css';
import Home from "./routes/home/home.component";
import GlobalStyle from "./globalStyles";



import {red} from '@mui/material/colors';

import {ThemeProvider, createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  typography:{
    h5: {
      fontSize: 20,
      fontFamily: 'Orbitron',
    },
    body2: {
      fontFamily: 'Tektur',
    }

  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle/>
        <Home/>
      </div>
    </ThemeProvider>
  )
    ;
}

export default App;
