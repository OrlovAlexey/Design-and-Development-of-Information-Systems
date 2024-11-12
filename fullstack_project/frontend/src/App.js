import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import CreateNote from './components/dashboard/dashboardoperations/CreateNote';
import NotFound from './components/shared/NotFound';
import { Provider } from 'react-redux';
import store from './Store';
import UpdateNote from './components/dashboard/dashboardoperations/UpdateNote';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={Nav} />
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/createnote" exact component={CreateNote} />
          <Route path="/updatenote/:id" exact component={UpdateNote} />
          <Route path="/" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
