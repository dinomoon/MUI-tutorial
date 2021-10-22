import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
