import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Posts from './containers/Posts/Posts';

function App() {
  return (
    <div className="App">
     <Layout>
       <Posts/>
     </Layout>
    </div>
  );
}

export default App;
