import './App.css';
import Search from './components/Search/Search'
import List from './components/List/List'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

function App() {
  return (
    <div className="App">
            <div className="header">
              <h1>Welcome to TitleBot!</h1>
              <small>Search a URL, and I'll grab the title and favicon</small>
            </div>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ minHeight: '100vh' }}
        >
        < Paper
          elevation={12}
          style={{
            margin: 8,
            border: "1px solid black"
          }}
        >
          < Search />
        </Paper>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        // style={{ minHeight: '100vh' }}
        >
        < Paper
            elevation={12}
            style={{
              margin: 8,
              border: "1px solid black"
            }}
          >
          < List />
        </Paper>
      </Grid>

    </div>
  );
}

export default App;
