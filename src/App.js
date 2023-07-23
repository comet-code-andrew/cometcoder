import logo from './logo.svg';
import './App.css';
import Home from "./routes/home/home.component";


import {ThemeProvider, createTheme} from '@mui/material/styles';
import GlobalStyle from "./globalStyles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6408",
    },
    secondary: {
      main: "#19C1DC"
    }
  },
  typography:{
    h1: {
      fontFamily: "motter",
      color: "#19C1DC"
    },
    h2: {
      fontFamily: "motter",
      color: "#19C1DC"

    },
    h3: {
      fontFamily: "sans-serif",
      color: "#FEFEFE",
      fontSize: "1.5em",
    },
    h5: {
      fontSize: 20,
      fontFamily: 'Orbitron',
      color: "#FEFEFE"
    },
    body1: {
      fontFamily: 'sans-serif',
      color: "#FEFEFE"
    }
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#3D3D3D"
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          color: "black"
        }
      }
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
