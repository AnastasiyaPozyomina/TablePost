import './App.css';
import Grid from './components/Table/DataGrid';
import Container from '@mui/material/Container';

function App () {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <h1>Table</h1>
        <Grid />
      </Container>
    </div>
  );
}

export default App;
