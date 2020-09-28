import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Posts from './containers/Posts/Posts';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import NewPost from './components/NewPost/NewPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Layout>
       <Route path="/posts" component={Posts}/>
       <Route path="/addpost" component={NewPost}/>
       <Route exact path="/" render={() => <h1>Welcome to home</h1>}/>
     </Layout>
     </BrowserRouter>
    </div>
  );
}

export default App;
