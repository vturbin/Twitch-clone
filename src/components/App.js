import './App.css';
import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamList from './Streams/StreamList';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamShow from './Streams/StreamShow';
import Header from './Header';
import history from '../history';

function App() {
  return (
    <Router history={history}>
    <div className="ui container">
    <Header />
    <Switch>
      <Route path="/" exact component={StreamList}></Route>
      <Route path="/streams/new" exact component={StreamCreate}></Route>
      <Route path="/streams/edit/:id" exact component={StreamEdit}></Route>
      <Route path="/streams/delete/:id" exact component={StreamDelete}></Route>
      <Route path="/streams/:id" exact component={StreamShow}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
