import React from 'react';
import './App.css';

import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
