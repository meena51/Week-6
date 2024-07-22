// App.js

import React from 'react';
import './App.css'; // Importing CSS file for App component
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
      </header>
      <main className="App-main">
        <ProductPage />
      </main>
      <footer className="App-footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;
