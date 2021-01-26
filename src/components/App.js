import './App.css';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamList from './Streams/StreamList';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamShow from './Streams/StreamShow';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
    <div className="ui container">
    <Header />
      <Route path="/" exact component={StreamList}></Route>
      <Route path="/streams/new" exact component={StreamCreate}></Route>
      <Route path="/streams/edit" exact component={StreamEdit}></Route>
      <Route path="/streams/delete" exact component={StreamDelete}></Route>
      <Route path="/streams/show" exact component={StreamShow}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
