import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Posts from './containers/Posts/Posts';
import {BrowserRouter , Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import NewPost from './components/NewPost/NewPost';
import FullPost from './components/FullPost/FullPost';
function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename='my-app'> */}
      <BrowserRouter>
     <Layout>
        <Switch>
        <Route exact path="/" render={() => <h1>Welcome to home</h1>}/>
       <Route path="/posts" component={Posts}/>
       <Route path="/addpost" component={NewPost}/>
        <Route path="/fullpost/:id" exact component={FullPost}/>
        <Route render={() => <h1>Error 404 not found </h1>}/>{/*this route caches invalid routes */}
       </Switch>
     </Layout>
     </BrowserRouter>
    </div>
  );
}

export default App;
